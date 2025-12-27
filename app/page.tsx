'use client';

import dynamic from 'next/dynamic';
import Hero from "./atoms/hero";
import IntroSection from "./atoms/intro-section";
import Marquee from "./atoms/marquee";
import { Provinces } from './constant/provinsi';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key, useEffect } from 'react';
import IndonesiaMapCard from './atoms/map-indonesia';
const Timeline = dynamic(() => import('./atoms/timeline'), {
  loading: () => (
    <div className="w-full py-12 sm:py-14 md:py-16 bg-linear-to-b from-[#0B1220] to-[#0F172A] flex items-center justify-center min-h-175">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
        <p className="text-white">Loading History Timeline...</p>
      </div>
    </div>
  ),
  ssr: false, 
});

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from detail page
    const hash = window.location.hash;
    if (hash === '#map') {
      // Wait for content to render, then scroll
      setTimeout(() => {
        const mapElement = document.getElementById('map');
        if (mapElement) {
          mapElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <main>
      <Hero />
      <Marquee className="py-2 sm:py-3 md:py-4">
        {Provinces.map((prov, idx) => (
          <span key={idx} className="text-base sm:text-lg md:text-xl font-bold">
            {prov.title}
          </span>
        ))}
      </Marquee>
      <IntroSection />
      <Timeline />
      <IndonesiaMapCard />
    </main>
  );
}
