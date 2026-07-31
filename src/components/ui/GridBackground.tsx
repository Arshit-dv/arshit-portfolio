"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "dotted" | "grid";
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  className,
  children,
  variant = "dotted",
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-background text-text flex flex-col items-center justify-center min-h-screen",
        variant === "dotted" ? "bg-dotted-pattern" : "bg-grid-pattern",
        className
      )}
    >
      {/* Interactive mouse follow radial spotlight over dotted plane */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.04), transparent 80%)`,
        }}
      />

      {/* Center radial mask for soft ambient vignette gradient */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black_85%)]" />

      {/* Top subtle blue & violet glowing ambient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-transparent blur-3xl opacity-80 animate-pulse-glow" />

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
