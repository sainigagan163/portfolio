import React from 'react';
import { Code2, BrainCircuit, Cloud, Database, GitBranch, Wrench, Layers } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const skillGroups = [
  {
    id: 'lang',
    label: 'Languages',
    icon: Code2,
    color: 'from-teal-500/20 to-teal-500/5',
    border: 'border-teal-500/30',
    iconColor: 'text-teal-400',
    skills: ['Python', 'SQL', 'Bash'],
    wide: false,
  },
  {
    id: 'ml',
    label: 'ML & Data Science',
    icon: BrainCircuit,
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/30',
    iconColor: 'text-violet-400',
    skills: ['Machine Learning', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Statistical Modelling', 'Predictive Modelling', 'Regression', 'Clustering', 'Anomaly Detection', 'Bayesian Networks', 'Feature Engineering', 'EDA', 'Pandas', 'NumPy', 'Matplotlib'],
    wide: true,
  },
  {
    id: 'cloud',
    label: 'Cloud Platforms',
    icon: Cloud,
    color: 'from-sky-500/20 to-sky-500/5',
    border: 'border-sky-500/30',
    iconColor: 'text-sky-400',
    skills: ['AWS — EC2, S3, Lambda, SageMaker, CloudWatch', 'Azure — ML Studio, Data Factory, Monitor', 'GCP — BigQuery, Dataflow, Operations Suite'],
    wide: false,
  },
  {
    id: 'de',
    label: 'Data Engineering',
    icon: Layers,
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/30',
    iconColor: 'text-orange-400',
    skills: ['ETL/ELT Pipelines', 'Apache Airflow', 'Data Warehousing', 'Data Modelling', 'Microsoft Fabric'],
    wide: false,
  },
  {
    id: 'devops',
    label: 'DevOps & MLOps',
    icon: GitBranch,
    color: 'from-pink-500/20 to-pink-500/5',
    border: 'border-pink-500/30',
    iconColor: 'text-pink-400',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD', 'GitHub Actions'],
    wide: false,
  },
  {
    id: 'db',
    label: 'Databases',
    icon: Database,
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    wide: false,
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    color: 'from-slate-400/20 to-slate-400/5',
    border: 'border-slate-600',
    iconColor: 'text-slate-400',
    skills: ['Git', 'Jupyter', 'VS Code', 'Linux'],
    wide: false,
  },
];

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
        <h2 className="text-2xl font-bold mb-2 text-white">Skills & Technologies</h2>
        <p className="text-slate-500 text-sm mb-10">Tools and technologies I work with professionally</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className={`relative rounded-xl border ${group.border} bg-gradient-to-br ${group.color} p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/20 ${group.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-1.5 rounded-lg bg-slate-900/60`}>
                    <Icon className={`w-4 h-4 ${group.iconColor}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs text-slate-300 bg-slate-900/60 border border-slate-700/60 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
