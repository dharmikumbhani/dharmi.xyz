import feedData from '@/data/feed.json'

export interface FeedItem {
  id: string
  date: string
  title?: string
  description?: string
  image?: string
}

export interface NavItem {
  id: string
  label: string
  type: 'title' | 'date'
}

export function getAllFeedItems(): FeedItem[] {
  return feedData as FeedItem[]
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export function getFeedNavItems(): NavItem[] {
  return feedData.map((item) => ({
    id: item.id,
    label: item.title || formatDate(item.date),
    type: item.title ? 'title' : 'date'
  }))
}
