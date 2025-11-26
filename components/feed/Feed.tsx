import { getAllFeedItems, formatDate, type FeedItem } from '@/lib/feed'

function FeedItem({ item }: { item: FeedItem }) {
  const hasText = item.title || item.description

  return (
    <article id={`item-${item.id}`} className="mb-16 scroll-mt-12">
      <time className="block text-[13px] text-text-muted mb-4">
        {formatDate(item.date)}
      </time>

      {item.image && (
        <div className={`w-full aspect-[3/4] bg-border flex items-center justify-center text-text-muted overflow-hidden ${hasText ? 'mb-4' : ''}`}>
          <span className="text-sm">Image</span>
        </div>
      )}

      {item.title && (
        <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
      )}

      {item.description && (
        <p className="text-base text-text-muted leading-relaxed">{item.description}</p>
      )}
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
