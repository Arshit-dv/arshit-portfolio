"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}) => {
  if (variant === "outline") {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-text transition-all duration-200 hover:border-text-muted hover:bg-surface-hover hover:text-white active:scale-[0.98] disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        {icon}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg border border-secondary/30 bg-secondary/10 px-5 py-2.5 text-sm font-medium text-violet-300 transition-all duration-200 hover:border-secondary/60 hover:bg-secondary/20 hover:text-white active:scale-[0.98] disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        {icon}
      </button>
    );
  }

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/35 active:scale-[0.98] disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Shimmer linear highlight */}
      <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)] transition-transform duration-1000">
        <span className="relative h-full w-12 bg-white/20" />
      </span>
      <span className="relative flex items-center gap-2">
        {children}
        {icon}
      </span>
    </button>
  );
};
