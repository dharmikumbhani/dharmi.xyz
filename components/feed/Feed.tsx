'use client'

import { useState, useRef, useEffect } from 'react'
import { getAllFeedItems, formatDate, type FeedItem } from '@/lib/feed'
import { Gallery } from './Gallery'

function FeedItem({ item }: { item: FeedItem }) {
  const [isSquare, setIsSquare] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasText = item.title || item.description

  // Force autoplay on iOS Safari
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignore autoplay errors (e.g., if user hasn't interacted with page yet)
      })
    }
  }, [])

  const handleMediaLoad = (e: React.SyntheticEvent<HTMLImageElement | HTMLVideoElement>) => {
    const target = e.currentTarget
    const aspectRatio = 'naturalWidth' in target ?
      target.naturalWidth / target.naturalHeight :
      target.videoWidth / target.videoHeight

    // Consider square if aspect ratio is between 0.85 and 1.15 (roughly 1:1)
    setIsSquare(aspectRatio > 0.85 && aspectRatio < 1.15)
  }

  const content = (
    <>
      <time className="block text-[13px] text-text-muted mb-4">
        {formatDate(item.date)}
      </time>

      {/* Gallery view for multiple items */}
      {item.gallery && item.gallery.length > 0 && (
        <div className={hasText ? 'mb-4' : ''}>
          <Gallery items={item.gallery} showTitles={false} />
        </div>
      )}

      {/* Single image/video view */}
      {!item.gallery && item.image && (
        <div className={`w-full ${isSquare ? 'max-w-[500px] mx-auto' : ''} bg-border overflow-hidden rounded-3xl lg:rounded-[32px] ${hasText ? 'mb-4' : ''}`}>
          {item.image.endsWith('.mov') || item.image.endsWith('.mp4') ? (
            <video
              ref={videoRef}
              src={item.image}
              autoPlay
              loop
              muted
              playsInline
              onLoadedMetadata={handleMediaLoad}
              className={`w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.015] ${item.link ? 'pointer-events-none' : ''}`}
            />
          ) : (
            <img
              src={item.image}
              alt={item.title || 'Feed item'}
              onLoad={handleMediaLoad}
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          )}
        </div>
      )}

      {item.title && (
        <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
      )}

      {item.description && (
        <p className="text-base text-text-muted leading-relaxed">{item.description}</p>
      )}
    </>
  )

  if (item.link) {
    return (
      <article id={`item-${item.id}`} className="mb-16 scroll-mt-12">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          {content}
        </a>
      </article>
    )
  }

  return (
    <article id={`item-${item.id}`} className="mb-16 scroll-mt-12">
      {content}
    </article>
  )
}

export function Feed() {
  const items = getAllFeedItems()

  return (
    <div className="w-full">
      {items.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))}
    </div>
  )
}
