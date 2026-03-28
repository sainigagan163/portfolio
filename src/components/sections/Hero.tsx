import React from 'react';
import ParticleBackground from '../ParticleBackground';
import TypewriterEffect from '../TypewriterEffect';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to full-time roles in the UK
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-indigo-500">
            Gagan Saini
          </span>
        </h1>

        <TypewriterEffect />

        {/* THE HOOK — this is what makes recruiters stop scrolling */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I build ML models that cut cloud costs by 18% and ship predictive analytics
          pipelines across AWS, Azure, and GCP. Currently pursuing my MSc in Data Science
          at the University of Aberdeen.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 backdrop-blur-sm">United Kingdom</span>
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2 backdrop-blur-sm">5x AWS / Azure Certified</span>
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
            href="#case-study"
            className="px-8 py-3 border border-emerald-400/40 hover:border-emerald-400 text-emerald-300 rounded-full font-semibold transition-all hover:bg-emerald-400/10"
          >
            See My Work
          </a>
        </div>

        {/* Social Links — crawlable text labels for SEO */}
        <div className="flex items-center gap-6 pt-4">
          <a
            href="https://github.com/sainigagan163"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors hover:scale-105 transform"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/gagansaini29"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors hover:scale-105 transform"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="mailto:sainigagan163@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors hover:scale-105 transform"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Email</span>
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
