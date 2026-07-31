import React from 'react';
import ParticleBackground from '../ParticleBackground';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const resumeHref = `${import.meta.env.BASE_URL}Gagan%20Saini%20Resume.pdf`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Ambient glow behind the name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-teal-500/8 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto px-4">
        <p className="text-xs font-mono font-bold text-teal-400 tracking-[0.25em] uppercase">Delhi - NCR, India</p>

        <h1 className="gradient-text text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Gagan Saini
        </h1>

        <p className="text-xl md:text-2xl font-medium text-slate-300">
          Data Scientist & ML Engineer
        </p>

        <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
          I build ML systems that reduce cost, automate complexity, and surface
          actionable insights from large-scale operational data.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-lg font-semibold transition-all duration-200 text-sm hover:shadow-lg hover:shadow-teal-500/30"
          >
            View Projects
          </a>
          <a
            href={resumeHref}
            download="Gagan Saini Resume.pdf"
            type="application/pdf"
            className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-teal-500/50 text-slate-300 hover:text-white rounded-lg font-semibold transition-all duration-200 text-sm hover:bg-teal-500/5"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-semibold transition-all duration-200 text-sm"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-8 pt-4">
          <a href="https://github.com/sainigagan163" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm group">
            <Github className="w-5 h-5 group-hover:text-teal-400 transition-colors" /><span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/gagansaini29" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm group">
            <Linkedin className="w-5 h-5 group-hover:text-teal-400 transition-colors" /><span>LinkedIn</span>
          </a>
          <a href="mailto:sainigagan163@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm group">
            <Mail className="w-5 h-5 group-hover:text-teal-400 transition-colors" /><span>Email</span>
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-teal-400 transition-colors" aria-label="Scroll to about section">
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
