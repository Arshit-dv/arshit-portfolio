'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roleTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[65vh] pt-32 pb-14 flex flex-col justify-center overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {/* Intro Label */}
          <div className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 tracking-tight">
            My name is
          </div>

          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              {PERSONAL_INFO.name}.
            </span>
          </h1>

          {/* Dynamic Role Subtitle */}
          <div className="text-xl sm:text-2xl text-zinc-300 font-medium pt-1 flex flex-wrap items-center gap-2">
            <span className="text-zinc-400">I am a</span>
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-white font-bold underline decoration-blue-500 underline-offset-4"
            >
              {PERSONAL_INFO.roleTitles[currentRoleIndex]}
            </motion.span>
          </div>

          <p className="max-w-4xl text-base sm:text-lg text-zinc-400 leading-relaxed pt-2">
            {PERSONAL_INFO.aboutMe}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <FileText className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-5 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-xs font-mono"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
