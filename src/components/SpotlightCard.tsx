'use client';

import React, { useState, useRef } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SpotlightCard({ children, className = '', onClick }: SpotlightCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/80 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.06)] ${className}`}
    >
      {/* Soft, subtle cursor-following color glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.03) 60%, transparent 80%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
