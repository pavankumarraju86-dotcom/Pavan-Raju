import React from 'react';
import { BookOpen, Target, Sparkles, Brain, Award, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Background & Motivation</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            About L. Pavan Raju
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Starting my journey in Computer Science with a sharp focus on artificial intelligence, algorithmic logic, and modern application building.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Story */}
          <div className="md:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base">
            <p>
              I am currently a <strong>1st-year student pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering</strong>. From my initial steps into the department, my goal has been defined by a deep curiosity for how computational systems learn, reason, and adapt.
            </p>
            <p>
              My ultimate ambition is to become a full-fledged <strong>AI Engineer</strong>. To bridge the gap between theoretical curiosity and production engineering, I am purposefully grounding myself in three foundational pillars:
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  1
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Basic Python Programming:</strong> Mastering syntax, data structures, loops, functions, and algorithmic thinking to manipulate data effectively.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  2
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Basic Web Development:</strong> Learning HTML5, CSS3, and JavaScript to design clean interfaces capable of delivering AI solutions to end users.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  3
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">Basic Generative AI:</strong> Exploring prompt design, LLM APIs, and AI-driven automation using Google AI Studio and modern generative tools.
                </div>
              </li>
            </ul>
          </div>

          {/* Right Highlights Panel */}
          <div className="md:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Target className="h-4 w-4 text-indigo-600" />
                <span>Core Objectives for Year 1</span>
              </h3>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <BookOpen className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Strong CS Fundamentals</div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Understanding computational logic, memory, basic algorithms, and discrete structures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Brain className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Consistent Problem Solving</div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Writing daily Python code, building modular utilities, and solving logic puzzles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Sparkles className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Practical AI Prototyping</div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Experimenting with LLMs, prompt workflows, and deploying small web interfaces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Department:</span> Computer Science & Engineering (CSE)
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  <span className="font-semibold text-slate-700">Primary Goal:</span> AI Engineer & Systems Developer
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
