import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

import { Provinces as provinces } from '@/app/constant/provinsi';

const IndonesiaMapCard = () => {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<SVGPathElement>, title: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredProvince(title);
    setTooltipPos({
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseLeave = () => {
    setHoveredProvince(null);
  };

  return (
      <section className="w-full py-12 sm:py-14 md:py-16 bg-white" id='map'>
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
                  fill={hoveredProvince === province.title ? "#000000" : "#dc2626"}
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  onMouseMove={(e) => handleMouseMove(e, province.title)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    filter: hoveredProvince === province.title 
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
              <div className="relative">
            
                <div className="bg-black text-white relative overflow-visible p-2"> 
                  <div className="font-bold text-sm whitespace-nowrap pl-2">
                    {hoveredProvince}
                  </div>
                  
                 
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-red-600"></div>
                  <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-red-600"></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-red-600"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-red-600"></div>
                </div>
               
                <div 
                  className="absolute left-4 top-full w-0 h-0 -mt-px"
                  style={{
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: '6px solid white',
                  }}
                >
                  <div 
                    className="absolute -top-2 -left-1.25"
                    style={{
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid black',
                    }}
                  />
                </div>
              </div>
            </div>
          )}
      </section>
  );
};

export default IndonesiaMapCard;