'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-zinc-800 bg-zinc-950 text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js & Tailwind CSS.
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 font-mono text-[11px]"
          title="Back to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3 text-blue-400" />
        </button>
      </div>
    </footer>
  );
}
