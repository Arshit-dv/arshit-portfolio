'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Search, 
  ArrowUpRight,
  X,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS, Project } from '@/data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesFilter =
      selectedFilter === 'all' ||
      proj.fields.includes(selectedFilter as 'swe' | 'aiml' | 'ds');

    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0a0a0c]">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest font-semibold">
              PROJECTS PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Featured Works
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Statistical validation packages, real-time distributed platforms, and machine learning engines.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or tech stack"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121215] border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'swe', label: 'Software Eng' },
            { id: 'aiml', label: 'AI / ML' },
            { id: 'ds', label: 'Data Science' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-zinc-800 text-white border border-zinc-700/80 shadow-sm'
                  : 'bg-[#121215] text-zinc-400 border border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3-Column Projects Grid with Spotlight Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <SpotlightCard
                  onClick={() => setActiveModalProject(project)}
                  className="p-6 sm:p-7 h-full flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {project.fields.map((field) => (
                          <span
                            key={field}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 transition-all" />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-medium mt-1.5 leading-relaxed">
                      {project.tagline}
                    </p>

                    <p className="text-xs text-zinc-300 mt-3 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 max-w-[70%]">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                          title="GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 transition-colors shadow-md"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.kaggleUrl && (
                        <a
                          href={project.kaggleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors text-[10px] font-mono"
                          title="Kaggle Notebook"
                        >
                          Kaggle ↗
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl w-full rounded-2xl p-6 sm:p-8 bg-[#121215] border border-zinc-700/80 shadow-2xl relative text-zinc-200"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-emerald-400 font-mono font-medium">
                  {activeModalProject.tagline}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {activeModalProject.longDescription || activeModalProject.description}
                </p>

                <div className="pt-3 border-t border-zinc-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">Key Highlights</div>
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-200 text-xs font-medium flex items-center gap-2 hover:bg-zinc-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  )}
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-white text-xs font-medium flex items-center gap-2 hover:bg-zinc-700 transition-colors border border-zinc-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {activeModalProject.kaggleUrl && (
                    <a
                      href={activeModalProject.kaggleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors border border-zinc-800"
                    >
                      Kaggle Notebook ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
