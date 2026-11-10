'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/portfolioData';

type FilterField = 'all' | 'swe' | 'aiml' | 'ds';

const FILTER_OPTIONS: { id: FilterField; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'swe', label: 'Software Engineering' },
  { id: 'aiml', label: 'AI & Machine Learning' },
  { id: 'ds', label: 'Data Science' },
];

function ProjectActionLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-2 flex-wrap pt-2">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-obsidian text-ink font-mono text-xs font-bold uppercase tracking-wider border-2 border-stone hover:bg-vermilion hover:border-vermilion hover:text-cream transition-colors shadow-brutal-sm hover:shadow-none"
          aria-label={`${project.title} GitHub repository`}
        >
          Source Code ↗
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-vermilion text-cream font-mono text-xs font-bold uppercase tracking-wider border-2 border-stone hover:bg-obsidian hover:text-ink transition-colors shadow-brutal-sm hover:shadow-none"
          aria-label={`${project.title} live demo`}
        >
          {project.id === 'prismr' ? 'CRAN Package ↗' : 'Live Demo ↗'}
        </a>
      )}
      {project.kaggleUrl && (
        <a
          href={project.kaggleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper text-ink font-mono text-xs font-bold uppercase tracking-wider border-2 border-stone hover:bg-obsidian hover:text-ink transition-colors shadow-brutal-sm hover:shadow-none"
          aria-label={`${project.title} Kaggle notebook`}
        >
          Kaggle Notebook ↗
        </a>
      )}
    </div>
  );
}

export default function ChapterProjects() {
  const [selectedFilter, setSelectedFilter] = useState<FilterField>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === 'all') return true;
    return proj.fields.includes(selectedFilter);
  });

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-paper paper-texture border-t-[3px] border-stone">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Chapter header */}
        <div className="chapter-divider mb-10">
          <div className="flex items-baseline gap-3">
            <span className="chapter-number text-5xl md:text-7xl text-ink opacity-10">
              02
            </span>
            <div>
              <span className="chapter-label text-vermilion block mb-1">
                Chapter Two
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                The Works & Engineering Ledger
              </h2>
            </div>
          </div>
        </div>

        {/* Narrative Intro & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b-2 border-stone/60 mb-12">
          <div>
            <p className="font-body text-lg text-ink-muted max-w-2xl leading-relaxed">
              Every project, framework, and exploratory analytical model in one unified chronicle.
              From published statistical R packages and distributed real-time platforms to machine learning pipelines.
            </p>
          </div>

          {/* Discipline Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-150 border-2 ${
                  selectedFilter === filter.id
                    ? 'bg-obsidian text-ink border-stone shadow-brutal-sm'
                    : 'bg-paper text-ink border-stone/45 hover:border-stone'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Unified Projects Grid: All projects at one place */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="border-[3px] border-stone bg-paper-light p-6 shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Strip with Index & Discipline Tags */}
                <div className="flex items-center justify-between border-b border-stone/25 pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-ink opacity-40">
                    PRJ #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex gap-1 flex-wrap">
                    {project.fields.map((f) => (
                      <span
                        key={f}
                        className="px-1.5 py-0.5 border border-stone/45 font-mono text-[9px] uppercase font-bold text-ink-muted"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink group-hover:text-vermilion transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="font-novel italic text-sm text-vermilion font-medium mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="font-body text-base text-ink-light leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="space-y-1.5 border-t border-stone/20 pt-3 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-sm font-body text-ink-muted">
                        <span className="text-vermilion font-bold shrink-0 mt-0.5">—</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Tech Stack */}
                <div className="pt-3 border-t border-stone/25 mb-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-paper border border-stone/35 font-mono text-[10px] text-ink/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <ProjectActionLinks project={project} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Page Redirection Banner */}
        <div className="border-[3px] border-stone bg-obsidian text-ink p-8 md:p-10 shadow-brutal-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="editorial-label text-vermilion block">DEEP-DIVE DOCUMENTATION</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Want the Full Technical Breakdown & Case Studies?
            </h3>
            <p className="font-body text-sm text-ink-light max-w-2xl leading-relaxed">
              Explore our dedicated Projects Chronicle containing expanded architectural narratives, statistical pipeline explanations, and detailed highlight logs for every system.
            </p>
          </div>

          <Link
            href="/projects"
            className="px-6 py-4 bg-vermilion text-cream font-mono text-xs font-bold uppercase tracking-wider hover:bg-paper hover:text-ink transition-colors border-2 border-stone shrink-0 text-center shadow-brutal-sm"
          >
            Open Dedicated Projects Page →
          </Link>
        </div>

      </div>
    </section>
  );
}
