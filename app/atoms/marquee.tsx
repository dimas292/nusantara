'use client'

import React from 'react'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({
  children,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  const marqueeId = React.useId()
  const animationDirection = direction === 'left' ? 'marquee' : 'marquee-reverse'

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        #${marqueeId} {
          animation: ${animationDirection} ${speed}s linear infinite;
        }

        ${pauseOnHover ? `#${marqueeId}:hover { animation-play-state: paused; }` : ''}
      `}</style>

      <div className={`w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 backdrop-blur-xl ${className}`}>
        <div
          id={marqueeId}
          className="flex whitespace-nowrap gap-4 sm:gap-6 md:gap-8"
        >
          {children}
          {children}
        </div>
      </div>
    </>
  )
}

export default Marquee
