'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        simplemaps_countrymap?: any;
        simplemaps_countrymap_mapdata?: any;
    }
}

interface MapSettings {
    width?: string;
    background_color?: string;
    background_transparent?: string;
    border_color?: string;
    state_description?: string;
    state_color?: string;
    state_hover_color?: string;
    state_url?: string;
    border_size?: number;
    all_states_inactive?: string;
    all_states_zoomable?: string;
    location_description?: string;
    location_url?: string;
    location_color?: string;
    location_opacity?: number;
    location_hover_opacity?: number;
    location_size?: number;
    location_type?: string;
    location_border_color?: string;
    location_border?: number;
    location_hover_border?: number;
    all_locations_inactive?: string;
    all_locations_hidden?: string;
    label_color?: string;
    label_hover_color?: string;
    label_size?: number;
    label_font?: string;
    label_display?: string;
    label_scale?: string;
    hide_labels?: string;
    zoom?: string;
    manual_zoom?: string;
    back_image?: string;
    initial_back?: string;
    initial_zoom?: string;
    initial_zoom_solo?: string;
    region_opacity?: number;
    region_hover_opacity?: number;
    zoom_out_incrementally?: string;
    zoom_percentage?: number;
    zoom_time?: number;
    popup_color?: string;
    popup_opacity?: number;
    popup_shadow?: number;
    popup_corners?: number;
    popup_font?: string;
    popup_nocss?: string;
    div?: string;
    auto_load?: string;
    url_new_tab?: string;
    fade_time?: number;
    link_text?: string;
    popups?: string;
}

interface StateData {
    name: string;
    description?: string;
    color?: string;
    hover_color?: string;
    url?: string;
}

interface LocationData {
    name: string;
    lat: string;
    lng: string;
    description?: string;
}

interface MapData {
    main_settings: MapSettings;
    state_specific: Record<string, StateData>;
    locations: Record<string, LocationData>;
    labels: Record<string, { name: string; parent_id: string }>;
    legend: { entries: any[] };
    regions: Record<string, any>;
}

export default function ExploreMap() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const scriptsLoadedRef = useRef(false);
    const [isMapVisible, setIsMapVisible] = useState(false);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        // Lazy load map scripts when section enters viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isMapVisible) {
                        setIsMapVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: '300px' } // Load 300px before it enters viewport
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isMapVisible]);

    useEffect(() => {
        if (!isMapVisible || scriptsLoadedRef.current) return;

        const loadMapScripts = async () => {
            try {
                // Load mapdata.js first
                const scriptMapData = document.createElement('script');
                scriptMapData.src = '/vendor/updated/mapdata.js';
                scriptMapData.async = true; // Use async for better performance
                scriptMapData.defer = true;

                scriptMapData.onload = () => {
                    // Then load countrymap.js
                    const scriptCountryMap = document.createElement('script');
                    scriptCountryMap.src = '/vendor/updated/countrymap.js';
                    scriptCountryMap.async = true;
                    scriptCountryMap.defer = true;

                    scriptCountryMap.onload = () => {
                        if (window.simplemaps_countrymap && window.simplemaps_countrymap.load) {
                            window.simplemaps_countrymap.load();
                            scriptsLoadedRef.current = true;
                            setIsMapLoaded(true);
                        }
                    };

                    scriptCountryMap.onerror = () => {
                        console.error('Error loading countrymap.js');
                        setIsMapLoaded(false);
                    };

                    document.body.appendChild(scriptCountryMap);
                };

                scriptMapData.onerror = () => {
                    console.error('Error loading mapdata.js');
                    setIsMapLoaded(false);
                };

                document.body.appendChild(scriptMapData);

            } catch (error) {
                console.error('Error loading map:', error);
                setIsMapLoaded(false);
            }
        };

        loadMapScripts();
        return () => {
            if (window.simplemaps_countrymap && window.simplemaps_countrymap.delete) {
                window.simplemaps_countrymap.delete();
            }
        };
    }, [isMapVisible]);

    return (
        <section
            ref={sectionRef}
            className="w-full py-12 sm:py-14 md:py-16 bg-white"
            id="explore-map-section"
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center mb-6">
                <Button
                    size="sm"
                    className="bg-main text-white font-bold border-2 border-black shadow-shadow px-4 sm:px-6 text-sm sm:text-base mb-4"
                >
                    EXPLORATION MAP
                </Button>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6 text-center">
                    Navigate the <span className='text-red-600'>Archipelago</span>
                </h2>
                <p className="text-black text-center mb-4 max-w-3xl mx-auto">
                    Dive into an interactive map showcasing Indonesia&apos;s diverse cultures, traditions, and heritage across its 17,000 islands.
                </p>
                <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto italic">
                    <span className="font-semibold text-red-600">Click</span> on any province to discover rich knowledge and fascinating insights.
                    <span className="font-semibold text-red-600"> Hover</span> to preview each region&apos;s unique story.
                </p>
                {isMapVisible ? (
                    <div
                        ref={mapContainerRef}
                        id="map"
                        className={`transition-opacity duration-300 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                ) : (
                    <div className="w-full h-125 flex items-center justify-center bg-gray-50 rounded-lg">
                        <div className="text-center">
                            <div className="animate-pulse text-gray-400 mb-2">
                                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-sm">Loading interactive map...</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}