import React, { useState } from 'react';
import { Terminal, Globe, Sparkles, GitBranch, Bot, BrainCircuit, CheckCircle2, Code } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Web Development', 'Artificial Intelligence', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="h-5 w-5 text-indigo-600" />;
      case 'Globe':
        return <Globe className="h-5 w-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-violet-600" />;
      case 'GitBranch':
        return <GitBranch className="h-5 w-5 text-amber-600" />;
      case 'Bot':
        return <Bot className="h-5 w-5 text-blue-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="h-5 w-5 text-rose-600" />;
      default:
        return <Code className="h-5 w-5 text-slate-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            <Code className="h-4 w-4" />
            <span>Core Competencies & Stack</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Technologies & Technical Skills
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Hands-on technologies mastered during the first year of B.Tech CSE, forming the cornerstone for advanced AI engineering.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/80 border border-slate-200/60">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-700">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {skill.name}
                </h3>
                
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  {skill.category}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Active in Year 1
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  B.Tech CSE
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
