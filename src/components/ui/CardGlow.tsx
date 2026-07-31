"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CardGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "violet" | "subtle";
}

export const CardGlow: React.FC<CardGlowProps> = ({
  children,
  className,
  glowColor = "blue",
  ...props
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowStyles = {
    blue: "rgba(59, 130, 246, 0.15)",
    violet: "rgba(139, 92, 246, 0.15)",
    subtle: "rgba(255, 255, 255, 0.08)",
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-xl border border-border bg-surface/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-accent hover:shadow-xl hover:shadow-black/40",
        className
      )}
      {...props}
    >
      {/* Mouse spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${glowStyles[glowColor]}, transparent 40%)`
            : "none",
        }}
      />
      
      {/* Soft top-border line animation */}
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {children}
    </div>
  );
};
