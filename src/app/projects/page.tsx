'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PROJECTS, Project, PERSONAL_INFO } from '@/data/portfolioData';

type FilterField = 'all' | 'swe' | 'aiml' | 'ds';

export default function ProjectsCatalogPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterField>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesFilter = selectedFilter === 'all' || proj.fields.includes(selectedFilter);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      proj.title.toLowerCase().includes(q) ||
      proj.tagline.toLowerCase().includes(q) ||
      proj.description.toLowerCase().includes(q) ||
      (proj.longDescription && proj.longDescription.toLowerCase().includes(q)) ||
      proj.techStack.some((t) => t.toLowerCase().includes(q));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-paper text-ink paper-texture">
      {/* Top Banner Navigation */}
      <header className="border-b-[3px] border-ink bg-paper-light sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-vermilion transition-colors"
          >
            ← Back to Chronicle
          </Link>
          <div className="font-mono text-xs text-ink-muted hidden sm:block">
            {PERSONAL_INFO.name} — Full Works Catalog
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        
        {/* Page Title & Mission */}
        <div className="border-b-2 border-ink pb-8 mb-12">
          <div className="editorial-label text-vermilion mb-2">COMPLETE TECHNICAL ARCHIVE</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink mb-4">
            Projects, Systems & Applied Research
          </h1>
          <p className="font-body text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
            A comprehensive catalog of software engineering systems, statistical packages, distributed architectures,
            and machine learning pipelines. Every project contains verified repository source code and technical implementation notes.
          </p>
        </div>

        {/* Search & Discipline Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-[3px] border-ink bg-paper-light shadow-brutal mb-12">
          
          {/* Search Input */}
          <div className="flex-1 max-w-md">
            <label htmlFor="search" className="sr-only">Search projects</label>
            <input
              id="search"
              type="text"
              placeholder="Search by keyword, language, or framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 bg-paper border-2 border-ink text-sm font-body text-ink focus:outline-none focus:border-vermilion"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'swe', label: 'Software Eng' },
              { id: 'aiml', label: 'AI & ML' },
              { id: 'ds', label: 'Data Science' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as FilterField)}
                className={`px-3 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-colors border-2 ${
                  selectedFilter === f.id
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper text-ink border-ink/40 hover:border-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-8">
          <span>SHOWING {filteredProjects.length} OF {PROJECTS.length} PROJECTS</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-vermilion hover:underline"
            >
              [Clear Search Filter]
            </button>
          )}
        </div>

        {/* Deep Dossiers List */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="border-[3px] border-ink bg-paper-light p-6 md:p-10 shadow-brutal relative"
            >
              {/* Corner Dossier Stamp */}
              <div className="flex items-center justify-between border-b-2 border-ink pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold bg-ink text-paper px-2.5 py-1">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {project.fields.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 border border-ink font-mono text-[10px] uppercase font-bold text-ink"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="font-mono text-xs text-ink-muted uppercase">
                  ID: {project.id}
                </div>
              </div>

              {/* Title, Tagline & Overview */}
              <div className="mb-6">
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-1">
                  {project.title}
                </h2>
                <p className="font-novel italic text-base text-vermilion font-medium mb-4">
                  {project.tagline}
                </p>
                <p className="font-body text-lg md:text-xl text-ink-light leading-[1.85] max-w-4xl">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Detailed Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-6 p-5 border-2 border-ink/30 bg-paper">
                  <h3 className="font-mono text-xs font-bold uppercase text-ink-muted tracking-wider mb-3">
                    Architectural & Technical Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-base font-body text-ink/90">
                        <span className="text-vermilion font-bold shrink-0 mt-0.5">❖</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies & Action Links Strip */}
              <div className="pt-6 border-t-2 border-ink flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-ink-muted mr-1">STACK:</span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-ink text-paper font-mono text-[11px] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct External Links */}
                <div className="flex items-center gap-3 flex-wrap">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-ink text-paper font-mono text-xs font-bold uppercase tracking-wider hover:bg-vermilion transition-colors border-2 border-ink shadow-brutal-sm"
                    >
                      GitHub Repository ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-vermilion text-paper font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity border-2 border-ink shadow-brutal-sm"
                    >
                      {project.id === 'prismr' ? 'CRAN Package ↗' : 'Live Deployment ↗'}
                    </a>
                  )}
                  {project.kaggleUrl && (
                    <a
                      href={project.kaggleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-paper text-ink font-mono text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors border-2 border-ink shadow-brutal-sm"
                    >
                      Kaggle Notebook ↗
                    </a>
                  )}
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t-[3px] border-ink flex items-center justify-between">
          <Link
            href="/"
            className="px-6 py-3 bg-ink text-paper font-mono text-xs font-bold uppercase hover:bg-vermilion transition-colors shadow-brutal-sm inline-flex items-center gap-2"
          >
            ← Return to Main Chronicle
          </Link>
          <span className="font-mono text-xs text-ink-muted">
            {PERSONAL_INFO.name} • {new Date().getFullYear()}
          </span>
        </div>

      </main>
    </div>
  );
}
