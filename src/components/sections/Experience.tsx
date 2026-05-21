import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-8 text-white">Experience</h2>

        <div className="border-l-2 border-teal-500/40 pl-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Data Engineer I</h3>
              <p className="text-sm text-slate-400">CloudEQ Software India Pvt. Ltd.</p>
            </div>
            <span className="text-xs font-medium text-slate-500 shrink-0">Jul 2022 – Dec 2024</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Developed a machine learning-powered resource clustering model in Python using Scikit-learn, TensorFlow, and DBScan to identify utilisation patterns across <strong className="text-slate-300">500+ cloud assets</strong>, contributing to a <strong className="text-slate-300">25% reduction in client cloud expenditure</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Built automated ETL pipelines using Python and SQL to collect, clean, and transform high-volume infrastructure telemetry from AWS, Azure, and GCP APIs — <strong className="text-slate-300">reducing manual data preparation overhead by 40%</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Engineered a Python-based anomaly detection system applying threshold-based statistical rules to live operational metrics, <strong className="text-slate-300">reducing incident response time by 30%</strong> across 500+ monitored assets</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Applied unsupervised clustering techniques to multi-source cloud utilisation data to segment resource behaviour, producing structured analytical outputs that <strong className="text-slate-300">informed infrastructure optimisation decisions</strong> across client environments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Developed and maintained data pipelines using <strong className="text-slate-300">Microsoft Fabric Data Factory</strong>, automating structured data ingestion workflows and contributing to scalable, reproducible analytical infrastructure</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
