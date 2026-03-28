import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const experiences = [
  {
    role: 'DevOps Engineer I',
    company: 'CloudEQ Software India Pvt. Ltd.',
    period: '07/2022 – 12/2024',
    highlights: [
      'Built ML-driven FinOps solutions using Python, Scikit-learn, and TensorFlow to optimize cloud resource usage across AWS, Azure, and GCP.',
      'Developed scalable ETL pipelines to process high-volume multi-cloud usage and performance data, enabling data-driven cost and efficiency insights.',
      'Applied unsupervised learning (DBSCAN, clustering) to identify infrastructure inefficiencies, under-utilized resources, and performance anomalies.',
      'Automated cloud infrastructure and CI/CD workflows using Terraform, GitHub Actions, Jenkins, and Azure DevOps, improving deployment reliability.',
      'Created Python automation tools for VM monitoring, disk health analysis, snapshot lifecycle management, and cluster optimization.',
      'Delivered stakeholder-ready dashboards and analytical reports, translating complex technical data into actionable business recommendations.',
    ],
  },
];

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle
          title="Experience"
          subtitle="Professional roles focused on cloud automation, MLOps, and analytics delivery"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 via-emerald-400/50 to-transparent" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20 pb-8">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 border-4 border-slate-950 shadow-lg shadow-emerald-400/30" />

              {/* Timeline connector glow */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400/20 animate-ping" />

              <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur-sm hover:border-emerald-400/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <div className="flex items-center gap-3 text-emerald-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10">
                      <Briefcase className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{exp.role}</p>
                      <p className="text-sm text-gray-400">{exp.company}</p>
                    </div>
                  </div>
                  <span className="sm:ml-auto text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/70 bg-emerald-400/10 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-gray-300">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
