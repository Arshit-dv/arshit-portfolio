'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { EmailIcon, GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function ChapterContact() {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 paper-texture border-t-[3px] border-stone bg-paper-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Chapter Header */}
        <div className="chapter-divider mb-12">
          <div className="flex items-baseline gap-3">
            <span className="chapter-number text-5xl md:text-7xl text-ink opacity-10">
              ∞
            </span>
            <div>
              <span className="chapter-label text-vermilion block mb-1">
                Postscript & Colophon
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Dispatch & Inquiries
              </h2>
            </div>
          </div>
        </div>

        {/* Full-Width Direct Correspondence Panel */}
        <div className="w-full border-[3px] border-stone bg-paper-light p-8 md:p-12 shadow-brutal mb-20">
          <div className="border-b-2 border-stone pb-6 mb-8">
            <span className="editorial-label text-vermilion block mb-2">DIRECT CORRESPONDENCE</span>
            <h3 className="font-display text-2xl md:text-4xl font-bold mb-4">
              Open for Technical Discussion, Engineering Roles & Open-Source.
            </h3>
            <p className="font-body text-lg md:text-xl text-ink-muted leading-relaxed max-w-3xl">
              Whether you are exploring scalable full-stack architectures, pre-modeling statistical
              validation pipelines, or competitive algorithms, my correspondence channels are always open.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Primary Electronic Mail Card */}
            <div className="p-6 md:p-8 border-[3px] border-stone bg-paper shadow-brutal-sm flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <EmailIcon className="w-4 h-4 text-vermilion" />
                    <span className="font-mono text-[10px] uppercase font-bold text-ink-muted">
                      Electronic Mail
                    </span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="font-mono text-xs font-bold text-vermilion hover:underline"
                  >
                    {copied ? '✓ COPIED TO CLIPBOARD' : '[COPY ADDRESS]'}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-base md:text-xl font-bold text-ink hover:text-vermilion transition-colors block break-all mb-4"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-obsidian text-ink font-mono text-xs font-bold uppercase border-2 border-stone hover:bg-vermilion hover:border-vermilion hover:text-cream transition-colors shadow-brutal-sm hover:shadow-none"
                >
                  <span>Open in Mail Client ↗</span>
                </a>
              </div>
            </div>

            {/* Social Channels Strip */}
            <div className="flex flex-col justify-between gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-6 border-[3px] border-stone bg-paper font-mono text-sm md:text-base font-bold uppercase hover:bg-obsidian hover:text-ink transition-all shadow-brutal-sm flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-ink group-hover:text-vermilion transition-colors" />
                  <span>GitHub Profile</span>
                </div>
                <span className="text-xs group-hover:text-vermilion transition-colors font-bold">↗ VISIT</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-6 border-[3px] border-stone bg-paper font-mono text-sm md:text-base font-bold uppercase hover:bg-obsidian hover:text-ink transition-all shadow-brutal-sm flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-ink group-hover:text-vermilion transition-colors" />
                  <span>LinkedIn Network</span>
                </div>
                <span className="text-xs group-hover:text-vermilion transition-colors font-bold">↗ CONNECT</span>
              </a>
            </div>

          </div>
        </div>

        {/* ─── Colophon & Footer ─── */}
        <div className="border-t-[3px] border-stone pt-12 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">

            {/* Publication details */}
            <div className="md:col-span-10 space-y-2">
              <span className="font-display text-2xl font-bold block">
                {PERSONAL_INFO.name} — The Developer’s Chronicle
              </span>
              <p className="font-novel italic text-sm text-ink-muted leading-relaxed max-w-lg">
                An editorial portfolio designed as a living record of software engineering,
                statistical validation frameworks, and applied machine learning.
              </p>
              <div className="font-mono text-[10px] text-ink/60 pt-2">
                Published from New Delhi, India • Academic Anchor: VIT Chennai
              </div>
            </div>

            {/* Back to top scroll button */}
            <div className="md:col-span-2 flex md:justify-end items-start">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 border-2 border-stone bg-paper font-mono text-xs font-bold uppercase hover:bg-obsidian hover:text-ink transition-all shadow-brutal-sm flex items-center gap-1.5"
              >
                <span>↑</span> Top of Volume
              </button>
            </div>

          </div>

          {/* Copyright notice */}
          <div className="border-t border-stone/30 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-ink-muted gap-2">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All original rights reserved.</span>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-vermilion">GitHub</a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-vermilion">LinkedIn</a>
              <a href={PERSONAL_INFO.kaggle} target="_blank" rel="noopener noreferrer" className="hover:text-vermilion">Kaggle</a>
              <a href={PERSONAL_INFO.codechef} target="_blank" rel="noopener noreferrer" className="hover:text-vermilion">CodeChef</a>
              <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-vermilion">LeetCode</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
