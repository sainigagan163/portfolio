# Portfolio

An interactive single-page portfolio for showcasing Gagan Saini's background as a data scientist and DevOps engineer. The site is built with React, TypeScript, Vite, and Tailwind CSS, and it ships with prebuilt sections for biography, skills, certifications, projects, and contact information.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Customizing Content](#customizing-content)
- [Deployment](#deployment)
- [Assets](#assets)

## Features
- **Hero with animated background** – `ParticleBackground` and the `TypewriterEffect` component introduce the portfolio with animated copy, strong CTA buttons, and a bouncing scroll indicator.
- **Sticky navigation** – The responsive `Navbar` collapses into a drawer on mobile devices and gains a translucent background when the user scrolls.
- **Story-driven About section** – Highlights bio, education, and experience with a floating profile photo.
- **Skill matrices** – `SkillGrid` renders categorized skill badges for ML, programming, BI, and cloud tooling.
- **Certification gallery** – `Certifications` presents deep links to verifiable badges with accessible markup.
- **Project cards** – A grid of `ProjectCard` entries showcases recent AI/ML, DevOps, and web projects.
- **Contact panel** – `SocialLink` buttons surface preferred contact channels (email, phone, GitHub, LinkedIn).

## Tech Stack
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) build tooling
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) iconography

## Quick Start

### Prerequisites
- Node.js 18+ (or any version supported by Vite 4)
- npm 9+

### Installation
```bash
npm install
```

### Local development
```bash
npm run dev
```
This starts Vite's dev server and enables hot module replacement.

### Production build
```bash
npm run build
```
TypeScript emits type declarations and Vite outputs the static site in `dist/`.

### Preview the production build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```
Runs ESLint with the TypeScript + React rules configured in the project.

## Project Structure
```
portfolio/
├─ public/
│  ├─ certifications/       # SVG badges displayed in Certifications
│  └─ images/               # Project thumbnails, skill icons, profile photo
├─ src/
│  ├─ App.tsx               # Page composition and global gradient background
│  ├─ main.tsx              # React entry point
│  ├─ index.css             # Tailwind layers + global styles
│  └─ components/
│     ├─ Navbar.tsx         # Sticky nav with scroll detection
│     ├─ ParticleBackground.tsx
│     ├─ TypewriterEffect.tsx
│     ├─ ProjectCard.tsx & SkillGrid.tsx
│     ├─ sections/          # Hero, About, Skills, Certifications, Projects, Contact
│     └─ ui/                # SectionTitle, SocialLink, and other UI primitives
├─ package.json             # Scripts (dev/build/deploy) and dependencies
└─ tailwind.config.js       # Tailwind theme configuration
```

## Customizing Content
- **Hero CTA & tagline** – Edit copy inside `src/components/sections/Hero.tsx`.
- **About section** – Update biography text, education, and experience cards in `src/components/sections/About.tsx`.
- **Skills** – Modify the categorized `dataScienceSkills`, `programmingSkills`, etc. arrays inside `src/components/sections/Skills.tsx` (ensure referenced icons exist in `public/images`).
- **Certifications** – Add/remove entries in the `CERTIFICATIONS` array inside `src/components/sections/Certifications.tsx` (each item expects a badge image and verification URL).
- **Projects** – Update the `projects` array within `src/components/sections/Projects.tsx` to change cards, images, and tech stacks.
- **Contact links** – Adjust the `SocialLink` targets in `src/components/sections/Contact.tsx`.

## Deployment
The repository is preconfigured for GitHub Pages through the `homepage`, `predeploy`, and `deploy` scripts in `package.json`.

```bash
npm run deploy
```
This command builds the site and publishes the `dist/` folder to the `gh-pages` branch using the `gh-pages` CLI.

## Assets
- Place profile photos, skill icons, and project images under `public/images/...` to ensure they are copied into the production build.
- Certification badges live in `public/certifications/` and can be swapped with custom SVGs.

Feel free to fork the project and tailor the content, styles, or components to match your personal brand.
