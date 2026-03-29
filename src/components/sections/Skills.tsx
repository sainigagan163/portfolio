import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const skillGroups = [
  { category: 'Languages', skills: ['Python', 'SQL', 'Bash'] },
  { category: 'ML / Data Science', skills: ['Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'TensorFlow', 'NLP'] },
  { category: 'Cloud Platforms', skills: ['AWS (EC2, S3, Lambda, SageMaker, CloudWatch)', 'Azure (ML Studio, Data Factory, Monitor)', 'GCP (BigQuery, Dataflow, Operations Suite)'] },
  { category: 'Data Engineering', skills: ['ETL/ELT Pipelines', 'Apache Airflow', 'Data Warehousing', 'Data Modelling'] },
  { category: 'DevOps / MLOps', skills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'CI/CD', 'GitHub Actions'] },
  { category: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { category: 'Tools', skills: ['Git', 'Jupyter', 'VS Code', 'Linux'] },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-bold mb-8 text-white">Skills & Technologies</h2>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-400 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-slate-300 bg-slate-900/60 border border-slate-800 rounded-lg"
                  >
                    {skill}
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

export default Skills;
