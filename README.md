# Tulas International School Homepage

A responsive React landing page for Tulas International School, built with Vite and designed for a modern, editorial-style presentation.

Repository: https://github.com/Kowshikkolisetty/TIS

## Features

- Responsive homepage layout
- Light and dark theme toggle
- Smooth scroll reveal animations
- Reading progress indicator
- Mobile-friendly navigation
- Static site deployment ready

## Tech Stack

- React
- Vite
- CSS
- Lucide React

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 18 or later
- npm 9 or later

## Run Locally

1. Clone the repository:

```bash
git clone https://github.com/Kowshikkolisetty/TIS.git
cd TIS
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

### Production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       └── Reveal.jsx
└── README.md
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Click "Add New Project".
4. Import the repository.
5. Use the default settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy".

## Deploy to Netlify

1. Push the project to GitHub.
2. Log in to Netlify.
3. Click "Add new site" > "Import an existing project".
4. Connect your GitHub repository.
5. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy the site.

## Deploy to GitHub Pages

GitHub Pages works well for static Vite apps, but you may need to configure the base path for the project.

1. Install the deployment package:

```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.js` to include:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
})
```

3. Add deploy scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Run:

```bash
npm run deploy
```

5. In GitHub, open the repository, then go to Settings > Pages and select the deployed branch or upload source as needed.

## Notes

This project uses local asset references and fonts from public sources. If you plan to publish it publicly, you may want to replace external image URLs with your own hosted assets.

## License

This project is for educational/demo purposes and can be adapted for your own site or portfolio.
