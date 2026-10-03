import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, ExternalLink, Link as LinkIcon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  linkedinUrl: string;
  onUpdateLinkedin: (url: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  linkedinUrl,
  onUpdateLinkedin,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [linkedinInput, setLinkedinInput] = useState(linkedinUrl);
  const [savedLinkedinMsg, setSavedLinkedinMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleSaveLinkedin = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateLinkedin(linkedinInput);
    setSavedLinkedinMsg(true);
    setTimeout(() => setSavedLinkedinMsg(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">
            <Mail className="h-4 w-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Connect with L. Pavan Raju
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Interested in collaborating on student projects, discussing Python / GenAI, or connecting professionally? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Cards: Connect Info & LinkedIn Manager */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Official Links & Contact
              </h3>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-white border border-slate-200/80 p-3.5 hover:border-slate-300 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
                      <Github className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">GitHub Profile</div>
                      <div className="text-[11px] text-slate-500 font-mono truncate max-w-[200px]">
                        pavankumarraju86-dotcom
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-700" />
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinUrl || PERSONAL_INFO.linkedinDefault}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-white border border-slate-200/80 p-3.5 hover:border-blue-200 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">LinkedIn Profile</div>
                      <div className="text-[11px] text-blue-600 font-mono truncate max-w-[200px]">
                        {linkedinUrl || PERSONAL_INFO.linkedinDefault}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between rounded-xl bg-white border border-slate-200/80 p-3.5 hover:border-indigo-200 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Direct Email</div>
                      <div className="text-[11px] text-slate-600 font-mono truncate max-w-[200px]">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-indigo-600" />
                </a>
              </div>
            </div>

            {/* LinkedIn Customizer */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                <LinkIcon className="h-4 w-4 text-blue-600" />
                <span>Update Your LinkedIn Link</span>
              </div>
              <p className="text-xs text-blue-800/80 mb-3">
                Your LinkedIn profile link is set to <code>https://www.linkedin.com/in/pavan-raju-49096a439</code>. You can customize or update it anytime below.
              </p>
              
              <form onSubmit={handleSaveLinkedin} className="space-y-2">
                <input
                  id="linkedin-setting-input"
                  type="url"
                  placeholder="https://www.linkedin.com/in/your-handle"
                  value={linkedinInput}
                  onChange={(e) => setLinkedinInput(e.target.value)}
                  className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Save LinkedIn Link
                  </button>
                  {savedLinkedinMsg && (
                    <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Saved & updated!
                    </span>
                  )}
                </div>
              </form>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Have an inquiry or want to connect? Fill out the form below.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="text-sm font-bold text-emerald-900">
                    Message Prepared!
                  </div>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Thank you for reaching out to L. Pavan Raju. You can also reach him directly at {PERSONAL_INFO.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Email
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      placeholder="Project Collaboration / Student Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={4}
                      placeholder="Write your note here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs font-semibold text-white shadow-xs hover:bg-indigo-700 transition-colors cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
