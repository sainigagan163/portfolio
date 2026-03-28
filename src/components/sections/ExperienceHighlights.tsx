import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Award, Cloud, LineChart } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const highlights = [
  {
    icon: LineChart,
    title: '18% cost efficiency gain',
    description: 'Operational savings driven by ML-based anomaly detection and automation.',
  },
  {
    icon: Cloud,
    title: 'Multi-cloud delivery',
    description: 'Automation and data platforms delivered across AWS, Azure, and GCP.',
  },
  {
    icon: Award,
    title: '5 active certifications',
    description: 'Azure AI, Azure Data Scientist, and AWS professional credentials.',
  },
];

const ExperienceHighlights = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-20 bg-slate-950/40 backdrop-blur-sm">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="Key Achievements"
          subtitle="Experience highlights and delivery outcomes in one view"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex max-w-sm flex-col items-center rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 text-center shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/60 hover:shadow-xl hover:shadow-emerald-900/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 transition-colors group-hover:bg-emerald-400/20">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
