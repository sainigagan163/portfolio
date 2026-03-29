import React from 'react';
import { Github } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const projects = [
  {
    title: 'Synthetic Fraud Detection Dataset Generator',
    featured: true,
    description:
      'A Python-based, configuration-driven system that generates 100K+ row synthetic datasets for music streaming platform fraud detection. Features a VocabularyFactory class using procedural generation (no hardcoded vocabulary), a DatasetConfig dataclass for full configurability, and deterministic output with SEED=42.',
    details: [
      '20-column schema across legitimate and fraudulent behaviour',
      'Four fraud scenarios: bot-driven stream manipulation, artist impersonation, content duplication, metadata stuffing',
      'Generates 50K legitimate + 50K fraudulent rows as independent datasets',
      'Enables ML teams to train and benchmark fraud classifiers without accessing sensitive production data',
    ],
    tech: ['Python', 'NumPy', 'Pandas'],
    githubUrl: 'https://github.com/sainigagan163/synthetic-fraud-detection',
  },
  {
    title: 'E-sports Match Winner Predictor',
    featured: false,
    description:
      'Binary classification model predicting League of Legends match outcomes from first-15-minutes telemetry data. Pipeline includes 7 modular Python files covering data ingestion, feature engineering, model training, and evaluation.',
    details: [
      'Strong accuracy and ROC-AUC on held-out test set',
      'Modular pipeline architecture for reproducibility',
    ],
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/sainigagan163/esports-match-predictor',
  },
];

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-8 text-white">Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-lg border p-6 transition-colors ${
                project.featured
                  ? 'border-teal-500/30 bg-teal-500/5'
                  : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  {project.featured && (
                    <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-teal-400 mb-1 block">Featured Project</span>
                  )}
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors shrink-0"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

              {project.details && (
                <ul className="space-y-2 text-sm text-slate-400 mb-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
