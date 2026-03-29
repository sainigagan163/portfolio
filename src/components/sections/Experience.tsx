import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-8 text-white">Experience</h2>

        <div className="border-l-2 border-teal-500/40 pl-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Data Engineer / DevOps Engineer</h3>
              <p className="text-sm text-slate-400">CloudEQ Software India Pvt. Ltd.</p>
            </div>
            <span className="text-xs font-medium text-slate-500 shrink-0">Jul 2022 – Dec 2024</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Engineered ML-powered cloud cost optimisation pipelines, <strong className="text-slate-300">reducing infrastructure spend by 35%</strong> across multi-cloud environments (AWS, Azure, GCP)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Designed and deployed automated ETL workflows processing <strong className="text-slate-300">50K+ daily records with 99.7% data integrity</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Built CI/CD pipelines using Jenkins, Docker, and Terraform, <strong className="text-slate-300">cutting deployment time by 40%</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Developed real-time monitoring dashboards integrating CloudWatch, Azure Monitor, and GCP Operations Suite, <strong className="text-slate-300">improving incident response time by 30%</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Implemented infrastructure-as-code practices across <strong className="text-slate-300">15+ client environments</strong>, reducing provisioning errors by 45%</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
