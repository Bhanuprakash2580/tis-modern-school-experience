# Tulas International School Homepage

A responsive homepage concept for Tulas International School in Dehradun. It keeps the focus on the people and everyday experience behind a CBSE boarding and day school, with clear paths for prospective families to get in touch.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`). Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Stack

- React 19 with Vite
- CSS for responsive layout, motion, and reduced-motion support
- Lucide React icons

## Interactions

- Scroll-triggered section reveals use `IntersectionObserver` and run once per section.
- The reading-progress bar is updated on passive scroll events and scheduled with `requestAnimationFrame`.
- A pointer follower reacts to links and buttons on fine-pointer devices; touch devices do not show it.
- Mobile navigation opens and closes from a labelled menu button.

## Project structure

- `src/components/layout/` contains the responsive site navigation.
- `src/components/sections/` contains the hero and homepage sections.
- `src/components/animation/` contains scroll progress, reveal, and pointer effects.
- `src/App.jsx` assembles the page and footer; `src/index.css` contains the design tokens and responsive styles.

## Deployment

The project is a Vite static site. Import the repository into Vercel or Netlify and use `npm run build` as the build command and `dist` as the output directory. No live deployment has been configured for this workspace yet.

## Content and imagery

School details and contact links are based on the public Tulas International School website at [tis.edu.in](https://tis.edu.in/). The current page uses externally hosted Unsplash photography because the official campus image blocks direct embedding from this app.