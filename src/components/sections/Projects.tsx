import React from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeading num="03" title="Projects" />

        <div className="space-y-6">
          {/* ── Featured Project — animated gradient border ── */}
          <div className="animated-gradient-border p-px rounded-2xl">
            <div className="rounded-2xl bg-slate-950 p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-[0.65rem] font-mono font-bold uppercase tracking-widest text-teal-400 mb-1.5 block">
                    Featured Project
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Bayesian Synthetic Fraud Dataset Generator for Music Streaming
                  </h3>
                </div>
                <a
                  href="https://github.com/sainigagan163/synthetic-fraud-detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-teal-400 transition-colors shrink-0 mt-1"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Built in collaboration with <span className="text-slate-200">XYNQ</span> for their ORIGIN
                fraud detection platform. An expert-elicited Bayesian Network with a hand-crafted DAG (10
                nodes, 12 edges) generating <strong className="text-slate-200">200,000</strong> synthetic
                music upload records across a 20-column schema — grounded in published fraud cases including
                a federal prosecution involving $10M in misappropriated royalties.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-400 mb-5">
                {[
                  'Modeled four real-world fraud scenarios — bot-driven stream manipulation, artist impersonation, content duplication, and metadata stuffing — via a scalable, config-driven architecture (DatasetConfig dataclass)',
                  'Two-phase generation pipeline embedding real-world fraud signals: audio hash reuse (4.6×), IP rotation (40%), and temporal bursting',
                  'Validated with Spearman ρ, Cramér\'s V (Bergsma bias-corrected), and correlation ratio η — mean absolute deviation ≤ 0.01 across all key variables',
                  'Confirmed statistically significant class separation (user agent 0.77, duration 0.45) for downstream fraud classifier training',
                  'Deterministic, dictionary-free phoneme-based text generation (VocabularyFactory) for reproducible artist names and track titles',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {['Python', 'Bayesian Networks', 'NumPy', 'Pandas', 'Statistical Validation'].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── E-sports project card ── */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 group">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="text-[0.65rem] font-mono font-bold uppercase tracking-widest text-slate-500 mb-1.5 block">
                  Project
                </span>
                <h3 className="text-lg font-bold text-white">E-sports Match Winner Predictor</h3>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-1" />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Built a match outcome prediction model for League of Legends using XGBoost trained on{' '}
              <strong className="text-slate-200">50,000+</strong> competitive matches, achieving{' '}
              <strong className="text-teal-400">94.6% accuracy</strong> and{' '}
              <strong className="text-teal-400">0.986 ROC-AUC</strong> through feature engineering on 15
              minutes of in-game telemetry data per match.
            </p>

            <ul className="space-y-2.5 text-sm text-slate-400 mb-5">
              {[
                'Applied feature engineering on early-game telemetry (gold diff, kills, objectives, CS) to capture predictive match-state signals within the first 15 minutes',
                'Trained XGBoost classifier on 50,000+ matches, optimised via cross-validation — achieving 94.6% accuracy and 0.986 ROC-AUC on held-out test data',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {['Python', 'XGBoost', 'Feature Engineering', 'Pandas', 'Scikit-learn'].map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
