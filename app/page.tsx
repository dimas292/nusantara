'use client';

import dynamic from 'next/dynamic';
import IntroSection from "./atoms/intro-section";
import Marquee from "./atoms/marquee";
import { Provinces } from './constant/provinsi';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key, useEffect } from 'react';
import IndonesiaMapCard from './atoms/map-indonesia';
import Hero2 from './atoms/hero-v2';
const Timeline = dynamic(() => import('./atoms/timeline'), {
  loading: () => (
    <div className="w-full py-12 sm:py-14 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center min-h-175">
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
    const hash = window.location.hash;
    if (hash === '#map') {
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
      <Hero2 />
      <Marquee className="py-2 sm:py-3 md:py-4">
        {Provinces.map((prov, idx) => (
          <span key={idx} className="text-base sm:text-xl md:text-2xl font-bold">
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
