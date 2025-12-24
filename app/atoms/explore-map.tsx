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
                const mapData: MapData = {
                    main_settings: {
                        width: "responsive",
                        background_color: "#FFFFFF",
                        background_transparent: "no",
                        border_color: "#1e293b",
                        state_description: "Click to explore",
                        state_color: "#334155",
                        state_hover_color: "#0ea5e9",
                        state_url: "",
                        border_size: 1.5,
                        all_states_inactive: "no",
                        all_states_zoomable: "yes",
                        location_description: "Location",
                        location_url: "",
                        location_color: "#FF0067",
                        location_opacity: 0.8,
                        location_hover_opacity: 1,
                        location_size: 25,
                        location_type: "square",
                        location_border_color: "#FFFFFF",
                        location_border: 2,
                        location_hover_border: 2.5,
                        all_locations_inactive: "no",
                        all_locations_hidden: "no",
                        label_color: "#ffffff",
                        label_hover_color: "#0ea5e9",
                        label_size: 14,
                        label_font: "Arial",
                        label_display: "auto",
                        label_scale: "yes",
                        hide_labels: "no",
                        zoom: "yes",
                        manual_zoom: "yes",
                        back_image: "no",
                        initial_back: "no",
                        initial_zoom: "-1",
                        initial_zoom_solo: "no",
                        region_opacity: 1,
                        region_hover_opacity: 0.6,
                        zoom_out_incrementally: "yes",
                        zoom_percentage: 0.99,
                        zoom_time: 0.5,
                        popup_color: "#1e293b",
                        popup_opacity: 0.95,
                        popup_shadow: 1,
                        popup_corners: 8,
                        popup_font: "14px/1.5 Arial, sans-serif",
                        popup_nocss: "no",
                        div: "map",
                        auto_load: "yes",
                        url_new_tab: "no",
                        fade_time: 0.3,
                        link_text: "Learn More",
                        popups: "detect"
                    },
                    state_specific: {
                        IDAC: { name: "Aceh" },
                        IDBA: { name: "Bali" },
                        IDBB: { name: "Bangka-Belitung" },
                        IDBE: { name: "Bengkulu" },
                        IDBT: { name: "Banten" },
                        IDGO: { name: "Gorontalo" },
                        IDJA: { name: "Jambi" },
                        IDJB: { name: "Jawa Barat" },
                        IDJI: { name: "Jawa Timur" },
                        IDJK: { name: "Jakarta Raya", color: "#0ea5e9" },
                        IDJT: { name: "Jawa Tengah" },
                        IDKB: { name: "Kalimantan Barat" },
                        IDKI: { name: "Kalimantan Timur" },
                        IDKR: { name: "Kepulauan Riau" },
                        IDKS: { name: "Kalimantan Selatan" },
                        IDKT: { name: "Kalimantan Tengah" },
                        IDKU: { name: "North Kalimantan" },
                        IDLA: { name: "Lampung" },
                        IDMA: { name: "Maluku" },
                        IDMU: { name: "Maluku Utara" },
                        IDNB: { name: "Nusa Tenggara Barat" },
                        IDNT: { name: "Nusa Tenggara Timur" },
                        IDPA: { name: "Papua" },
                        IDPB: { name: "Papua Barat" },
                        IDRI: { name: "Riau" },
                        IDSA: { name: "Sulawesi Utara" },
                        IDSB: { name: "Sumatera Barat" },
                        IDSG: { name: "Sulawesi Tenggara" },
                        IDSN: { name: "Sulawesi Selatan" },
                        IDSR: { name: "Sulawesi Barat" },
                        IDSS: { name: "Sumatera Selatan" },
                        IDST: { name: "Sulawesi Tengah" },
                        IDSU: { name: "Sumatera Utara" },
                        IDYO: { name: "Yogyakarta" }
                    },
                    locations: {
                        "0": {
                            name: "Jakarta",
                            lat: "-6.174444",
                            lng: "106.829444"
                        }
                    },
                    labels: {
                        IDAC: { name: "Aceh", parent_id: "IDAC" },
                        IDBA: { name: "Bali", parent_id: "IDBA" },
                        IDBB: { name: "Bangka-Belitung", parent_id: "IDBB" },
                        IDBE: { name: "Bengkulu", parent_id: "IDBE" },
                        IDBT: { name: "Banten", parent_id: "IDBT" },
                        IDGO: { name: "Gorontalo", parent_id: "IDGO" },
                        IDJA: { name: "Jambi", parent_id: "IDJA" },
                        IDJB: { name: "Jawa Barat", parent_id: "IDJB" },
                        IDJI: { name: "Jawa Timur", parent_id: "IDJI" },
                        IDJK: { name: "Jakarta Raya", parent_id: "IDJK" },
                        IDJT: { name: "Jawa Tengah", parent_id: "IDJT" },
                        IDKB: { name: "Kalimantan Barat", parent_id: "IDKB" },
                        IDKI: { name: "Kalimantan Timur", parent_id: "IDKI" },
                        IDKR: { name: "Kepulauan Riau", parent_id: "IDKR" },
                        IDKS: { name: "Kalimantan Selatan", parent_id: "IDKS" },
                        IDKT: { name: "Kalimantan Tengah", parent_id: "IDKT" },
                        IDKU: { name: "North Kalimantan", parent_id: "IDKU" },
                        IDLA: { name: "Lampung", parent_id: "IDLA" },
                        IDMA: { name: "Maluku", parent_id: "IDMA" },
                        IDMU: { name: "Maluku Utara", parent_id: "IDMU" },
                        IDNB: { name: "Nusa Tenggara Barat", parent_id: "IDNB" },
                        IDNT: { name: "Nusa Tenggara Timur", parent_id: "IDNT" },
                        IDPA: { name: "Papua", parent_id: "IDPA" },
                        IDPB: { name: "Papua Barat", parent_id: "IDPB" },
                        IDRI: { name: "Riau", parent_id: "IDRI" },
                        IDSA: { name: "Sulawesi Utara", parent_id: "IDSA" },
                        IDSB: { name: "Sumatera Barat", parent_id: "IDSB" },
                        IDSG: { name: "Sulawesi Tenggara", parent_id: "IDSG" },
                        IDSN: { name: "Sulawesi Selatan", parent_id: "IDSN" },
                        IDSR: { name: "Sulawesi Barat", parent_id: "IDSR" },
                        IDSS: { name: "Sumatera Selatan", parent_id: "IDSS" },
                        IDST: { name: "Sulawesi Tengah", parent_id: "IDST" },
                        IDSU: { name: "Sumatera Utara", parent_id: "IDSU" },
                        IDYO: { name: "Yogyakarta", parent_id: "IDYO" }
                    },
                    legend: {
                        entries: []
                    },
                    regions: {}
                };

                window.simplemaps_countrymap_mapdata = mapData;

                const script1 = document.createElement('script');
                script1.src = '/vendor/html5countrymapv4.5/countrymap.js';
                script1.async = true;

                script1.onload = () => {
                    if (window.simplemaps_countrymap && window.simplemaps_countrymap.load) {
                        window.simplemaps_countrymap.load();
                        scriptsLoadedRef.current = true;
                    }
                };

                document.body.appendChild(script1);

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
                <p className="text-black text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
                    Dive into an interactive map showcasing Indonesia&apos;s diverse cultures, traditions, and heritage across its 17,000 islands.
                </p>
                <div
                    ref={mapContainerRef}
                    id="map"
                />
            </div>
        </section>
    );
}