'use client'

import { useEffect, useState } from 'react'
import { getFeedNavItems } from '@/lib/feed'

const CONFIG = {
  rotationPerItem: 12,      // degrees - reduced for tighter spacing
  cylinderRadius: 130,      // px - increased for bigger carousel
} as const

export function CarouselNav() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navItems = getFeedNavItems()

  // Sync carousel with page scroll - immediate updates with RAF
  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      // Update on next frame for smooth 60fps sync
      rafId = requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2

        const closestItem = navItems.reduce((closest, item, index) => {
          const element = document.getElementById(`item-${item.id}`)
          if (!element) return closest

          const rect = element.getBoundingClientRect()
          const center = rect.top + rect.height / 2
          const distance = Math.abs(center - viewportCenter)

          return distance < closest.distance
            ? { index, distance }
            : closest
        }, { index: 0, distance: Infinity })

        setActiveIndex(closestItem.index)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [navItems])

  const handleClick = (index: number) => {
    const element = document.getElementById(`item-${navItems[index].id}`)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const rotation = activeIndex * CONFIG.rotationPerItem

  return (
    <div
      className="relative overflow-visible"
      style={{
        height: 'var(--carousel-height)',
        perspective: '1000px',
        perspectiveOrigin: 'center center',
      }}
    >
      {/* Carousel cylinder */}
      <div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {navItems.map((item, index) => {
          const offsetFromActive = Math.abs(index - activeIndex)
          const isActive = index === activeIndex

          // Scale: active item is bigger
          const scale = isActive ? 1.1 : 1 - (offsetFromActive * 0.08)
          const opacity = isActive ? 1 : Math.max(0.15, 1 - offsetFromActive * 0.35)

          return (
            <button
              key={item.id}
              onClick={() => handleClick(index)}
              className="absolute left-0 px-3 py-2 text-xs rounded-md"
              style={{
                transform: `
                  rotateX(${-index * CONFIG.rotationPerItem}deg)
                  translateZ(${CONFIG.cylinderRadius}px)
                  scale(${scale})
                `,
                opacity,
                top: '50%',
                marginTop: -20,
                backfaceVisibility: 'hidden',
                pointerEvents: offsetFromActive <= 2 ? 'auto' : 'none',
                transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
                willChange: 'transform, opacity',
              }}
            >
              <span
                className={item.type === 'title' ? 'font-medium' : 'font-normal'}
                style={{
                  color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                  fontWeight: isActive ? 600 : item.type === 'title' ? 500 : 400,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s ease-out',
                }}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Center indicator line */}
      <div
        className="absolute left-0 right-0 top-1/2 h-12 pointer-events-none"
        style={{
          transform: 'translateY(-50%)',
          background: 'linear-gradient(to right, transparent, var(--color-border), transparent)',
          opacity: 0.15,
        }}
      />

      {/* Minimal center dot */}
      <div
        className="absolute left-0 top-1/2 w-[3px] h-[3px] rounded-full pointer-events-none"
        style={{
          backgroundColor: 'var(--color-text)',
          transform: 'translateY(-1.5px)',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  )
}
