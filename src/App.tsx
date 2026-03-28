import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import ExperienceHighlights from './components/sections/ExperienceHighlights';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a_0%,transparent_55%)]" />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ExperienceHighlights />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
