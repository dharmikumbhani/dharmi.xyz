'use client'

import { useState } from 'react'
import type { GalleryItem } from '@/lib/feed'

interface GalleryProps {
  items: GalleryItem[]
  showTitles?: boolean // Easy toggle for future
}

export function Gallery({ items, showTitles = false }: GalleryProps) {
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({})

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }))
  }

  return (
    <div className="relative -mx-4 px-4">
      <div
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {items.map((item, index) => {
          if (!item.image) return null

          const content = (
            <div className="flex-none w-[450px] snap-start group">
              <div className="relative bg-border rounded-lg overflow-hidden mb-2">
                <img
                  src={item.image}
                  alt={item.title || `Gallery item ${index + 1}`}
                  onLoad={() => handleImageLoad(index)}
                  className="w-full h-auto transition-all duration-500 ease-out group-hover:scale-[1.02]"
                  style={{
                    opacity: loadedImages[index] ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
              </div>

              {/* Title support - hidden by default, controlled by showTitles prop */}
              {showTitles && item.title && (
                <p className="text-xs text-text-muted px-1 line-clamp-2">
                  {item.title}
                </p>
              )}
            </div>
          )

          if (item.link) {
            return (
              <a
                key={index}
                href={item.link}
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

      {/* Subtle gradient fade on right edge to indicate more content */}
      <div
        className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, var(--color-bg))'
        }}
      />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
