import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SkillGrid from '../SkillGrid';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const tabs = [
  {
    id: 'ds',
    label: 'Data Science & ML',
    skills: [
      { name: 'Machine Learning', icon: 'images/machine-learning-icon.png' },
      { name: 'Predictive Analytics', icon: 'images/rag-icon.svg' },
      { name: 'Statistical Modelling', icon: 'images/fastapi-icon.svg' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
      { name: 'LLM & AI Integration', icon: 'images/openai-icon.svg' },
    ],
  },
  {
    id: 'prog',
    label: 'Programming & DE',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
      { name: 'Data Engineering', icon: 'images/dvc-icon.svg' },
      { name: 'ETL Pipelines', icon: 'images/mlflow-icon.svg' },
      { name: 'FastAPI', icon: 'images/fastapi-icon.svg' },
    ],
  },
  {
    id: 'viz',
    label: 'Visualization & BI',
    skills: [
      { name: 'Power BI', icon: 'images/power-bi.png' },
      { name: 'Tableau', icon: 'images/Tableau-Logo.png' },
      { name: 'SAS', icon: 'images/pinecone-icon.svg' },
      { name: 'Data Visualization', icon: 'images/langchain-icon.svg' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'images/aws-icon.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'FinOps', icon: 'images/finops.png' },
      { name: 'Automation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('ds');
  const { ref, isVisible } = useScrollReveal();
  const activeSkills = tabs.find((t) => t.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-950/40 backdrop-blur-sm">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionTitle title="Skills & Technologies" subtitle="A Comprehensive Technical Stack" />

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-500/25'
                  : 'border border-emerald-400/20 text-gray-300 hover:border-emerald-400/50 hover:text-white bg-slate-900/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active skill grid with fade animation */}
        <div key={activeTab} className="animate-fadeIn">
          {activeSkills && (
            <SkillGrid title={activeSkills.label} skills={activeSkills.skills} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
