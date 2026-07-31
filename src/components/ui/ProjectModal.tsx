"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers } from "lucide-react";
import { Project } from "@/data/portfolio";
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

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-border bg-surface-hover p-2 text-text-muted transition-colors hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              {/* Category & Status Header */}
              <div className="flex flex-wrap items-center gap-2 pr-8">
                <Badge variant="primary">{project.category}</Badge>
                {project.featured && <Badge variant="secondary">Featured Engineering Project</Badge>}
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-1 text-base font-medium text-text-muted">{project.tagline}</p>
              </div>

              {/* Performance Metrics Callout */}
              {project.metrics && (
                <div className="flex items-center gap-3 rounded-xl border border-blue-900/40 bg-blue-950/20 p-4 text-sm text-blue-300">
                  <Cpu className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="font-semibold">{project.metrics}</span>
                </div>
              )}

              {/* Full Description */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-text-dim">Project Overview</h4>
                <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Engineering Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-dim">Engineering Highlights</h4>
                  <ul className="mt-3 space-y-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-text">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Details */}
              {project.architectureDetails && project.architectureDetails.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-dim">Architecture & Mechanics</h4>
                  <ul className="mt-3 space-y-2.5">
                    {project.architectureDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <Layers className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Badges */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-text-dim">Technologies & Tools</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ShimmerButton icon={<ExternalLink className="h-4 w-4" />}>
                      View Live Demo
                    </ShimmerButton>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <ShimmerButton variant="outline" icon={<Github className="h-4 w-4" />}>
                      View Source Code
                    </ShimmerButton>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
