'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  KaggleIcon,
  LeetCodeIcon,
  CodeChefIcon,
  CodeforcesIcon,
  EmailIcon,
} from '@/components/Icons';

export default function ChapterCover() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roleTitles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roleTitles.length);
      }
    } else {
      if (currentText.length < currentRole.length) {
        timer = setTimeout(() => {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        }, 85);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="cover"
      className="min-h-screen flex flex-col justify-between relative paper-texture overflow-hidden"
    >
      {/* Main cover content */}
      <div className="flex-1 flex items-center pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-12 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            {/* Left: Title block */}
            <div className="lg:col-span-8 space-y-6">
              {/* Chapter number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="chapter-number text-[120px] md:text-[180px] lg:text-[220px] leading-none text-ink opacity-[0.06] absolute top-20 md:top-16 left-2 md:left-6 select-none pointer-events-none">
                  00
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 relative z-10"
              >
                <div className="chapter-label text-vermilion">
                  The Developer&apos;s Chronicle
                </div>

                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.9]">
                  {PERSONAL_INFO.name.split(' ').map((word, i) => (
                    <span key={i} className="block">
                      {word}
                      {i === 0 && <span className="text-vermilion">.</span>}
                    </span>
                  ))}
                </h1>

                {/* Typewriter role */}
                <div className="flex items-center gap-3.5 pt-3">
                  <div className="w-10 sm:w-12 h-[3px] bg-vermilion shrink-0" />
                  <span className="font-mono text-lg sm:text-xl md:text-2xl text-ink font-semibold tracking-wide min-h-[1.75em] flex items-center">
                    {currentText}
                    <span className="animate-pulse text-vermilion font-bold ml-0.5">|</span>
                  </span>
                </div>

                {/* Literary Book Subtitle */}
                <p className="font-novel italic text-base sm:text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed pt-1">
                  A chronicle of software engineering systems, statistical algorithms, and artificial intelligence architectures.
                </p>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-4 relative z-10"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-ink font-mono text-xs font-bold uppercase tracking-widest border-[3px] border-stone shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
                >
                  Read the Projects →
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-paper text-ink font-mono text-xs font-bold uppercase tracking-widest border-[3px] border-stone shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-150"
                >
                  About the Author
                </a>
              </motion.div>
            </div>

            {/* Right: Profile links panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <div className="border-[3px] border-stone p-6 bg-paper relative">
                <div className="absolute -top-3 left-4 bg-paper px-2">
                  <span className="editorial-label text-ink-muted">
                    Find the Author
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  {[
                    { label: 'GitHub', href: PERSONAL_INFO.github, handle: '@Arshit-dv', icon: GithubIcon },
                    { label: 'LinkedIn', href: PERSONAL_INFO.linkedin, handle: 'arshit-choudhary', icon: LinkedinIcon },
                    { label: 'Kaggle', href: PERSONAL_INFO.kaggle, handle: '@arshitchoudhary', icon: KaggleIcon },
                    { label: 'CodeChef', href: PERSONAL_INFO.codechef, handle: '@arshit_dv', icon: CodeChefIcon },
                    { label: 'LeetCode', href: PERSONAL_INFO.leetcode, handle: '@Arshit_dv', icon: LeetCodeIcon },
                    { label: 'Codeforces', href: PERSONAL_INFO.codeforces, handle: '@Arshit_dv', icon: CodeforcesIcon },
                  ].map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-2 px-3 border border-stone/35 bg-paper-light hover:bg-obsidian hover:text-ink hover:border-stone transition-all duration-150 group shadow-brutal-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
                        aria-label={link.label}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 flex items-center justify-center text-ink group-hover:text-vermilion transition-colors shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </span>
                          <span className="font-sans text-xs font-bold group-hover:text-ink">
                            {link.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-ink-muted group-hover:text-ink/70 hidden sm:inline">
                            {link.handle}
                          </span>
                          <span className="font-mono text-xs text-ink-faint group-hover:text-vermilion">
                            ↗
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Bottom annotation */}
                <div className="mt-4 pt-3 border-t-[2px] border-stone">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-2 font-mono text-[11px] text-ink-muted hover:text-vermilion transition-colors"
                  >
                    <EmailIcon className="w-3.5 h-3.5 shrink-0 text-vermilion" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar — page marker */}
      <div className="w-full border-t-[3px] border-stone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest">
            {PERSONAL_INFO.university}
          </span>
          <span className="font-mono text-[10px] text-ink-muted">
            Page 01
          </span>
        </div>
      </div>
    </section>
  );
}
