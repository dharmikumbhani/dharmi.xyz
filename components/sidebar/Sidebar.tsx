import { CarouselNav } from './CarouselNav'

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[var(--sidebar-width)] lg:fixed lg:left-0 lg:top-0 lg:h-screen px-4 lg:px-8 py-5 lg:py-10 flex flex-col lg:justify-between">
      <div>
        {/* Profile Photo */}
        <div className="mb-2 lg:mb-3">
          <img
            src="/images/profile/dharmi-studio-ghibli.png"
            alt="Dharmi Kumbhani"
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg lg:rounded-[10px] mb-2 lg:mb-2.5 object-cover"
          />
          <h1 className="text-lg lg:text-xl font-bold leading-tight tracking-tight">
            Dharmi Kumbhani
          </h1>
        </div>

        {/* Bio - 3 paragraphs with hyperlinks */}
        <div className="text-text-muted leading-relaxed text-xs lg:text-sm space-y-2 lg:space-y-2.5 mb-6 lg:mb-10">
          <p>
            For the past few years, I've been building things where design and technology meet.
          </p>
          <p>
            Right now, I'm working on{' '}
            <a href="https://beampay.io" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">
              BeamPay
            </a>{' '}
            for global stablecoin payments and building on-chain reputation infrastructure with{' '}
            <a href="https://openrank.com" target="_blank" rel="noopener noreferrer" className="text-text hover:underline">
              Openrank
            </a>.
          </p>
          <p>
            I'm deeply optimistic about the future, especially the ways technology will reshape how humans connect, communicate, and evolve beyond the limits of language.
          </p>
        </div>

        {/* Carousel Navigation - Desktop only */}
        <div className="hidden lg:block">
          <CarouselNav />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-[11px] text-text-muted flex-wrap lg:flex-nowrap mt-4 lg:mt-0">
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
