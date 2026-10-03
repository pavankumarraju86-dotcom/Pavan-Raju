import React from 'react';
import { Milestone, CheckCircle2, Clock, Calendar, ArrowRight, BrainCircuit } from 'lucide-react';
import { ROADMAP } from '../data/portfolioData';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            <BrainCircuit className="h-4 w-4" />
            <span>Undergraduate Strategy</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            The AI Engineer Roadmap
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            A 4-year strategic progression mapping L. Pavan Raju&apos;s journey from first-year CSE foundations to professional AI engineering.
          </p>
        </div>

        {/* Timeline list */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {ROADMAP.map((milestone, idx) => {
            const isCurrent = milestone.status === 'In Progress';

            return (
              <div key={milestone.year} className="relative group">
                {/* Status Dot */}
                <div
                  className={`absolute -left-[31px] md:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all ${
                    isCurrent
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-md ring-4 ring-indigo-100'
                      : 'border-slate-300 bg-white text-slate-400 group-hover:border-indigo-400'
                  }`}
                >
                  {isCurrent ? (
                    <Clock className="h-3.5 w-3.5 animate-pulse" />
                  ) : (
                    <Calendar className="h-3.5 w-3.5" />
                  )}
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`rounded-2xl border p-6 transition-all ${
                    isCurrent
                      ? 'border-indigo-200 bg-indigo-50/40 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                      {milestone.year} • {milestone.stage}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        isCurrent
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {milestone.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-white border border-slate-200/80 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
