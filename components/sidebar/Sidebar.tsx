import { CarouselNav } from './CarouselNav'

function SpotifyIcon() {
  return (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[var(--sidebar-width)] lg:fixed lg:left-0 lg:top-0 lg:h-screen px-4 lg:px-8 py-5 lg:py-10 flex flex-col lg:justify-between">
      <div>
        {/* Profile Photo */}
        <div className="mb-2 lg:mb-3">
          <img
            src="/images/dharmi-studio-ghibli.png"
            alt="Dharmi Kumbhani"
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg lg:rounded-[10px] mb-2 lg:mb-2.5 object-cover"
          />
          <h1 className="text-lg lg:text-xl font-bold leading-tight tracking-tight">
            Dharmi Kumbhani
          </h1>
        </div>

        {/* Bio - 2 paragraphs with hyperlinks */}
        <div className="text-text-muted leading-relaxed text-xs lg:text-sm space-y-2 lg:space-y-2.5 mb-6 lg:mb-10">
          <p>
            Big music and sci-fi fan. I spend my time building things at the intersection of{' '}
            <a href="https://github.com/dharmikumbhani" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">
              design and technology
            </a>.
          </p>
          <p>
            Currently working on{' '}
            <a href="https://beampay.io" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">
              BeamPay
            </a>{' '}
            to solve for global stablecoin payments, and building onchain reputation scoring with{' '}
            <a href="https://openrank.com" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">
              Openrank
            </a>.
          </p>
        </div>

        {/* Carousel Navigation - Desktop only */}
        <div className="hidden lg:block">
          <CarouselNav />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-[11px] text-text-muted flex-wrap lg:flex-nowrap mt-4 lg:mt-0">
        <a href="https://open.spotify.com/user/dharmik" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors flex items-center gap-1">
          <SpotifyIcon />
          Spotify
        </a>
        <a href="https://x.com/dharmikumbhani" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
          Twitter
        </a>
        <a href="https://github.com/dharmikumbhani" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
          GitHub
        </a>
        <a href="https://www.are.na/dharmi-kumbhani/channels" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">
          Are.na
        </a>
        <a href="mailto:dharmikumbhani201@gmail.com" className="hover:text-text transition-colors">
          Email
        </a>
      </div>
    </aside>
  )
}
