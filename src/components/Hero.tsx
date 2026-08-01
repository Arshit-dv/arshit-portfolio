'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { LeetCodeIcon, CodeforcesIcon, CodeChefIcon } from './ContactSection';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

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
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const PLATFORM_LINKS = [
    {
      id: 'github',
      href: PERSONAL_INFO.github,
      icon: Github,
      label: 'GitHub',
      iconColor: 'text-zinc-300 group-hover:text-white'
    },
    {
      id: 'linkedin',
      href: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
      iconColor: 'text-zinc-300 group-hover:text-cyan-400'
    },
    {
      id: 'codechef',
      href: PERSONAL_INFO.codechef,
      icon: CodeChefIcon,
      label: 'CodeChef',
      iconColor: 'text-amber-300 group-hover:text-amber-200'
    },
    {
      id: 'leetcode',
      href: PERSONAL_INFO.leetcode,
      icon: LeetCodeIcon,
      label: 'LeetCode',
      iconColor: 'text-amber-400 group-hover:text-amber-300'
    },
    {
      id: 'codeforces',
      href: PERSONAL_INFO.codeforces,
      icon: CodeforcesIcon,
      label: 'Codeforces',
      iconColor: 'text-zinc-300 group-hover:text-white'
    }
  ];

  return (
    <section id="hero" className="relative min-h-[65vh] pt-36 pb-16 flex flex-col justify-center overflow-hidden bg-subtle-grid">

      {/* Background Ambient Blur - Cyan & Warm Amber */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Intro Label */}
          <div className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 tracking-tight">
            My name is
          </div>

          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
            {PERSONAL_INFO.name}.
          </h1>

          {/* Dynamic Role Subtitle with Typewriter Typing Animation */}
          <div className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium pt-1 flex items-center gap-2.5 min-h-[44px]">
            <span className="text-zinc-400">I am a </span>
            <span className="font-bold text-cyan-400 border-b-2 border-cyan-500/80 pb-0.5">
              {currentText}
              <span className="animate-pulse text-cyan-400 font-normal">|</span>
            </span>
          </div>

          <p className="max-w-3xl text-base sm:text-lg text-zinc-400 leading-relaxed pt-3">
            {PERSONAL_INFO.aboutMe}
          </p>

          {/* Hyperlinked Platform Icons Under About Me */}
          <div className="pt-6 flex items-center gap-3.5 flex-wrap">
            {PLATFORM_LINKS.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredIcon === item.id;

              return (
                <div key={item.id} className="relative">
                  {/* Floating Tooltip Above */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.9 }}
                      animate={{ opacity: 1, y: -38, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      className="absolute left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-zinc-900 text-[11px] font-mono font-medium text-zinc-200 border border-zinc-700 whitespace-nowrap shadow-xl pointer-events-none z-50"
                    >
                      {item.label}
                    </motion.div>
                  )}

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon(item.id)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    className="w-12 h-12 rounded-xl bg-[#121215] border border-zinc-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-zinc-600 group shadow-md"
                    aria-label={item.label}
                  >
                    <Icon className={`w-5 h-5 transition-colors ${item.iconColor}`} />
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

    </section>
  );
}
