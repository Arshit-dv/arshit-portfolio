'use client';

import React, { useState } from 'react';
import { Mail, Check, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import SpotlightCard from './SpotlightCard';

export function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.33-.26-1.98-.48-.8-.27-1.43-.42-1.37-.89.03-.25.38-.51 1.07-.78 4.2-1.83 7-3.04 8.4-3.63 4-.1.68 4.85.08 5.23.08z" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.416.946c0 .363.141.716.416.974l4.981 4.708a1.374 1.374 0 0 0 1.942 0 1.374 1.374 0 0 0 0-1.942l-4.007-3.74 4.007-3.74a1.374 1.374 0 0 0-.556-2.432zM16.143 5.486a1.374 1.374 0 0 0-1.942 0l-7.79 7.371a1.374 1.374 0 0 0 0 1.942l7.79 7.371a1.374 1.374 0 0 0 1.942-1.942l-6.819-6.45 6.819-6.45a1.374 1.374 0 0 0 0-1.842zM21.2 12.8h-7.6a1.374 1.374 0 0 0 0 2.748h7.6a1.374 1.374 0 1 0 0-2.748z" />
    </svg>
  );
}

export function CodeChefIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.968 1.996c-2.3 0-4.4.88-5.96 2.33C4.45 5.88 3.5 7.9 3.5 10.15c0 1.63.49 3.16 1.36 4.43.08.12.16.23.25.35l-1.9 4.38c-.14.32.08.69.43.69h16.72c.35 0 .57-.37.43-.69l-1.9-4.38c.09-.12.17-.23.25-.35.87-1.27 1.36-2.8 1.36-4.43 0-2.25-.95-4.27-2.508-5.824-1.56-1.45-3.66-2.33-5.96-2.33zm0 2.05c1.73 0 3.31.66 4.49 1.74 1.16 1.16 1.88 2.68 1.88 4.36 0 1.25-.38 2.4-1.03 3.37L16.2 11.5c-.24.12-.34.4-.23.64l1.45 3.34h-10.9l1.45-3.34c.11-.24.01-.52-.23-.64L6.64 13.52c-.65-.97-1.03-2.12-1.03-3.37 0-1.68.72-3.2 1.88-4.36 1.18-1.08 2.76-1.74 4.478-1.74z" />
    </svg>
  );
}

export function CodeforcesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#F5B041" d="M4.5 7.5a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 3 0V9a1.5 1.5 0 0 0-1.5-1.5z" />
      <path fill="#3498DB" d="M12 3a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 3 0v-12A1.5 1.5 0 0 0 12 3z" />
      <path fill="#E74C3C" d="M19.5 12a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-1.5-1.5z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Opportunity Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-zinc-950/40 border-t border-zinc-800/60">

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-left mb-8">
          <div className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Open for Data Science, Machine Learning, and Software Engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Left Side: 2 Distinct Separated Cards for Contact vs Profiles */}
          <div className="md:col-span-5 space-y-4">

            {/* CARD 1: Direct Contact Methods Only */}
            <SpotlightCard className="p-6 space-y-3">
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                Direct Contact
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 hover:border-blue-500/40 text-zinc-200 hover:text-white text-xs font-medium flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors shrink-0" />
                </a>

                {/* Telegram */}
                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 hover:border-cyan-500/40 text-zinc-200 hover:text-white text-xs font-medium flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <TelegramIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Telegram</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                </a>
              </div>
            </SpotlightCard>

            {/* CARD 2: Coding Profiles & Socials Only */}
            <SpotlightCard className="p-6 space-y-3">
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                Profiles & Platforms
              </div>

              <div className="flex flex-col gap-2.5">
                {/* 1. GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-200 hover:text-white text-xs font-medium flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-zinc-300 shrink-0" />
                    <span>GitHub (@Arshit-dv)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
                </a>

                {/* 2. LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 hover:border-blue-500/40 text-zinc-200 hover:text-white text-xs font-medium flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors shrink-0" />
                </a>

                {/* 3. CodeChef */}
                <a
                  href={PERSONAL_INFO.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 hover:border-amber-500/40 text-zinc-200 hover:text-white text-xs font-medium flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <CodeChefIcon className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>CodeChef (arshit_dv)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors shrink-0" />
                </a>

                {/* 4. LeetCode */}
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 hover:border-amber-500/40 text-zinc-200 hover:text-white text-xs font-medium flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LeetCodeIcon className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>LeetCode (Arshit_dv)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-500 transition-colors shrink-0" />
                </a>

                {/* 5. Codeforces */}
                <a
                  href={PERSONAL_INFO.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 hover:border-rose-500/40 text-zinc-200 hover:text-white text-xs font-medium flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <CodeforcesIcon className="w-4 h-4 shrink-0" />
                    <span>Codeforces (Arshit_dv)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-rose-400 transition-colors shrink-0" />
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Form Side (7 cols) */}
          <div className="md:col-span-7">
            <SpotlightCard className="p-6">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">Message Sent!</h3>
                  <p className="text-xs text-zinc-400">
                    Thank you. I'll get back to you shortly at <span className="text-blue-300">{formState.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 mb-1">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Recruiter Name"
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-800/60 border border-zinc-700/60 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-800/60 border border-zinc-700/60 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-400 mb-1">MESSAGE *</label>
                    <textarea
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details about the role or opportunity..."
                      className="w-full px-3.5 py-2 rounded-xl bg-zinc-800/60 border border-zinc-700/60 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
