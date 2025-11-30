'use client'

import { useState } from 'react'
import type { Sticker } from '@/lib/profile'

interface StickersProps {
  stickers: Sticker[]
}

export function Stickers({ stickers }: StickersProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (!stickers || stickers.length === 0) return null

  return (
    <div className="hidden lg:block mt-6">
      <div className="flex flex-wrap gap-2">
        {stickers.map((sticker, index) => {
          const content = (
            <div
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={sticker.image}
                alt={sticker.alt}
                className="w-12 h-12 object-contain transition-transform duration-200 ease-out group-hover:scale-110 group-hover:rotate-3"
              />

              {/* Tooltip */}
              {sticker.tooltip && hoveredIndex === index && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-text text-bg text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {sticker.tooltip}
                </div>
              )}
            </div>
          )

          if (sticker.url) {
            return (
              <a
                key={index}
                href={sticker.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            )
          }

          return <div key={index}>{content}</div>
        })}
      </div>
    </div>
  )
}
