# Images Directory Structure

## Folders

### `/profile`
Your personal photos (avatars, headshots, etc.)
- Example: `dharmi-studio-ghibli.png`

### `/projects`
Project demos, screenshots, and GIFs
- Create subfolders for each project if you have multiple assets
- Example: `projects/exam-scheduler/demo.gif`
- Or keep flat: `projects/exam-scheduler.gif`

### `/art`
Creative work, experiments, visual pieces
- Example: `art/3d-animation.gif`

### `/misc`
Everything else that doesn't fit the above categories
- Example: `misc/random-inspiration.jpg`

## Usage in feed.json

```json
{
  "id": "1",
  "date": "2025-11-27",
  "title": "Project Name",
  "description": "Brief description of the project",
  "image": "/images/projects/project-name.gif",
  "link": "https://github.com/username/repo"
}
```
