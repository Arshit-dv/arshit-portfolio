'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS, SkillCategory } from '@/data/portfolioData';

type FieldFilter = 'all' | 'swe' | 'aiml' | 'ds';

const FIELD_LABELS: { id: FieldFilter; label: string; code: string }[] = [
  { id: 'all', label: 'Complete Ledger', code: 'ALL' },
  { id: 'swe', label: 'Software Engineering', code: 'SWE' },
  { id: 'aiml', label: 'AI & Machine Learning', code: 'AIML' },
  { id: 'ds', label: 'Data Science', code: 'DS' },
];

export default function ChapterSkills() {
  const [activeFilter, setActiveFilter] = useState<FieldFilter>('all');

  return (
    <section id="skills" className="relative py-20 md:py-28 paper-texture border-t-[3px] border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Chapter Header */}
        <div className="chapter-divider mb-10">
          <div className="flex items-baseline gap-3">
            <span className="chapter-number text-5xl md:text-7xl text-ink opacity-10">
              03
            </span>
            <div>
              <span className="editorial-label text-vermilion block mb-1">
                Chapter Three
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                The Technical Index
              </h2>
            </div>
          </div>
        </div>

        {/* Narrative & Discipline Filter Toolbar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-ink/20 mb-12">
          <p className="font-body text-base text-ink-muted max-w-2xl leading-relaxed">
            A classified index of programming languages, machine learning frameworks,
            database engines, and system architecture tools. Every tool listed represents
            hands-on development through production projects, algorithmic problem solving,
            or open-source libraries.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {FIELD_LABELS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-150 border-2 ${
                  activeFilter === filter.id
                    ? 'bg-ink text-paper border-ink shadow-brutal-sm'
                    : 'bg-paper-light text-ink border-ink/40 hover:border-ink'
                }`}
              >
                <span className="opacity-60 mr-1.5">[{filter.code}]</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid: Editorial Index Slips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((category: SkillCategory, catIdx: number) => {
            const filteredSkills = category.skills.filter((skill) =>
              activeFilter === 'all' ? true : skill.fields.includes(activeFilter)
            );

            if (filteredSkills.length === 0) return null;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: catIdx * 0.08 }}
                className="bg-paper-light border-[3px] border-ink p-6 md:p-8 shadow-brutal relative flex flex-col justify-between"
              >
                {/* Top Corner Registration Mark */}
                <div className="absolute top-2 right-3 font-mono text-[10px] text-ink/30 tracking-widest uppercase">
                  VOL. 03 / SEC. 0{catIdx + 1}
                </div>

                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 bg-vermilion inline-block" />
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p className="font-body text-xs text-ink-muted mb-6 italic">
                    {category.description}
                  </p>

                  {/* Skills Ledger */}
                  <div className="space-y-3">
                    {filteredSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-2 border-b border-ink/15 hover:border-ink transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-ink-muted opacity-40 group-hover:opacity-100 group-hover:text-vermilion transition-opacity">
                            ▸
                          </span>
                          <span className="font-mono text-sm font-semibold text-ink group-hover:text-vermilion transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        {/* Discipline Badges */}
                        <div className="flex items-center gap-1">
                          {skill.fields.map((f) => (
                            <span
                              key={f}
                              className="px-1.5 py-0.5 border border-ink/20 font-mono text-[9px] uppercase tracking-wider text-ink/60"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer annotation of category */}
                <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span>Entries: {filteredSkills.length}</span>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
