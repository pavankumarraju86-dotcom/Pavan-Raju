import React from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

interface ProjectsSectionProps {
  onOpenPromptModal: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenPromptModal }) => {
  return (
    <section id="projects" className="py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
              <FolderGit2 className="h-4 w-4" />
              <span>Academic & Independent Work</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Starter Projects & Code Repositories
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Hands-on projects developed across Year 1 exploring Python utilities, web front-ends, and Generative AI workflows.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs transition-colors shrink-0 self-start md:self-auto"
          >
            <Github className="h-4 w-4" />
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-md bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors"
                    title="View repository on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  {project.id === 'student-portfolio-hub' && (
                    <button
                      onClick={onOpenPromptModal}
                      className="text-xs font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="h-3 w-3 text-indigo-500" />
                      <span>AI Studio Prompt</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
