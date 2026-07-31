import React from 'react';

interface Props {
  num: string;
  title: string;
}

const SectionHeading: React.FC<Props> = ({ num, title }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="font-mono text-xs font-bold text-teal-400 tracking-widest shrink-0">{num}.</span>
    <h2 className="text-2xl font-bold text-white whitespace-nowrap">{title}</h2>
    <div className="flex-1 h-px bg-gradient-to-r from-slate-700/80 to-transparent" />
  </div>
);

export default SectionHeading;
