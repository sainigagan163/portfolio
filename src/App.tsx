import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import ExperienceHighlights from './components/sections/ExperienceHighlights';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
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
      <footer className="bg-gray-900/50 py-6 text-center">
        <p className="text-gray-400">© 2025 All rights reserved</p>
        <p className="text-gray-400">© 2025 Gagan Saini. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
