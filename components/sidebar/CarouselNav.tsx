'use client'

import { useEffect, useState } from 'react'
import { getFeedNavItems } from '@/lib/feed'

export function CarouselNav() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navItems = getFeedNavItems()
  const totalItems = navItems.length

  // Dynamic configuration based on item count
  const rotationPerItem = 360 / totalItems  // Always a perfect circle
  const cylinderRadius = Math.max(75, Math.min(90, 45 + totalItems * 2.2))  // Scales with items, capped 75-90px for ~7-8 items visible

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const nextIndex = Math.min(activeIndex + 1, totalItems - 1)
        handleClick(nextIndex)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const prevIndex = Math.max(activeIndex - 1, 0)
        handleClick(prevIndex)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, totalItems])

  const handleClick = (index: number) => {
    const element = document.getElementById(`item-${navItems[index].id}`)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * totalItems)
    handleClick(randomIndex)
  }

  const rotation = activeIndex * rotationPerItem

  return (
    <div className="space-y-2">
      {/* Thin separator above carousel */}
      <div className="h-px bg-border opacity-30" />

      {/* Header with title, shuffle button, and counter */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <span
            className="text-[11px] tracking-wide font-semibold uppercase"
            style={{
              color: 'var(--color-text-muted)',
              letterSpacing: '0.06em',
            }}
          >
            Highlights
          </span>
          <button
            onClick={handleRandom}
            className="transition-all duration-200 ease-out hover:rotate-12 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label={`Random item. Currently showing ${navItems[activeIndex]?.label}`}
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              {/* 3D Dice - Front face (showing 1 dot) */}
              <path
                d="M12 2 L22 7 L22 17 L12 22 L2 17 L2 7 Z"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Top face */}
              <path d="M12 2 L22 7 L12 12 L2 7 Z" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round" />
              {/* Right face */}
              <path d="M12 12 L12 22 L22 17 L22 7 Z" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
              {/* Left face */}
              <path d="M2 7 L2 17 L12 22 L12 12 Z" fill="currentColor" fillOpacity="0.12" strokeLinejoin="round" />

              {/* Dots on top face (showing 3) */}
              <circle cx="7.5" cy="7.5" r="0.8" fill="currentColor" />
              <circle cx="12" cy="7.5" r="0.8" fill="currentColor" />
              <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" />

              {/* Dots on right face (showing 5) */}
              <circle cx="17" cy="10.5" r="0.7" fill="currentColor" />
              <circle cx="20" cy="10.5" r="0.7" fill="currentColor" />
              <circle cx="18.5" cy="12.5" r="0.7" fill="currentColor" />
              <circle cx="17" cy="14.5" r="0.7" fill="currentColor" />
              <circle cx="20" cy="14.5" r="0.7" fill="currentColor" />
            </svg>
          </button>
        </div>
        <span
          className="text-[11px] tabular-nums"
          style={{
            color: 'var(--color-text-muted)',
            letterSpacing: '0.02em',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {activeIndex + 1} / {totalItems}
        </span>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-visible"
        style={{
          height: 'var(--carousel-height)',
          perspective: '1200px',
          perspectiveOrigin: 'center center',
        }}
      >
        {/* Carousel cylinder */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation}deg)`,
            transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {navItems.map((item, index) => {
            // Calculate circular distance (accounts for wrap-around)
            const linearDistance = Math.abs(index - activeIndex)
            const offsetFromActive = Math.min(linearDistance, totalItems - linearDistance)
            const isActive = index === activeIndex

            // Refined scaling: 1.12x for active to stand out more
            const scale = isActive ? 1.12 : Math.max(0.92, 1 - (offsetFromActive * 0.05))
            // Gentler opacity fade
            const opacity = isActive ? 1 : Math.max(0.25, 1 - offsetFromActive * 0.25)

            return (
              <button
                key={item.id}
                onClick={() => handleClick(index)}
                className="absolute left-1 px-3 py-1 text-xs rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                style={{
                  transform: `
                    translateY(-50%)
                    rotateX(${-index * rotationPerItem}deg)
                    translateZ(${cylinderRadius}px)
                    scale(${scale})
                  `,
                  opacity,
                  top: '50%',
                  backfaceVisibility: 'hidden',
                  pointerEvents: offsetFromActive <= 2 ? 'auto' : 'none',
                  transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.2s ease-out',
                  willChange: 'transform, opacity',
                  transformOrigin: 'left center',
                }}
                aria-label={`${item.label}${isActive ? ', active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className={item.type === 'title' ? 'font-medium' : 'font-normal'}
                  style={{
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                    fontWeight: isActive ? 600 : item.type === 'title' ? 500 : 400,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Center indicator line - ultra subtle */}
        <div
          className="absolute left-0 right-0 top-1/2 h-16 pointer-events-none"
          style={{
            transform: 'translateY(-50%)',
            background: 'linear-gradient(to right, transparent 0%, var(--color-border) 50%, transparent 100%)',
            opacity: 0.12,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </div>
  )
}
