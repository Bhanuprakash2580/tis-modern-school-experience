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
- The light/dark theme switch is available from the navigation and remembers the selected theme in local storage.
- Learning-path tabs let families explore academics, boarding life, and day-school life without leaving the page.
- The admissions form validates the enquiry details and prepares an email draft with the selected class and school option; it does not store or send data itself.
- The admissions FAQ uses native disclosure controls, so it works with keyboard and assistive technology.

## Project structure

```text
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── animation/        # Scroll progress, reveal, and pointer effects
│   ├── layout/           # Navigation and footer
│   ├── sections/         # Hero, learning, campus, admissions, and FAQ
│   └── ui/               # Shared CTA link
├── data/                 # Navigation, learning cards, tabs, and FAQ copy
├── hooks/                # Persistent light/dark theme state
└── styles/               # Global tokens, responsive styles, and motion rules
```

`App.jsx` composes the page. Each homepage section has its own component, while `data/homepage.js` keeps repeatable school copy out of presentation logic. The shared theme hook and CTA primitive live in `hooks/` and `components/ui/`; global tokens, responsive styles, and reduced-motion rules are in `styles/global.css`.

## Component Architecture Overview

- `src/components/ui/` contains the shared CTA link primitive.
- `src/components/sections/` contains the hero, learning, campus, admissions, and FAQ sections.
- `src/components/animation/` contains the custom cursor, scroll progress, and reveal effects.
- `src/components/layout/` contains the responsive navigation and footer.
- `src/hooks/` and `src/data/` hold persistent theme behavior and reusable school content.

## Brand Identity Retained

- The Tulas name and key school details: CBSE, Classes 4–12, boarding and day school, and Dehradun.
- The forest-green and coral visual direction, with school contact details linked to the official site.
- The page currently uses externally hosted Unsplash photography; official school photography has not been integrated.

## Deployment

The project is a Vite static site. Import the repository into Vercel or Netlify and use `npm run build` as the build command and `dist` as the output directory. No live deployment has been configured for this workspace yet.