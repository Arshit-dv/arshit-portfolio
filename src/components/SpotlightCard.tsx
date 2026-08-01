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
      className={`relative overflow-hidden rounded-2xl bg-[#121215] border border-zinc-800/90 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/80 ${className}`}
    >
      {/* Soft cursor-following neutral glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.05), transparent 75%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
