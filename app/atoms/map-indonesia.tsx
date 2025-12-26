import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
            <Card
            variant={"red"}
              className="fixed cursor-default z-999 pointer-events-none bg-white "
              style={{
                left: `${tooltipPos.x + 15}px`,
                top: `${tooltipPos.y - 10}px`,
                transform: 'translateY(-100%)'
              }}
            >
              <div className="font-semibold mx-4">{hoveredProvince}</div>
            </Card>
          )}
      </section>
  );
};

export default IndonesiaMapCard;