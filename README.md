# Portfolio

A polished, single-page portfolio for showcasing Gagan Saini's background in data science, MLOps, and cloud analytics. Built with React, TypeScript, Vite, and Tailwind CSS, it delivers a fast, responsive experience with structured sections for biography, skills, certifications, projects, and contact details.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Customizing Content](#customizing-content)
- [Deployment](#deployment)
- [Assets](#assets)

## Features
- **Hero with animated background** – `ParticleBackground` and the `TypewriterEffect` component introduce the portfolio with animated copy and a bouncing scroll indicator.
- **Sticky navigation with resume CTA** – The responsive `Navbar` collapses into a drawer on mobile devices, gains a translucent background on scroll, and highlights a resume download button.
- **About section** – Bio, education, and experience highlights paired with a profile photo.
- **Skill matrices** – `SkillGrid` renders categorized badges for ML, programming, BI, and cloud tooling.
- **Certification gallery** – `Certifications` provides verifiable badge links with accessible markup.
- **Project showcase** – A grid of `ProjectCard` entries for AI/ML, DevOps, and web projects.
- **Contact panel** – `SocialLink` entries for email, phone, GitHub, and LinkedIn, alongside a resume download link.

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
- **Hero copy** – Update text in `src/components/sections/Hero.tsx`.
- **Resume download** – Replace `public/Gagan Saini Resume.pdf` and adjust the resume link target in `src/components/Navbar.tsx` or `src/components/sections/Contact.tsx` if the filename changes.
- **About section** – Edit biography text, education, and experience cards in `src/components/sections/About.tsx`.
- **Skills** – Update the categorized `dataScienceSkills`, `programmingSkills`, etc. arrays in `src/components/sections/Skills.tsx` (ensure referenced icons exist in `public/images`).
- **Certifications** – Add or remove entries in the `CERTIFICATIONS` array in `src/components/sections/Certifications.tsx` (each item expects a badge image and verification URL).
- **Projects** – Update the `projects` array in `src/components/sections/Projects.tsx` to change cards, images, and tech stacks.
- **Contact links** – Adjust `SocialLink` targets in `src/components/sections/Contact.tsx`.

## Deployment
The repository is preconfigured for GitHub Pages through the `homepage`, `predeploy`, and `deploy` scripts in `package.json`.

```bash
npm run deploy
```
This command builds the site and publishes the `dist/` folder to the `gh-pages` branch using the `gh-pages` CLI.

## Assets
- Place profile photos, skill icons, and project images under `public/images/...` to ensure they are copied into the production build.
- Certification badges live in `public/certifications/` and can be swapped with custom PNGs.

Feel free to fork the project and tailor the content, styles, or components to match your personal brand.
