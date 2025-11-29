'use client'

import type { GalleryItem } from '@/lib/feed'

interface GalleryProps {
  items: GalleryItem[]
  showTitles?: boolean // Easy toggle for future
}

export function Gallery({ items, showTitles = false }: GalleryProps) {
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
            <div className="snap-start group">
              <div className="relative bg-border rounded-3xl lg:rounded-[32px] overflow-hidden mb-2" style={{ height: '400px' }}>
                <img
                  src={item.image}
                  alt={item.title || `Gallery item ${index + 1}`}
                  className="block h-full w-auto object-contain transition-all duration-500 ease-out group-hover:scale-[1.02]"
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
                className="block flex-shrink-0"
              >
                {content}
              </a>
            )
          }

          return <div key={index} className="flex-shrink-0">{content}</div>
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
