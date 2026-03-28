import React from 'react';
import ParticleBackground from '../ParticleBackground';
import TypewriterEffect from '../TypewriterEffect';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to full-time roles
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-indigo-500">
            Gagan Saini
          </span>
        </h1>

        <TypewriterEffect />

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Transforming complex data into actionable insights through machine learning,
          predictive analytics, and cloud-native data science solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 backdrop-blur-sm">United Kingdom</span>
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 backdrop-blur-sm">AWS · Azure Certified</span>
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 backdrop-blur-sm">MSc Data Science</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="px-8 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-900 rounded-full font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#skills"
            className="px-8 py-3 border border-emerald-400/40 hover:border-emerald-400 text-emerald-300 rounded-full font-semibold transition-all hover:bg-emerald-400/10"
          >
            View Skills
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 pt-4">
          <a
            href="https://github.com/sainigagan163"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/gagansaini29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:sainigagan163@gmail.com"
            className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
