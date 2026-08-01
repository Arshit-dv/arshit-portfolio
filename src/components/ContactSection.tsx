'use client';

import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink, Linkedin } from 'lucide-react';
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0a0c] border-t border-zinc-800/60">

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let's connect
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <SpotlightCard className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-col gap-3.5">
              
              {/* Gmail / Email with Copy Icon */}
              <div
                onClick={handleCopyEmail}
                className="p-4 rounded-xl bg-[#0a0a0c] border border-zinc-800 flex items-center justify-between text-zinc-300 transition-all duration-300 hover:border-cyan-500/60 hover:text-white cursor-pointer group"
                title="Click to copy Gmail address"
              >
                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-mono font-medium text-zinc-200 group-hover:text-white transition-colors">
                    Gmail
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyEmail();
                  }}
                  className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all flex items-center gap-1.5"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs font-mono text-cyan-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-xs font-mono text-zinc-400">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0a0a0c] border border-zinc-800 flex items-center justify-between text-zinc-300 transition-all duration-300 hover:border-cyan-500/60 hover:text-white group"
                aria-label="LinkedIn"
              >
                <div className="flex items-center gap-3.5">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-mono font-medium text-zinc-200 group-hover:text-white transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </a>

            </div>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
}
