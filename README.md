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
- **Hero with animated background** – `ParticleBackground` and the `TypewriterEffect` component introduce the portfolio with animated copy and a bouncing scroll indicator.
- **Sticky navigation with resume CTA** – The responsive `Navbar` collapses into a drawer on mobile devices, gains a translucent background on scroll, and includes a highlighted resume download button.
- **Story-driven About section** – Highlights bio, education, and experience with a floating profile photo.
- **Skill matrices** – `SkillGrid` renders categorized skill badges for ML, programming, BI, and cloud tooling.
- **Certification gallery** – `Certifications` presents deep links to verifiable badges with accessible markup.
- **Project cards** – A grid of `ProjectCard` entries showcases recent AI/ML, DevOps, and web projects.
- **Contact panel** – `SocialLink` buttons surface preferred contact channels (email, phone, GitHub, LinkedIn), alongside a resume download link.

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
