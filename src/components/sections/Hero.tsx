import React from 'react';
import ParticleBackground from '../ParticleBackground';
import TypewriterEffect from '../TypewriterEffect';
import { ArrowDown, BarChart3, Cloud, Cpu, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 shadow-lg shadow-cyan-500/10">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Available for Data Science & MLOps Roles
        </div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Gagan{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
            Saini
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 font-medium">
          Data Scientist • MLOps Engineer • Cloud Analytics
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          I build production-grade ML systems, resilient data pipelines, and decision-ready analytics for organizations scaling AI responsibly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
          <span className="rounded-full border border-purple-400/40 bg-slate-900/60 px-4 py-2">Aberdeen, UK</span>
          <span className="rounded-full border border-purple-400/40 bg-slate-900/60 px-4 py-2">AWS · Azure Certified</span>
          <span className="rounded-full border border-purple-400/40 bg-slate-900/60 px-4 py-2">Open to full-time roles</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-full font-semibold transition-colors shadow-lg shadow-cyan-500/20"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold transition-colors"
          >
            View Case Studies
          </a>
        </div>
        <div className="grid w-full gap-4 pt-6 md:grid-cols-4">
          {[
            {
              icon: LineChart,
              value: '18%',
              label: 'Ops cost reduction',
            },
            {
              icon: Cpu,
              value: '4+',
              label: 'Years experience',
            },
            {
              icon: BarChart3,
              value: '20+',
              label: 'Dashboards delivered',
            },
            {
              icon: Cloud,
              value: '3',
              label: 'Cloud platforms',
            },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-5 text-left shadow-lg shadow-cyan-500/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
              <p className="text-sm text-gray-300">{label}</p>
            </div>
          ))}
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
