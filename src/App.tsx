import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ImpactResults from './components/sections/ImpactResults';
import CaseStudy from './components/sections/CaseStudy';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Writing from './components/sections/Writing';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a_0%,transparent_55%)]" />
      <Navbar />
      <Hero />
      <About />
      <ImpactResults />
      <CaseStudy />
      <Experience />
      <Skills />
      <Certifications />
      <Writing />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
