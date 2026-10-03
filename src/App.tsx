/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PromptBanner } from './components/PromptBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PromptModal } from './components/PromptModal';
import { PERSONAL_INFO } from './data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [linkedinUrl, setLinkedinUrl] = useState<string>(() => {
    return localStorage.getItem('pavan_portfolio_linkedin') || '';
  });

  const handleUpdateLinkedin = (url: string) => {
    setLinkedinUrl(url);
    localStorage.setItem('pavan_portfolio_linkedin', url);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenPromptModal={() => setPromptModalOpen(true)}
        linkedinUrl={linkedinUrl}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenPromptModal={() => setPromptModalOpen(true)}
          linkedinUrl={linkedinUrl}
        />

        {/* About Section */}
        <AboutSection />

        {/* Skills & Stack */}
        <SkillsSection />

        {/* 4-Year AI Engineer Roadmap */}
        <RoadmapSection />

        {/* Projects & Repositories */}
        <ProjectsSection onOpenPromptModal={() => setPromptModalOpen(true)} />

        {/* Google AI Studio Structured Prompt Interactive Showcase */}
        <PromptBanner
          onOpenPromptModal={() => setPromptModalOpen(true)}
          linkedinUrl={linkedinUrl}
        />

        {/* Contact & LinkedIn Customizer */}
        <ContactSection
          linkedinUrl={linkedinUrl}
          onUpdateLinkedin={handleUpdateLinkedin}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPromptModal={() => setPromptModalOpen(true)}
        linkedinUrl={linkedinUrl}
      />

      {/* Floating Fast-Access Button for AI Studio Prompt */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-30">
        <button
          id="floating-prompt-btn"
          onClick={() => setPromptModalOpen(true)}
          className="group flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-xs font-bold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 hover:shadow-2xl transition-all cursor-pointer active:scale-95"
        >
          <Sparkles className="h-4 w-4 animate-spin group-hover:rotate-180 transition-transform duration-500" />
          <span className="hidden sm:inline">AI Studio Prompt</span>
          <span className="sm:hidden">Prompt</span>
        </button>
      </aside>

      {/* Interactive Prompt Modal */}
      <PromptModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
        linkedinUrl={linkedinUrl}
        onUpdateLinkedin={handleUpdateLinkedin}
      />
    </div>
  );
}
