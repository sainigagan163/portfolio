import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const impactFacts = [
    '5× AWS / Azure certified',
    '2.5 years commercial experience',
    '25% cloud cost reduction delivered',
    '40% manual reporting time saved',
    '30% incident resolution time reduced',
  ];

  return (
    <section id="about" className="py-24">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeading num="01" title="About" />

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="space-y-4 text-slate-400 leading-relaxed flex-1 text-base">
            <p>
              Data Scientist with <span className="text-slate-200 font-medium">2.5 years</span> of professional
              experience building ML algorithms and statistical models that lower costs, streamline
              complexities, and surface business intelligence from large data — resulting in{' '}
              <span className="text-teal-400 font-medium">25%</span> savings on client cloud spend,{' '}
              <span className="text-teal-400 font-medium">40%</span> reduction in manual reporting, and{' '}
              <span className="text-teal-400 font-medium">30%</span> faster incident resolution.
            </p>
            <p>
              Graduated with an MSc in Data Science from the{' '}
              <span className="text-slate-200">University of Aberdeen</span> (2026),{' '}
              <span className="text-teal-400 font-medium">with Commendation</span>, backed by five
              certifications including Microsoft Certified: Azure Data Scientist Associate &amp; Azure AI
              Engineer Associate.
            </p>
          </div>

          {/* Profile photo with glow ring */}
          <div className="relative shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-[-12px] rounded-3xl bg-gradient-to-br from-teal-500/25 via-violet-500/15 to-transparent blur-2xl" />
            <img
              src={`${import.meta.env.BASE_URL}images/Profile.jpg`}
              alt="Gagan Saini"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border border-slate-700/60 shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {/* Education card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-teal-500/30 transition-all duration-300">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 mb-5">
              Education
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                <div>
                  <p className="font-semibold text-white text-sm">MSc Data Science</p>
                  <p className="text-xs text-slate-500 mt-0.5">University of Aberdeen, UK · 2025–2026</p>
                  <p className="text-xs text-teal-400/70 mt-0.5 italic">with Commendation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                <div>
                  <p className="font-semibold text-white text-sm">B.Tech Civil Engineering</p>
                  <p className="text-xs text-slate-500 mt-0.5">AKGEC, AKTU, India · 2017–2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-teal-500/30 transition-all duration-300">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 mb-5">
              Impact
            </h3>
            <ul className="space-y-2.5">
              {impactFacts.map((fact) => (
                <li key={fact} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="h-px w-4 shrink-0 bg-teal-500/50" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
