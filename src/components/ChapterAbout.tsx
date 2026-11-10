'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EXPERIENCES } from '@/data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ChapterAbout() {
  return (
    <section id="about" className="relative py-20 md:py-28 paper-texture">
      {/* Chapter header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="chapter-divider mb-12">
          <div className="flex items-baseline gap-3">
            <span className="chapter-number text-5xl md:text-7xl text-ink opacity-10">
              01
            </span>
            <div>
              <span className="chapter-label text-vermilion block mb-1">
                Chapter One
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                The Author
              </h2>
            </div>
          </div>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Main column */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            {/* Large novel epigraph quote */}
            <div className="border-l-[3px] border-vermilion pl-6 py-1">
              <p className="novel-epigraph text-xl md:text-2xl leading-relaxed text-ink">
                &ldquo;Building scalable software, intelligent systems, and data-driven applications
                that solve real-world problems.&rdquo;
              </p>
            </div>

            {/* Body text with authentic novel drop cap */}
            <div className="space-y-4">
              <p className="novel-dropcap font-body text-lg md:text-xl leading-[1.9] text-ink/90">
                {PERSONAL_INFO.aboutMe}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {PERSONAL_INFO.roleTitles.map((role) => (
                  <span
                    key={role}
                    className="inline-block px-3 py-1 border-[2px] border-stone font-mono text-[10px] font-bold uppercase tracking-wider bg-paper-light"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Education entries */}
            <div className="space-y-4 pt-4">
              <div className="editorial-label text-ink-muted mb-3">
                Academic Background
              </div>
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="border-[2px] border-stone p-4 md:p-5 hover:shadow-brutal-sm transition-all duration-150"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-display text-base md:text-lg font-bold text-ink">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-[10px] text-ink-muted uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-vermilion font-medium">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="font-body text-base text-ink-light mt-2 leading-relaxed">
                    {exp.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-paper-darker font-mono text-[9px] font-semibold text-ink-muted uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar — Achievements & details */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: 0.2 } } }}
          >
            {/* Marginal note */}
            <div className="border-[3px] border-stone p-5 md:p-6 bg-paper-dark relative mb-8">
              <div className="absolute -top-3 left-4 bg-paper-dark px-2">
                <span className="editorial-label text-ink-muted">
                  Honors & Rankings
                </span>
              </div>

              <div className="space-y-4 pt-2">
                {PERSONAL_INFO.achievements.map((ach, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="font-display text-2xl font-bold text-vermilion leading-none mt-0.5 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h5 className="font-display text-base font-bold text-ink">
                        {ach.title}
                      </h5>
                      <p className="font-body text-sm text-ink-muted leading-relaxed mt-0.5">
                        {ach.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reference card */}
            <div className="border-[2px] border-stone p-5">
              <div className="editorial-label text-ink-muted mb-4">
                Quick Reference
              </div>

              <dl className="space-y-3">
                {[
                  { label: 'Location', value: PERSONAL_INFO.location },
                  { label: 'University', value: 'VIT Chennai' },
                  { label: 'Degree', value: PERSONAL_INFO.degree },
                  { label: 'CGPA', value: PERSONAL_INFO.gpa },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-baseline gap-4">
                    <dt className="font-mono text-[10px] text-ink-muted uppercase tracking-wider shrink-0">
                      {item.label}
                    </dt>
                    <dd className="font-novel text-base font-semibold text-ink text-right">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Page marker */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16">
        <div className="flex justify-end">
          <span className="font-mono text-[10px] text-ink-muted">Page 02</span>
        </div>
      </div>
    </section>
  );
}
