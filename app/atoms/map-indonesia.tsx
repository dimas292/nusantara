'use client'

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Provinces as provinces } from '@/app/constant/provinsi';
import ProvinceModal from './province-modal';

const IndonesiaMapCard = () => {
  const [hoveredProvince, setHoveredProvince] = useState<typeof provinces[0] | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<SVGPathElement>, province: typeof provinces[0]) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredProvince(province);
    setTooltipPos({
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseLeave = () => {
    setHoveredProvince(null);
  };

  const handleProvinceClick = (province: typeof provinces[0]) => {
    setSelectedProvinceId(province.id.toLowerCase());
    setIsModalOpen(true);
  };

  return (
    <section className="w-full py-12 sm:py-14 md:py-16 bg-gradient-to-br from-gray-50 via-white to-red-50" id='map'>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6 text-center">
          Navigate the <span className='bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent'>Archipelago</span>
        </h2>
        <p className="text-black text-center mb-4 max-w-3xl mx-auto">
          Dive into an interactive map showcasing Indonesia&apos;s diverse cultures, traditions, and heritage across its 17,000 islands.
        </p>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto italic">
          <span className="font-semibold text-red-600">Click</span> on any province to discover rich knowledge and fascinating insights.
          <span className="font-semibold text-red-600"> Hover</span> to preview each region&apos;s unique story.
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 792.54596 316.66394"
        className="w-full h-auto"
        style={{ maxHeight: '500px' }}
      >
        <g>
          {provinces.map((province, idx) => (
            <path
              key={idx}
              id={province.id}
              d={province.path}
              className="transition-all duration-200 cursor-pointer"
              fill={hoveredProvince?.title === province.title ? "#000000" : "#dc2626"}
              stroke="#ffffff"
              strokeWidth="0.5"
              onMouseMove={(e) => handleMouseMove(e, province)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleProvinceClick(province)}
              style={{
                filter: hoveredProvince?.title === province.title
                  ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
                  : 'none'
              }}
            />
          ))}
        </g>
      </svg>
      {hoveredProvince && (
        <div
          className="fixed z-50 pointer-events-none animate-in fade-in-0 zoom-in-95 duration-200"
          style={{
            left: `${tooltipPos.x + 15}px`,
            top: `${tooltipPos.y - 10}px`,
            transform: 'translateY(-100%)'
          }}
        >
          <div className="relative flex flex-col items-start gap-2">
            {hoveredProvince.short_description && (
              <div className="w-48 h-auto overflow-hidden backdrop-blur-xl bg-white/90 border border-white/20 shadow-2xl rounded-2xl p-3">
                <p className="text-black text-sm">{hoveredProvince.short_description}</p>
              </div>
            )}

            <div className="backdrop-blur-xl bg-black/90 text-white relative overflow-visible rounded-xl p-3 border border-white/10 shadow-2xl">
              <div className="font-bold text-sm whitespace-nowrap pl-2">
                {hoveredProvince.title}
              </div>


              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-red-600"></div>
              <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-red-600"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-red-600"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-red-600"></div>
            </div>
          </div>
        </div>
      )}
      <ProvinceModal
        provinceId={selectedProvinceId}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default IndonesiaMapCard;