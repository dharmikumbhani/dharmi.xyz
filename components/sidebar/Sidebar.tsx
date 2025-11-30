import { CarouselNav } from './CarouselNav'
import { Stickers } from './Stickers'
import { getProfile } from '@/lib/profile'

export function Sidebar() {
  const profile = getProfile()

  return (
    <aside className="w-full lg:w-[var(--sidebar-width)] lg:fixed lg:left-0 lg:top-0 lg:h-screen px-4 lg:px-8 py-5 lg:py-10 flex flex-col lg:justify-between">
      <div>
        {/* Profile Photo */}
        <div className="mb-2 lg:mb-3">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg lg:rounded-[10px] mb-2 lg:mb-2.5 object-cover"
          />
          <h1 className="text-lg lg:text-xl font-bold leading-tight tracking-tight">
            {profile.name}
          </h1>
        </div>

        {/* Bio - Dynamic paragraphs with HTML support */}
        <div className="text-text-muted leading-relaxed text-xs lg:text-sm space-y-2 lg:space-y-2.5 mb-6 lg:mb-10">
          {profile.bio.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        {/* Carousel Navigation - Desktop only */}
        <div className="hidden lg:block">
          <CarouselNav />
        </div>

        {/* Stickers/Patches - Desktop only */}
        <Stickers stickers={profile.stickers} />
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-[11px] text-text-muted flex-wrap lg:flex-nowrap mt-4 lg:mt-0">
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="hover:text-text transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  )
}
