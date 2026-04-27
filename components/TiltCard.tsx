"use client";

import { useRef, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;

    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    // Move glow
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(232,255,71,0.08) 0%, transparent 70%)`;
    }
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transition = "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)";
      ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
      setTimeout(() => {
        if (ref.current) ref.current.style.transition = "";
      }, 600);
    }
    if (glowRef.current) {
      glowRef.current.style.background = "transparent";
    }
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div ref={glowRef} className="absolute inset-0 rounded-2xl pointer-events-none z-10 transition-all duration-200" />
      {children}
    </div>
  );
}
