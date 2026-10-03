import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, ExternalLink, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { AI_STUDIO_PROMPTS, PERSONAL_INFO } from '../data/portfolioData';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  linkedinUrl: string;
  onUpdateLinkedin: (url: string) => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({
  isOpen,
  onClose,
  linkedinUrl,
  onUpdateLinkedin,
}) => {
  const [selectedPromptId, setSelectedPromptId] = useState(AI_STUDIO_PROMPTS[0].id);
  const [copied, setCopied] = useState(false);
  const [customLinkedin, setCustomLinkedin] = useState(linkedinUrl || '');

  if (!isOpen) return null;

  const currentTemplate = AI_STUDIO_PROMPTS.find((p) => p.id === selectedPromptId) || AI_STUDIO_PROMPTS[0];

  // Dynamically replace LinkedIn in prompt text if custom URL is provided
  const activeLinkedin = customLinkedin.trim() || linkedinUrl || PERSONAL_INFO.linkedinDefault;
  const generatedPrompt = currentTemplate.content.replace(
    'https://www.linkedin.com/in/pavan-raju-49096a439',
    activeLinkedin
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = generatedPrompt;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleLinkedinSave = (val: string) => {
    setCustomLinkedin(val);
    onUpdateLinkedin(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Google AI Studio Structured Prompt
              </h2>
              <p className="text-xs text-slate-500">
                Crafted for L. Pavan Raju (1st Year B.Tech CSE & Aspiring AI Engineer)
              </p>
            </div>
          </div>
          <button
            id="close-prompt-modal-btn"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Quick Info Banner */}
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 text-xs text-indigo-900 leading-relaxed flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Ready to Paste:</span> This prompt is structured specifically to communicate your exact background (1st Year B.Tech CSE), your career goal (AI Engineer), your foundational skills (Python, Web Dev, GenAI), and your verified GitHub link.
            </div>
          </div>

          {/* LinkedIn URL Inserter (since user left it blank in the query) */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Customize Your LinkedIn URL (Optional):
            </label>
            <div className="flex gap-2">
              <input
                id="custom-linkedin-input"
                type="url"
                placeholder="e.g. https://www.linkedin.com/in/your-profile"
                value={customLinkedin}
                onChange={(e) => handleLinkedinSave(e.target.value)}
                className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              {customLinkedin && (
                <button
                  type="button"
                  onClick={() => handleLinkedinSave('')}
                  className="rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-200/60"
                >
                  Clear
                </button>
              )}
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              Entering this will automatically update your LinkedIn URL in the prompt text and on this portfolio website.
            </p>
          </div>

          {/* Prompt Selection Tabs */}
          <div>
            <div className="text-xs font-semibold text-slate-700 mb-2">Select Prompt Style:</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {AI_STUDIO_PROMPTS.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => setSelectedPromptId(prompt.id)}
                  className={`text-left rounded-xl border p-3 text-xs transition-all cursor-pointer ${
                    selectedPromptId === prompt.id
                      ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 ring-1 ring-indigo-600'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold mb-0.5">{prompt.title}</div>
                  <div className="text-[11px] text-slate-500">{prompt.target}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Content Preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700">Prompt Text for Google AI Studio:</span>
              <span className="text-[11px] text-slate-400">Markdown formatted</span>
            </div>
            <div className="relative rounded-xl border border-slate-200 bg-slate-900 text-slate-100 p-4 font-mono text-xs leading-relaxed max-h-72 overflow-y-auto whitespace-pre-wrap select-all">
              {generatedPrompt}
            </div>
          </div>

          {/* Instructions on how to use */}
          <div className="border-t border-slate-200 pt-4 text-xs text-slate-600 space-y-1.5">
            <div className="font-semibold text-slate-800">How to use on Google AI Studio:</div>
            <ol className="list-decimal list-inside space-y-1 text-slate-500">
              <li>Click the <strong>Copy Prompt</strong> button below.</li>
              <li>Open your project or a new chat prompt on <strong>Google AI Studio</strong>.</li>
              <li>Paste the text directly into the prompt box and submit.</li>
            </ol>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 bg-slate-50">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-200/60 transition-colors"
          >
            Close
          </button>

          <button
            id="modal-copy-prompt-btn"
            onClick={handleCopy}
            className={`flex items-center gap-2 rounded-lg px-5 py-2 text-xs font-semibold text-white shadow-xs transition-all ${
              copied
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-98'
            }`}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied to Clipboard!</span>
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
    </div>
  );
};
