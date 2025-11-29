# Customizing Your Portfolio

This folder contains all the data that powers your portfolio website. Simply edit these JSON files to customize the content with your own information.

## `profile.json`

Your personal information displayed in the sidebar.

```json
{
  "name": "Your Name",
  "image": "/images/profile/your-photo.png",
  "bio": [
    "First paragraph of your bio.",
    "Second paragraph with <a href='https://example.com'>links</a>.",
    "Third paragraph..."
  ],
  "links": [
    {
      "label": "Twitter",
      "url": "https://x.com/yourusername"
    }
  ]
}
```

**Fields:**
- `name`: Your full name
- `image`: Path to your profile photo (place in `/public/images/profile/`)
- `bio`: Array of paragraphs. Supports HTML for links.
- `links`: Array of social/contact links

**Tips:**
- Use `<a href="..." target="_blank" rel="noopener noreferrer" class="text-text hover:underline">Link Text</a>` for links in bio
- Email links: `mailto:your@email.com`
- Add/remove links as needed

---

## `feed.json`

Your projects, work, and updates displayed in the main feed.

```json
[
  {
    "id": "1",
    "date": "2025-01-15",
    "title": "Project Name",
    "description": "Brief description of your project.",
    "image": "/images/projects/project-name.png",
    "link": "https://example.com"
  }
]
```

**Fields:**
- `id`: Unique identifier (sequential: "1", "2", "3"...)
- `date`: ISO date format (YYYY-MM-DD). Items are sorted by date.
- `title`: (Optional) Project/item title
- `description`: (Optional) Short description
- `image`: (Optional) Path to image or video (.png, .jpg, .gif, .mp4, .mov)
- `link`: (Optional) External URL when clicked
- `gallery`: (Optional) Array of items for horizontal carousel

**Gallery Format:**
```json
{
  "id": "1",
  "date": "2025-01-15",
  "title": "Series Name",
  "description": "Collection description",
  "gallery": [
    {
      "image": "/images/path/item1.jpg",
      "title": "Item 1 Title",
      "link": "https://example.com/item1"
    }
  ]
}
```

**Tips:**
- Videos auto-play, loop, and are muted
- Square images (1:1) are constrained to 500px width
- Landscape images use full content width
- Keep IDs sequential for proper carousel navigation
- Place images in `/public/images/projects/`

---

## File Organization

```
public/images/
├── profile/          # Your profile photos
├── projects/         # Project screenshots, demos
├── art/              # Creative work, experiments
└── misc/             # Everything else
```

## After Editing

1. Save your changes
2. The site auto-refreshes in development
3. Commit your changes: `git add data/ && git commit -m "Update portfolio content"`
4. Deploy to see changes live

Need help? Check the [Next.js docs](https://nextjs.org/docs) or open an issue on GitHub.
