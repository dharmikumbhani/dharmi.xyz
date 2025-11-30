import profileData from '@/data/profile.json'

export interface SocialLink {
  label: string
  url: string
}

export interface Sticker {
  image: string
  alt: string
  url?: string
  tooltip?: string
}

export interface Profile {
  name: string
  image: string
  bio: string[]
  links: SocialLink[]
  stickers: Sticker[]
}

export function getProfile(): Profile {
  return profileData as Profile
}
