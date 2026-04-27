"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Count up quickly to 100
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          return 100;
        }
        return c + Math.ceil(Math.random() * 12);
      });
    }, 30);

    const exitTimer = setTimeout(() => setPhase("exiting"), 1400);
    const doneTimer = setTimeout(() => setPhase("done"), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-ink flex items-end justify-between p-8 md:p-12 transition-all duration-700 ${
        phase === "exiting"
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
      style={{
        clipPath:
          phase === "exiting"
            ? "polygon(0 0, 100% 0, 100% 0, 0 0)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition:
          phase === "exiting"
            ? "clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1)"
            : "none",
      }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-muted text-xs tracking-widest uppercase mb-2">
          Loading portfolio
        </p>
        <h1 className="font-heading font-800 text-6xl md:text-8xl text-paper">
          Rojil<span className="text-accent">.</span>
        </h1>
      </div>

      <div className="relative z-10 text-right">
        <p className="font-mono text-muted text-xs mb-1">Frontend Dev</p>
        <p className="font-heading font-800 text-5xl md:text-7xl text-accent tabular-nums">
          {Math.min(count, 100)}
          <span className="text-2xl">%</span>
        </p>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-75" style={{ width: `${Math.min(count, 100)}%` }} />
    </div>
  );
}
