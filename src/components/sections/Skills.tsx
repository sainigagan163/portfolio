import React, { useState } from 'react';
import { Code2, BrainCircuit, Cloud, Database, GitBranch, Wrench, Layers } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

const skillGroups = [
  {
    id: 'ml',
    label: 'ML & Data Science',
    icon: BrainCircuit,
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
    border: 'rgba(167,139,250,0.3)',
    skills: ['Machine Learning', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Statistical Modelling', 'Predictive Modelling', 'Regression', 'Clustering', 'Anomaly Detection', 'Bayesian Networks', 'Feature Engineering', 'EDA', 'Pandas', 'NumPy', 'Matplotlib'],
    span: 'lg:col-span-2',
  },
  {
    id: 'lang',
    label: 'Languages',
    icon: Code2,
    accent: '#2dd4bf',
    glow: 'rgba(45,212,191,0.15)',
    border: 'rgba(45,212,191,0.3)',
    skills: ['Python', 'SQL', 'Bash'],
    span: '',
  },
  {
    id: 'cloud',
    label: 'Cloud Platforms',
    icon: Cloud,
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.15)',
    border: 'rgba(56,189,248,0.3)',
    skills: ['AWS — EC2, S3, Lambda, SageMaker, CloudWatch', 'Azure — ML Studio, Data Factory, Monitor', 'GCP — BigQuery, Dataflow, Operations Suite'],
    span: 'lg:col-span-2',
  },
  {
    id: 'de',
    label: 'Data Engineering',
    icon: Layers,
    accent: '#fb923c',
    glow: 'rgba(251,146,60,0.15)',
    border: 'rgba(251,146,60,0.3)',
    skills: ['ETL/ELT Pipelines', 'Apache Airflow', 'Data Warehousing', 'Data Modelling', 'Microsoft Fabric'],
    span: '',
  },
  {
    id: 'devops',
    label: 'DevOps & MLOps',
    icon: GitBranch,
    accent: '#f472b6',
    glow: 'rgba(244,114,182,0.15)',
    border: 'rgba(244,114,182,0.3)',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD', 'GitHub Actions'],
    span: '',
  },
  {
    id: 'db',
    label: 'Databases',
    icon: Database,
    accent: '#fbbf24',
    glow: 'rgba(251,191,36,0.15)',
    border: 'rgba(251,191,36,0.3)',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    span: '',
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    accent: '#94a3b8',
    glow: 'rgba(148,163,184,0.12)',
    border: 'rgba(148,163,184,0.25)',
    skills: ['Git', 'Jupyter', 'VS Code', 'Linux'],
    span: '',
  },
];

const SkillCard = ({ group, index }: { group: typeof skillGroups[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = group.icon;

  return (
    <div
      className={`skill-card relative rounded-2xl p-5 overflow-hidden cursor-default transition-transform duration-300 ${hovered ? 'scale-[1.02]' : 'scale-100'} ${group.span}`}
      style={{
        background: hovered
          ? `radial-gradient(ellipse at top left, ${group.glow} 0%, #0f172a 70%)`
          : 'rgba(15,23,42,0.7)',
        border: `1px solid ${hovered ? group.border : 'rgba(51,65,85,0.5)'}`,
        boxShadow: hovered ? `0 0 32px ${group.glow}, 0 0 0 1px ${group.border}` : 'none',
        backdropFilter: 'blur(12px)',
        animationDelay: `${index * 80}ms`,
        transition: 'background 0.4s ease, border 0.3s ease, box-shadow 0.4s ease, transform 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Watermark icon */}
      <div
        className="absolute -bottom-4 -right-4 transition-all duration-500"
        style={{ opacity: hovered ? 0.12 : 0.05, transform: hovered ? 'scale(1.1) rotate(-8deg)' : 'scale(1) rotate(0deg)' }}
      >
        <Icon style={{ width: 96, height: 96, color: group.accent }} />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <div
            className="p-2 rounded-xl transition-all duration-300"
            style={{
              background: hovered ? `${group.glow}` : 'rgba(30,41,59,0.8)',
              boxShadow: hovered ? `0 0 12px ${group.glow}` : 'none',
            }}
          >
            <Icon style={{ width: 16, height: 16, color: group.accent }} />
          </div>
          <h3 className="text-sm font-semibold text-white">{group.label}</h3>
        </div>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{
            color: group.accent,
            background: `${group.glow}`,
            border: `1px solid ${group.border}`,
          }}
        >
          {group.skills.length}
        </span>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {group.skills.map((skill, i) => (
          <span
            key={skill}
            className="skill-tag px-2.5 py-1 text-xs rounded-lg transition-all duration-200"
            style={{
              animationDelay: `${i * 30}ms`,
              color: hovered ? '#f1f5f9' : '#94a3b8',
              background: hovered ? 'rgba(30,41,59,0.9)' : 'rgba(15,23,42,0.6)',
              border: `1px solid ${hovered ? 'rgba(71,85,105,0.8)' : 'rgba(51,65,85,0.4)'}`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Animated top-border glow line */}
      <div
        className="skill-glow absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)` }}
      />
    </div>
  );
};

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 sm:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeading num="05" title="Skills &amp; Technologies" />
        <p className="text-slate-500 text-sm mb-10 -mt-6">Hover a card to explore</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
