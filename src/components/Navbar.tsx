import React, { useState } from 'react';
import { Sparkles, Github, Linkedin, Menu, X, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenPromptModal: () => void;
  linkedinUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPromptModal, linkedinUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'AI Roadmap', href: '#roadmap' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold shadow-xs transition-transform group-hover:scale-105">
            PR
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-slate-900 leading-tight tracking-tight group-hover:text-indigo-600 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-medium text-slate-500">
              1st Year B.Tech CSE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Socials */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-open-prompt-btn"
            onClick={onOpenPromptModal}
            className="flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors border border-indigo-200/60 shadow-xs cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>AI Studio Prompt</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={linkedinUrl || PERSONAL_INFO.linkedinDefault}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenPromptModal}
            className="flex items-center gap-1 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200"
          >
            <Sparkles className="h-3 w-3" />
            Prompt
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-indigo-600 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={linkedinUrl || PERSONAL_INFO.linkedinDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPromptModal();
              }}
              className="text-xs font-semibold text-indigo-600 hover:underline"
            >
              View AI Prompt &rarr;
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
