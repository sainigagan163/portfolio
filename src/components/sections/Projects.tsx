import React from 'react';
import { Github } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-8 text-white">Projects</h2>

        <div className="rounded-lg border border-teal-500/30 bg-teal-500/5 p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-teal-400 mb-1 block">Featured Project</span>
              <h3 className="text-lg font-semibold text-white">Synthetic Fraud Detection Dataset Generator</h3>
            </div>
            <a
              href="https://github.com/sainigagan163/synthetic-fraud-detection"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors shrink-0"
              aria-label="View Synthetic Fraud Detection Dataset Generator on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            A Python-based, configuration-driven system that generates 100K+ row synthetic datasets for music streaming platform fraud detection. Features a VocabularyFactory class using procedural generation (no hardcoded vocabulary), a DatasetConfig dataclass for full configurability, and deterministic output with SEED=42.
          </p>

          <ul className="space-y-2 text-sm text-slate-400 mb-4">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>20-column schema across legitimate and fraudulent behaviour</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Four fraud scenarios: bot-driven stream manipulation, artist impersonation, content duplication, metadata stuffing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Generates 50K legitimate + 50K fraudulent rows as independent datasets</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Enables ML teams to train and benchmark fraud classifiers without accessing sensitive production data</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {['Python', 'NumPy', 'Pandas'].map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
