import React, { useState } from 'react';
import { Sparkles, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { AI_STUDIO_PROMPTS } from '../data/portfolioData';

interface PromptBannerProps {
  onOpenPromptModal: () => void;
  linkedinUrl: string;
}

export const PromptBanner: React.FC<PromptBannerProps> = ({ onOpenPromptModal, linkedinUrl }) => {
  const [copied, setCopied] = useState(false);
  const activeLinkedin = linkedinUrl || 'https://www.linkedin.com/in/pavan-raju-49096a439';
  const prompt = AI_STUDIO_PROMPTS[0].content.replace(
    'https://www.linkedin.com/in/pavan-raju-49096a439',
    activeLinkedin
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = prompt;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-md bg-indigo-950/80 border border-indigo-800/80 px-2.5 py-1 text-xs font-semibold text-indigo-300">
                <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                <span>Ready for Google AI Studio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Structured Prompt for Google AI Studio
              </h2>
              <p className="text-sm text-slate-400 max-w-2xl">
                Here is the clean, structured prompt synthesized with all of L. Pavan Raju&apos;s credentials (1st Year B.Tech CSE, Aspiring AI Engineer, Python, Web Dev, GenAI, and verified GitHub link).
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="prompt-banner-customize-btn"
                onClick={onOpenPromptModal}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
              >
                Customize & View All Styles
              </button>

              <button
                id="prompt-banner-copy-btn"
                onClick={handleCopy}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-indigo-600 hover:bg-indigo-500 active:scale-98'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Prompt Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Structured Prompt</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code block preview */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto max-h-72">
            <pre className="whitespace-pre-wrap">{prompt}</pre>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span>Includes GitHub: <code className="text-indigo-300">github.com/pavankumarraju86-dotcom</code> & LinkedIn: <code className="text-blue-300">linkedin.com/in/pavan-raju-49096a439</code></span>
            <span className="text-slate-500">Ready to paste directly into Google AI Studio Build</span>
          </div>

        </div>
      </div>
    </section>
  );
};
