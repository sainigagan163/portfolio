import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const tabs = [
  {
    id: 'lang',
    label: 'Languages',
    skills: ['Python', 'SQL', 'Bash'],
  },
  {
    id: 'ml',
    label: 'ML / Data Science',
    skills: ['Machine Learning', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'Statistical Modelling', 'Predictive Modelling', 'Regression', 'Clustering', 'Anomaly Detection', 'Bayesian Networks', 'Feature Engineering', 'EDA'],
  },
  {
    id: 'cloud',
    label: 'Cloud Platforms',
    skills: ['AWS (EC2, S3, Lambda, SageMaker, CloudWatch)', 'Azure (ML Studio, Data Factory, Monitor)', 'GCP (BigQuery, Dataflow, Operations Suite)'],
  },
  {
    id: 'de',
    label: 'Data Engineering',
    skills: ['ETL/ELT Pipelines', 'Apache Airflow', 'Data Warehousing', 'Data Modelling'],
  },
  {
    id: 'devops',
    label: 'DevOps / MLOps',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD', 'GitHub Actions'],
  },
  {
    id: 'db',
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'Jupyter', 'VS Code', 'Linux'],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('lang');
  const { ref, isVisible } = useScrollReveal();
  const activeSkills = tabs.find((t) => t.id === activeTab);

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-8 text-white">Skills & Technologies</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-teal-500 text-slate-950'
                  : 'border border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div key={activeTab} className="animate-fadeIn">
          {activeSkills && (
            <div className="flex flex-wrap gap-2">
              {activeSkills.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-slate-300 bg-slate-900/60 border border-slate-800 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
