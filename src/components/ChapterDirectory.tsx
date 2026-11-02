'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS } from '@/data/portfolioData';
import { CodeChefIcon, LeetCodeIcon, CodeforcesIcon, KaggleIcon } from '@/components/Icons';

export default function ChapterDirectory() {
  return (
    <section id="directory" className="relative py-20 md:py-28 paper-texture border-t-[3px] border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Chapter Header */}
        <div className="chapter-divider mb-12">
          <div className="flex items-baseline gap-3">
            <span className="chapter-number text-5xl md:text-7xl text-ink opacity-10">
              04
            </span>
            <div>
              <span className="editorial-label text-vermilion block mb-1">
                Chapter Four
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                The Compendium & Directory
              </h2>
            </div>
          </div>
        </div>

        <p className="font-body text-base text-ink-muted max-w-2xl mb-12 leading-relaxed">
          An exhaustive ledger documenting academic history, competitive problem-solving records,
          and a centralized index of all repositories and published works.
        </p>

        {/* Section 1: Education & Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-ink">
            <span className="font-mono text-xs font-bold text-vermilion tracking-widest uppercase">PART I</span>
            <h3 className="font-display text-2xl font-bold tracking-tight">Academic Chronicle & Background</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="border-[3px] border-ink bg-paper-light p-6 md:p-8 shadow-brutal flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="px-2 py-0.5 border border-ink font-mono text-[10px] uppercase font-bold tracking-wider bg-paper">
                        {exp.type}
                      </span>
                      <h4 className="font-display text-xl md:text-2xl font-bold mt-2 text-ink">
                        {exp.role}
                      </h4>
                      <p className="font-mono text-sm text-vermilion font-semibold mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink/70 shrink-0 font-bold border-b border-ink/40">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-body text-sm text-ink-muted mb-4 leading-relaxed">
                    {exp.summary}
                  </p>

                  {exp.achievements.length > 0 && (
                    <div className="space-y-2 mb-6">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-body text-ink/80">
                          <span className="text-vermilion font-bold shrink-0">❖</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-ink/15 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 font-mono text-[10px] border border-ink/30 text-ink/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Competitive Programming & Profiles */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-ink">
            <span className="font-mono text-xs font-bold text-vermilion tracking-widest uppercase">PART II</span>
            <h3 className="font-display text-2xl font-bold tracking-tight">Algorithmic & Problem-Solving Dossiers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* CodeChef */}
            <motion.a
              href={PERSONAL_INFO.codechef}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-[3px] border-ink bg-paper-light p-6 shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted font-bold">
                  Contest Platform
                </span>
                <span className="text-xs font-mono group-hover:text-vermilion transition-colors font-bold">
                  ↗ VISIT
                </span>
              </div>
              <div className="flex items-center gap-2.5 mb-2">
                <CodeChefIcon className="w-5 h-5 text-ink group-hover:text-vermilion transition-colors shrink-0" />
                <h4 className="font-display text-2xl font-bold group-hover:text-vermilion transition-colors">
                  CodeChef
                </h4>
              </div>
              <p className="font-body text-xs text-ink-muted mb-4 leading-relaxed">
                Global Rank 1096 out of 28,000+ international competitors in START249D. Active regular contest participation.
              </p>
              <div className="font-mono text-xs font-bold text-ink bg-paper px-2.5 py-1.5 border border-ink inline-block">
                @arshit_dv
              </div>
            </motion.a>

            {/* LeetCode */}
            <motion.a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-[3px] border-ink bg-paper-light p-6 shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted font-bold">
                  Algorithmic Rigor
                </span>
                <span className="text-xs font-mono group-hover:text-vermilion transition-colors font-bold">
                  ↗ VISIT
                </span>
              </div>
              <div className="flex items-center gap-2.5 mb-2">
                <LeetCodeIcon className="w-5 h-5 text-ink group-hover:text-vermilion transition-colors shrink-0" />
                <h4 className="font-display text-2xl font-bold group-hover:text-vermilion transition-colors">
                  LeetCode
                </h4>
              </div>
              <p className="font-body text-xs text-ink-muted mb-4 leading-relaxed">
                Consistent practice across Data Structures, Algorithms, Graph Theory, Dynamic Programming, and Tree Traversals.
              </p>
              <div className="font-mono text-xs font-bold text-ink bg-paper px-2.5 py-1.5 border border-ink inline-block">
                @Arshit_dv
              </div>
            </motion.a>

            {/* Codeforces */}
            <motion.a
              href={PERSONAL_INFO.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-[3px] border-ink bg-paper-light p-6 shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted font-bold">
                  Competitive Arena
                </span>
                <span className="text-xs font-mono group-hover:text-vermilion transition-colors font-bold">
                  ↗ VISIT
                </span>
              </div>
              <div className="flex items-center gap-2.5 mb-2">
                <CodeforcesIcon className="w-5 h-5 shrink-0" />
                <h4 className="font-display text-2xl font-bold group-hover:text-vermilion transition-colors">
                  Codeforces
                </h4>
              </div>
              <p className="font-body text-xs text-ink-muted mb-4 leading-relaxed">
                Competitive programming division rounds honing speed, mathematical formulation, and memory-constrained efficiency.
              </p>
              <div className="font-mono text-xs font-bold text-ink bg-paper px-2.5 py-1.5 border border-ink inline-block">
                @Arshit_dv
              </div>
            </motion.a>

            {/* Kaggle */}
            <motion.a
              href={PERSONAL_INFO.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-[3px] border-ink bg-paper-light p-6 shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted font-bold">
                  Data Science & ML
                </span>
                <span className="text-xs font-mono group-hover:text-vermilion transition-colors font-bold">
                  ↗ VISIT
                </span>
              </div>
              <div className="flex items-center gap-2.5 mb-2">
                <KaggleIcon className="w-5 h-5 text-ink group-hover:text-vermilion transition-colors shrink-0" />
                <h4 className="font-display text-2xl font-bold group-hover:text-vermilion transition-colors">
                  Kaggle
                </h4>
              </div>
              <p className="font-body text-xs text-ink-muted mb-4 leading-relaxed">
                Machine learning pipelines, exploratory data analysis studies, and predictive clinical modeling workflows.
              </p>
              <div className="font-mono text-xs font-bold text-ink bg-paper px-2.5 py-1.5 border border-ink inline-block">
                @arshitchoudhary
              </div>
            </motion.a>

          </div>
        </div>

        {/* Section 3: The Complete Repository Index (Table of Contents) */}
        <div>
          <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-ink">
            <span className="font-mono text-xs font-bold text-vermilion tracking-widest uppercase">PART III</span>
            <h3 className="font-display text-2xl font-bold tracking-tight">Full Project & Publication Index</h3>
          </div>

          <div className="border-[3px] border-ink bg-paper-light overflow-x-auto shadow-brutal">
            <table className="w-full text-left border-collapse font-mono text-xs">
              <thead>
                <tr className="bg-ink text-paper border-b-2 border-ink">
                  <th className="p-3 md:p-4 font-bold uppercase tracking-wider">Index</th>
                  <th className="p-3 md:p-4 font-bold uppercase tracking-wider">Project / Publication</th>
                  <th className="p-3 md:p-4 font-bold uppercase tracking-wider hidden sm:table-cell">Discipline</th>
                  <th className="p-3 md:p-4 font-bold uppercase tracking-wider hidden md:table-cell">Key Technologies</th>
                  <th className="p-3 md:p-4 font-bold uppercase tracking-wider text-right">Destination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/20">
                {PROJECTS.map((proj, idx) => (
                  <tr key={proj.id} className="hover:bg-paper-dark/40 transition-colors">
                    <td className="p-3 md:p-4 font-bold opacity-40">
                      #{String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="p-3 md:p-4">
                      <span className="font-bold text-sm text-ink block font-display">
                        {proj.title}
                      </span>
                      <span className="font-body text-[11px] text-ink-muted hidden sm:inline">
                        {proj.tagline}
                      </span>
                    </td>
                    <td className="p-3 md:p-4 hidden sm:table-cell">
                      <div className="flex gap-1 flex-wrap">
                        {proj.fields.map((f) => (
                          <span key={f} className="px-1.5 py-0.5 border border-ink/30 uppercase text-[9px] font-bold">
                            {f}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 md:p-4 hidden md:table-cell text-ink/70">
                      {proj.techStack.slice(0, 3).join(', ')}
                    </td>
                    <td className="p-3 md:p-4 text-right space-x-2 whitespace-nowrap">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-2 py-1 border border-ink bg-paper text-[10px] font-bold uppercase hover:bg-ink hover:text-paper transition-colors"
                        >
                          Source ↗
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-2 py-1 border border-ink bg-vermilion text-paper text-[10px] font-bold uppercase hover:opacity-90 transition-opacity"
                        >
                          {proj.id === 'prismr' ? 'CRAN ↗' : 'Live ↗'}
                        </a>
                      )}
                      {proj.kaggleUrl && (
                        <a
                          href={proj.kaggleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-2 py-1 border border-ink bg-paper text-[10px] font-bold uppercase hover:bg-ink hover:text-paper transition-colors"
                        >
                          Kaggle ↗
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
