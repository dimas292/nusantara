'use client';

import dynamic from 'next/dynamic';
import Hero from "./atoms/hero";
import IntroSection from "./atoms/intro-section";
import Marquee from "./atoms/marquee";
import { Provinsi } from "./constant/provinsi";

// Dynamic imports for heavy components - lazy loaded
const Timeline = dynamic(() => import('./atoms/timeline'), {
  loading: () => (
    <div className="w-full py-12 sm:py-14 md:py-16 bg-linear-to-b from-[#0B1220] to-[#0F172A] flex items-center justify-center min-h-175">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
        <p className="text-white">Loading History Timeline...</p>
      </div>
    </div>
  ),
  ssr: false, // Disable SSR for this component to reduce initial bundle
});

const ExploreMap = dynamic(() => import('./atoms/explore-map'), {
  loading: () => (
    <div className="w-full py-12 sm:py-14 md:py-16 bg-white flex items-center justify-center min-h-125">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Interactive Map...</p>
      </div>
    </div>
  ),
  ssr: false, // Disable SSR for this component to reduce initial bundle
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee className="py-2 sm:py-3 md:py-4">
        {Provinsi.map((prov, idx) => (
          <span key={idx} className="text-base sm:text-lg md:text-xl font-bold">
            {prov.name}
          </span>
        ))}
      </Marquee>
      <IntroSection />
      <Timeline />
      <ExploreMap />
    </main>
  );
}
