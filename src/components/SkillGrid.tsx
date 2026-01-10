import React from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillGridProps {
  title: string;
  skills: Skill[];
}

const SkillGrid = ({ title, skills }: SkillGridProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-emerald-200">{title}</h3>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-slate-900/60 backdrop-blur-sm rounded-lg hover:bg-emerald-500/10 transition-colors border border-emerald-400/20"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-2"
            />
            <span className="text-sm text-center text-slate-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
