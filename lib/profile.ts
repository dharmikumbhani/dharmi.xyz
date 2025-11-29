import profileData from '@/data/profile.json'

export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  image: string
  bio: string[]
  links: SocialLink[]
}

export function getProfile(): Profile {
  return profileData as Profile
}
