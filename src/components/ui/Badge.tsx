"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline" | "success";
  className?: string;
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  size = "md",
}) => {
  const variantStyles = {
    default: "bg-surface/80 border-border text-zinc-300",
    primary: "bg-blue-950/50 border-blue-800/40 text-blue-300",
    secondary: "bg-violet-950/50 border-violet-800/40 text-violet-300",
    outline: "bg-transparent border-zinc-700 text-zinc-400",
    success: "bg-emerald-950/50 border-emerald-800/40 text-emerald-300",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-medium rounded",
    md: "px-2.5 py-1 text-xs font-semibold rounded-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
