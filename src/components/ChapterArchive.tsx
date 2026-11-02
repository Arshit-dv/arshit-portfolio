'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/portfolioData';

const archiveProjects = PROJECTS.filter((p) => p.chapter === 'archive');

export default function ChapterArchive() {
  return (
    <section id="archive" className="relative py-20 md:py-28 paper-texture">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Chapter header */}
        <div className="chapter-divider mb-12">
          <div className="flex items-baseline gap-3">
            <span className="chapter-number text-5xl md:text-7xl text-ink opacity-10">
              03
            </span>
            <div>
              <span className="editorial-label text-vermilion block mb-1">
                Chapter Three
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                The Data Science Archive
              </h2>
            </div>
          </div>
        </div>

        <p className="font-body text-base text-ink-muted max-w-2xl mb-10 leading-relaxed">
          Research experiments, data analysis notebooks, and exploratory projects.
          These are the quieter investigations — secondary to the main body of work
          but worth preserving in the chronicle.
        </p>

        {/* Archive entries */}
        <div className="space-y-6">
          {archiveProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 border-[2px] border-ink/50 p-5 md:p-6 hover:border-ink hover:shadow-brutal-sm transition-all duration-150"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-2">
                <span className="font-display text-3xl font-bold text-ink opacity-15">
                  A{String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  {project.fields.map((field) => (
                    <span
                      key={field}
                      className="px-2 py-0.5 border border-ink/30 font-mono text-[9px] font-bold uppercase text-ink-muted"
                    >
                      {field}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="font-body text-sm text-ink-light leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1 pt-1">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex gap-2 text-xs text-ink-muted">
                        <span className="text-vermilion font-bold shrink-0">—</span>
                        <span className="font-body leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="md:col-span-4 space-y-4">
                <div>
                  <span className="editorial-label text-ink-muted block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-ink/5 font-mono text-[9px] font-bold text-ink-muted uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.kaggleUrl && (
                    <a
                      href={project.kaggleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink text-paper font-mono text-[10px] font-bold uppercase tracking-wider border-[2px] border-ink hover:bg-vermilion hover:border-vermilion transition-colors duration-150"
                      aria-label={`${project.title} on Kaggle`}
                    >
                      Kaggle Notebook ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper text-ink font-mono text-[10px] font-bold uppercase tracking-wider border-[2px] border-ink hover:bg-ink hover:text-paper transition-colors duration-150"
                      aria-label={`${project.title} on GitHub`}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Page marker */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16">
        <div className="flex justify-end">
          <span className="font-mono text-[10px] text-ink-muted">Page 07</span>
        </div>
      </div>
    </section>
  );
}
