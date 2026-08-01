'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '@/data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0a0a0c]">

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-left mb-12">
          <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest font-semibold">
            ACADEMICS & TRACK RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Education & Achievements
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Academic records, competitive programming ranks, and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Achievements Highlight Card (6 cols) */}
          <div className="lg:col-span-6">
            <SpotlightCard className="p-6 sm:p-8 h-full space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>HONORS & RANKINGS</span>
              </div>

              <div className="space-y-4">
                {PERSONAL_INFO.achievements.map((ach, idx) => (
                  <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#0a0a0c] border border-zinc-800 space-y-2">
                    <div className="text-base font-bold text-white flex items-center gap-2.5">
                      <Award className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                      <span>{ach.title}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans pt-1">
                      {ach.desc}
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Education Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>ACADEMIC BACKGROUND</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                >
                  <SpotlightCard className="p-6 sm:p-8">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-zinc-800 border border-zinc-700/60 text-zinc-300 uppercase">
                          {exp.type}
                        </span>
                        <span className="text-xs text-zinc-400 font-mono">
                          {exp.period}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white">
                        {exp.role}
                      </h4>

                      <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                        {exp.company} • {exp.location}
                      </p>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                        {exp.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-800/80 mt-4 flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
