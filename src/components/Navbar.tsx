'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  FolderGit2, 
  Code2, 
  Briefcase, 
  Mail, 
  Github
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

const DOCK_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'experience', label: 'Academics', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0.2, 0.5]
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    DOCK_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-6 right-0 left-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-zinc-900/90 border border-zinc-800/80 shadow-2xl backdrop-blur-xl transition-all">
        {DOCK_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;
          const Icon = item.icon;

          return (
            <div key={item.id} className="relative">
              {/* Floating Tooltip */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: -40, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.9 }}
                  className="absolute left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-zinc-800 text-[11px] font-medium text-zinc-200 border border-zinc-700 whitespace-nowrap shadow-lg pointer-events-none"
                >
                  {item.label}
                </motion.div>
              )}

              <button
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80'
                }`}
                aria-label={item.label}
              >
                <Icon className="w-4 h-4" />
              </button>
            </div>
          );
        })}

        <div className="h-5 w-[1px] bg-zinc-800 mx-1" />

        {/* GitHub link icon */}
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredItem('github')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all"
          aria-label="GitHub Profile"
        >
          {hoveredItem === 'github' && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: -40, scale: 1 }}
              className="absolute left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-zinc-800 text-[11px] font-medium text-zinc-200 border border-zinc-700 whitespace-nowrap shadow-lg pointer-events-none"
            >
              GitHub
            </motion.div>
          )}
          <Github className="w-4 h-4" />
        </a>

      </nav>
    </div>
  );
}
