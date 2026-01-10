import React from 'react';
import ParticleBackground from '../ParticleBackground';
import { ArrowDown, BadgeCheck, BarChart3, Cloud, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200 shadow-lg shadow-emerald-500/10">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for Data Science & MLOps Roles
        </div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Gagan{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-indigo-500">
            Saini
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 font-medium">
          Data Scientist • MLOps Engineer • Cloud Analytics
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Delivering scalable data analytics and machine-learning solutions to support informed business decision-making.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2">Aberdeen, UK</span>
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2">AWS · Azure Certified</span>
          <span className="rounded-full border border-emerald-400/30 bg-slate-900/60 px-4 py-2">Open to full-time roles</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-900 rounded-full font-semibold transition-colors shadow-lg shadow-emerald-500/20"
          >
            Get in Touch
          </a>
          <a
            href="#achievements"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold transition-colors"
          >
            View Key Achievements
          </a>
        </div>
        <div className="grid w-full gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: BarChart3,
              value: '18%',
              label: 'Cost efficiency gain',
            },
            {
              icon: Cpu,
              value: '4+',
              label: 'Years experience',
            },
            {
              icon: Cloud,
              value: '3',
              label: 'Cloud platforms',
            },
            {
              icon: BadgeCheck,
              value: '5',
              label: 'Certifications',
            },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-emerald-400/30 bg-slate-900/70 p-5 text-left shadow-lg shadow-emerald-500/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-emerald-300">
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
