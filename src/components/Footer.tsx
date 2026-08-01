'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-zinc-800/60 bg-[#0e0e17] text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-end">
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[#141321] border border-zinc-800 text-zinc-400 hover:text-white hover:border-pink-500/40 transition-all flex items-center gap-1.5 font-mono text-[11px] cursor-pointer"
          title="Back to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
}
