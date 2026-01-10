import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Award, Cloud, LineChart } from 'lucide-react';

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
  return (
    <section id="achievements" className="py-20 bg-slate-950/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Key Achievements"
          subtitle="Experience highlights and delivery outcomes in one view"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/80 text-emerald-300">
                <Icon className="h-6 w-6" />
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
