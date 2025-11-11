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
      <h3 className="text-xl font-semibold mb-4 text-purple-300">{title}</h3>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-purple-900/30 transition-colors border border-purple-500/20"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-2"
            />
            <span className="text-sm text-center text-purple-100">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;