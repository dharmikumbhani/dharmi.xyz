# Portfolio Template

A minimal, content-driven portfolio website built with Next.js 15. Features a unique 3D carousel navigation, JSON-based content management, and mobile-optimized layouts.

**Live Demo:** [dharmi.xyz](https://dharmi.xyz)

---

## Features

- **3D Carousel Navigation** - Smooth cylindrical scroll navigation on desktop
- **JSON-Driven Content** - Edit `data/profile.json` and `data/feed.json` to customize everything
- **Gallery Support** - Display project series in horizontal scrolling carousels
- **Mobile Optimized** - Responsive layouts with touch-friendly interactions
- **Video Support** - Auto-playing videos with iOS Safari compatibility
- **Easy to Fork** - No code changes needed, just update JSON files and images

---

## Quick Start

### 1. Fork & Clone

```bash
# Fork this repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/your-portfolio.git
cd your-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

---

## Customization

All content is managed through JSON files in the `/data` folder. No code changes required!

### Profile Information

Edit `data/profile.json`:

```json
{
  "name": "Your Name",
  "image": "/images/profile/your-photo.png",
  "bio": [
    "First paragraph of your bio.",
    "Second paragraph with links."
  ],
  "links": [
    { "label": "Twitter", "url": "https://x.com/yourusername" },
    { "label": "GitHub", "url": "https://github.com/yourusername" }
  ]
}
```

### Projects & Feed

Edit `data/feed.json`:

```json
[
  {
    "id": "1",
    "date": "2025-01-15",
    "title": "Project Name",
    "description": "Brief description.",
    "image": "/images/projects/project.png",
    "link": "https://example.com"
  }
]
```

### Images

Place your images in `/public/images/`:
- `/public/images/profile/` - Profile photos
- `/public/images/projects/` - Project screenshots, videos
- `/public/images/misc/` - Other assets

**Supported formats:** PNG, JPG, GIF, MP4, MOV

📖 **Full customization guide:** [data/README.md](data/README.md)

---

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dharmikumbhani/dharmi.xyz)

1. Click the button above
2. Import your forked repository
3. Vercel will auto-detect Next.js and deploy
4. Done! Your site is live

### Other Platforms

This is a standard Next.js 15 app and works with:
- **Netlify:** `npm run build` → Deploy `/.next` folder
- **Cloudflare Pages:** Connect repo → Auto-deploy
- **GitHub Pages:** Use `next-static-export` or similar

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via globals.css)
- **Deployment:** Vercel
- **Content:** JSON files (no CMS needed)

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── feed/
│   │   ├── Feed.tsx        # Main feed component
│   │   └── Gallery.tsx     # Horizontal carousel for galleries
│   └── sidebar/
│       ├── Sidebar.tsx     # Sidebar with profile & nav
│       └── CarouselNav.tsx # 3D carousel navigation
├── data/
│   ├── profile.json        # Your personal info
│   ├── feed.json           # Projects & updates
│   └── README.md           # Customization guide
├── lib/
│   ├── feed.ts             # Feed data utilities
│   └── profile.ts          # Profile data utilities
└── public/
    └── images/             # All your images go here
```

---

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Customization Tips

1. **Colors:** Edit CSS variables in `app/globals.css`
2. **Fonts:** Update font imports in `app/layout.tsx`
3. **Metadata:** Change title/description in `app/layout.tsx`
4. **Gallery:** Add `gallery` array to feed items for carousels
5. **Videos:** Use `.mp4` or `.mov` extensions, they auto-play

---

## Features in Development

Experimental features are available on separate branches:

- `feature/stickers` - Add stickers/patches below carousel (like backpack patches)

Checkout a branch to try it:
```bash
git checkout feature/stickers
npm run dev
```

---

## License

MIT License - Feel free to use this template for your own portfolio!

---

## Credits

Originally built by [Dharmi Kumbhani](https://dharmi.xyz)

If you use this template, I'd love to see what you build! Tag me on [Twitter](https://x.com/dharmikumbhani) or open a PR to add your site to a showcase.

---

## Need Help?

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 📖 [Customization Guide](data/README.md)
- 🐛 [Open an Issue](https://github.com/dharmikumbhani/dharmi.xyz/issues)

Enjoy building! ✨
