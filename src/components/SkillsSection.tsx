'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS, SkillCategory } from '@/data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function SkillsSection() {
  const [filter, setFilter] = useState<string>('all');

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-zinc-950/40 border-t border-zinc-800/60">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-left mb-8">
          <div className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">
            TECHNICAL STACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Competencies
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Programming languages, databases, web technologies, and AI frameworks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'swe', label: 'Software Eng' },
            { id: 'aiml', label: 'AI / ML' },
            { id: 'ds', label: 'Data Science' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all focus:outline-none ${
                filter === item.id
                  ? 'bg-blue-600 text-white font-semibold shadow-md'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 4-Column Skills Grid Categories with Spotlight Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((cat: SkillCategory, idx: number) => {
            const filteredCategorySkills = cat.skills.filter(
              (sk) => filter === 'all' || sk.fields.includes(filter as 'swe' | 'aiml' | 'ds')
            );

            if (filteredCategorySkills.length === 0) return null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mb-4">
                      {cat.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {filteredCategorySkills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 transition-transform hover:scale-105"
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
