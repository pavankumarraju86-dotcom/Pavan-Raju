import React from 'react';
import { Sparkles, Github, Linkedin, Mail, ArrowRight, Code2, Cpu, BrainCircuit, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenPromptModal: () => void;
  linkedinUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPromptModal, linkedinUrl }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-200/80 bg-linear-to-b from-slate-50 via-white to-slate-50/50">
      {/* Subtle decorative grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-700 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span>1st Year B.Tech Computer Science & Engineering</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Hello, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-700">
                Aspiring AI Engineer & Software Enthusiast
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Currently starting my career journey in the Department of Computer Science & Engineering. 
              Actively mastering core <strong className="text-slate-900 font-semibold">Python programming</strong>, foundational <strong className="text-slate-900 font-semibold">Web Development</strong>, and experimenting with <strong className="text-slate-900 font-semibold">Generative AI workflows</strong> to build the next generation of intelligent tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-all active:scale-98"
              >
                <span>View Projects & Roadmap</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                id="hero-get-prompt-btn"
                onClick={onOpenPromptModal}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-xs hover:bg-indigo-50/70 hover:border-indigo-300 transition-all active:scale-98 cursor-pointer"
              >
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>Get AI Studio Prompt</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-2xs transition-colors"
              >
                <Github className="h-3.5 w-3.5 text-slate-900" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3 text-slate-400" />
              </a>

              <a
                href={linkedinUrl || PERSONAL_INFO.linkedinDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600 shadow-2xs transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-blue-600" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3 text-slate-400" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900 shadow-2xs transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-indigo-600" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* Right Feature Card: 1st Year Highlights */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100/70">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-100 text-indigo-700">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Undergraduate Profile
                  </span>
                </div>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                  Year 1 of 4
                </span>
              </div>

              {/* Information list */}
              <div className="space-y-4">
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">Degree & Branch</div>
                  <div className="text-sm font-bold text-slate-900">
                    B.Tech Computer Science & Engineering
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">Career Aspiration</div>
                  <div className="text-sm font-bold text-indigo-600 flex items-center gap-1.5">
                    <BrainCircuit className="h-4 w-4" />
                    <span>Artificial Intelligence Engineer</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-600">Active Skill Tracks:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white p-2.5 text-xs text-slate-700">
                      <Code2 className="h-4 w-4 text-indigo-600 shrink-0" />
                      <span className="font-medium">Basic Python</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white p-2.5 text-xs text-slate-700">
                      <Code2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">Basic Web Dev</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white p-2.5 text-xs text-slate-700">
                      <Sparkles className="h-4 w-4 text-violet-600 shrink-0" />
                      <span className="font-medium">Basic Gen AI</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white p-2.5 text-xs text-slate-700">
                      <Github className="h-4 w-4 text-slate-900 shrink-0" />
                      <span className="font-medium">Git & GitHub</span>
                    </div>
                  </div>
                </div>

                {/* AI Studio Callout */}
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3 flex items-center justify-between">
                  <div className="text-xs text-indigo-950 font-medium">
                    Need the AI Studio Prompt?
                  </div>
                  <button
                    onClick={onOpenPromptModal}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Prompt</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
