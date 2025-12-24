'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

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
    const scriptsLoadedRef = useRef(false);

    useEffect(() => {
        if (scriptsLoadedRef.current) return;

        const loadMapScripts = async () => {
            try {
                // Load mapdata.js first
                const scriptMapData = document.createElement('script');
                scriptMapData.src = '/vendor/updated/mapdata.js';
                scriptMapData.async = false; // Load in order

                scriptMapData.onload = () => {
                    // Then load countrymap.js
                    const scriptCountryMap = document.createElement('script');
                    scriptCountryMap.src = '/vendor/updated/countrymap.js';
                    scriptCountryMap.async = false;

                    scriptCountryMap.onload = () => {
                        if (window.simplemaps_countrymap && window.simplemaps_countrymap.load) {
                            window.simplemaps_countrymap.load();
                            scriptsLoadedRef.current = true;
                        }
                    };

                    document.body.appendChild(scriptCountryMap);
                };

                document.body.appendChild(scriptMapData);

            } catch (error) {
                console.error('Error loading map:', error);
            }
        };

        loadMapScripts();
        return () => {
            if (window.simplemaps_countrymap && window.simplemaps_countrymap.delete) {
                window.simplemaps_countrymap.delete();
            }
        };
    }, []);

    return (
        <section
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
                <div
                    ref={mapContainerRef}
                    id="map"
                />
            </div>
        </section>
    );
}