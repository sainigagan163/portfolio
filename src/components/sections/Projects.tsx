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
              <h3 className="text-lg font-semibold text-white">Bayesian Synthetic Fraud Dataset Generator for Music Streaming</h3>
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
            Built in collaboration with XYNQ for their ORIGIN fraud detection platform. An expert-elicited Bayesian Network with a hand-crafted DAG (10 nodes, 12 edges) generating 200,000 synthetic music upload records across a 20-column schema - grounded in published fraud cases including a federal prosecution involving $10M in misappropriated royalties.
          </p>

          <ul className="space-y-2 text-sm text-slate-400 mb-4">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Modeled four real-world fraud scenarios - bot-driven stream manipulation, artist impersonation, content duplication, and metadata stuffing - via a scalable, config-driven architecture (<code className="text-teal-300">DatasetConfig</code> dataclass)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Two-phase generation pipeline embedding real-world fraud signals: audio hash reuse (4.6×), IP rotation (40%), and temporal bursting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Validated with Spearman ρ, Cramér's V (Bergsma bias-corrected), and correlation ratio η - mean absolute deviation ≤ 0.01 across all key variables</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Confirmed statistically significant class separation (user agent 0.77, duration 0.45) suitable for downstream fraud classifier training</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Deterministic, dictionary-free phoneme-based text generation (<code className="text-teal-300">VocabularyFactory</code>) for reproducible artist names and track titles without hardcoded word lists</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {['Python', 'Bayesian Networks', 'NumPy', 'Pandas', 'Statistical Validation'].map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-slate-500 mb-1 block">Project</span>
              <h3 className="text-lg font-semibold text-white">E-sports Match Winner Predictor</h3>
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Built a match outcome prediction model for League of Legends using XGBoost trained on 50,000+ competitive matches, achieving <strong className="text-slate-300">94.6% accuracy</strong> and <strong className="text-slate-300">0.986 ROC-AUC</strong> through feature engineering on 15 minutes of in-game telemetry data per match.
          </p>

          <ul className="space-y-2 text-sm text-slate-400 mb-4">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Applied feature engineering on early-game telemetry (gold diff, kills, objectives, CS) to capture match-state signals within the first 15 minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 rounded-full bg-teal-500 shrink-0" />
              <span>Trained XGBoost classifier on 50,000+ matches — optimised via cross-validation, achieving 94.6% accuracy and 0.986 ROC-AUC on held-out test data</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {['Python', 'XGBoost', 'Feature Engineering', 'Pandas', 'Scikit-learn'].map((t) => (
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
