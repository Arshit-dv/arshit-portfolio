"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { Badge } from "./Badge";
import { ShimmerButton } from "./ShimmerButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg p-2 text-zinc-400 hover:bg-surface-hover hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header & Badges */}
          <div className="space-y-4 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              {project.fields.map((field) => (
                <Badge key={field} variant="primary" size="sm">
                  {field.toUpperCase()}
                </Badge>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              {project.title}
            </h2>

            <p className="text-base font-medium text-blue-400">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="mt-6 border-t border-border pt-6 space-y-4">
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Key Achievements & Implementation Details
                </h4>
                <ul className="space-y-2 pl-1">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="pt-4 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-violet-400" />
                Tech Stack & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-xs font-mono text-zinc-300 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton variant="outline" icon={<Github className="h-4 w-4" />}>
                  View Repository
                </ShimmerButton>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton variant="primary" icon={<ExternalLink className="h-4 w-4" />}>
                  Live Demo
                </ShimmerButton>
              </a>
            )}

            {project.kaggleUrl && (
              <a
                href={project.kaggleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton variant="secondary" icon={<ExternalLink className="h-4 w-4" />}>
                  Kaggle Notebook ↗
                </ShimmerButton>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
