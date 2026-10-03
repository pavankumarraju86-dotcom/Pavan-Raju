import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPromptModal: () => void;
  linkedinUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPromptModal, linkedinUrl }) => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 text-slate-600 text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="font-bold text-slate-900 text-sm">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-slate-500">
              1st Year B.Tech Computer Science & Engineering • Aspiring AI Engineer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Skills
            </a>
            <a
              href="#roadmap"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#projects"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Projects
            </a>
            <button
              onClick={onOpenPromptModal}
              className="text-indigo-600 hover:underline font-semibold cursor-pointer"
            >
              AI Studio Prompt
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={linkedinUrl || PERSONAL_INFO.linkedinDefault}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-200/60 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-200/60 transition-colors"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 border-t border-slate-200/80 pt-6 text-center text-slate-400 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            &copy; {new Date().getFullYear()} L. Pavan Raju. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            Crafted for B.Tech CSE AI Engineering Journey
          </div>
        </div>
      </div>
    </footer>
  );
};
