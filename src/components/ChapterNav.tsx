'use client';

import React, { useState, useEffect } from 'react';

const CHAPTERS = [
  { id: 'cover', label: '00', title: 'Cover' },
  { id: 'about', label: '01', title: 'Author' },
  { id: 'projects', label: '02', title: 'Projects' },
  { id: 'skills', label: '03', title: 'Skills' },
  { id: 'directory', label: '04', title: 'Directory' },
  { id: 'contact', label: '∞', title: 'Contact' },
];

export default function ChapterNav() {
  const [activeSection, setActiveSection] = useState('cover');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 250);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Check if at the bottom of the page
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Check if near top
      if (scrollY < 200) {
        setActiveSection('cover');
        return;
      }

      // Find currently active section based on reference line (35% from viewport top)
      const referenceLine = window.innerHeight * 0.35;
      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= referenceLine && rect.bottom > referenceLine) {
            setActiveSection(ch.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 40;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Reading Ribbon / Progress Ruler */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-vermilion/70 z-[60] transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      <nav
        className={`fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
        aria-label="Chapter navigation"
      >
        <div className="flex flex-col items-center gap-2">
          {CHAPTERS.map((ch) => {
            const isActive = activeSection === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className="group relative flex items-center justify-center focus:outline-none"
                aria-label={`Go to Chapter ${ch.label}: ${ch.title}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {/* Subtle Light Hover-Only Tooltip */}
                <div className="absolute right-10 transition-all duration-200 pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hidden md:flex items-center">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-normal tracking-wide bg-paper-darker/95 backdrop-blur-md border border-stone/40 text-ink/85 shadow-sm whitespace-nowrap">
                    {ch.label} · {ch.title}
                  </span>
                </div>

                {/* Round Smooth Individual Subsection Circle */}
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-paper-darker border border-vermilion/70 text-vermilion font-medium shadow-sm scale-105'
                      : 'bg-paper-darker/85 backdrop-blur-sm border border-stone/30 text-ink/45 font-normal hover:border-stone/60 hover:text-ink/85 hover:bg-paper-darker'
                  }`}
                >
                  {ch.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
