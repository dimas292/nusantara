'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { motion, AnimatePresence } from 'framer-motion';
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
            { rootMargin: '300px' } 
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
                
                <div className="relative">
                    {/* Animated Skeleton Loader with AnimatePresence */}
                    <AnimatePresence>
                        {(!isMapVisible || !isMapLoaded) && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="w-full min-h-150 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 p-8"
                            >
                                <div className="max-w-4xl mx-auto space-y-6">
                                    {/* Map outline skeleton */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="relative"
                                    >
                                        {/* Indonesia map shape approximation with skeleton */}
                                        <div className="relative h-100 flex items-center justify-center">
                                            {/* Main islands skeleton */}
                                            <div className="absolute inset-0 flex items-center justify-center gap-4">
                                                {/* Sumatra */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <Skeleton className="w-24 h-48 rounded-3xl rotate-12 bg-gray-200" />
                                                </motion.div>
                                                
                                                {/* Java */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="flex flex-col gap-2"
                                                >
                                                    <Skeleton className="w-40 h-16 rounded-2xl bg-gray-200" />
                                                    <Skeleton className="w-32 h-12 rounded-2xl ml-4 bg-gray-200" />
                                                </motion.div>
                                                
                                                {/* Kalimantan */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 }}
                                                >
                                                    <Skeleton className="w-32 h-32 rounded-3xl bg-gray-200" />
                                                </motion.div>
                                                
                                                {/* Sulawesi */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    <Skeleton className="w-20 h-40 rounded-3xl -rotate-12 bg-gray-200" />
                                                </motion.div>
                                                
                                                {/* Papua */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.6 }}
                                                >
                                                    <Skeleton className="w-28 h-24 rounded-3xl bg-gray-200" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                    
                                    {/* Province legend skeleton */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.7 + index * 0.05 }}
                                                className="flex items-center gap-2"
                                            >
                                                <Skeleton className="w-4 h-4 rounded-full bg-gray-300" />
                                                <Skeleton className="h-4 flex-1 bg-gray-200" />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                                
                              
                                <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px] rounded-xl">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-center space-y-3 bg-white/90 p-6 rounded-lg shadow-lg"
                                    >
                                        <div className="relative">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                        <p className="text-gray-700 font-medium">Loading Interactive Map...</p>
                                        <p className="text-gray-500 text-sm">Preparing Indonesia&apos;s provinces</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                   
                    {isMapVisible && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isMapLoaded ? 1 : 0 }}
                            transition={{ duration: 0.6 }}
                            ref={mapContainerRef}
                            id="map"
                            className="min-h-150"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}