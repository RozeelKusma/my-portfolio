"use client";

import { useEffect, useRef, useState } from "react";

export function useCounter(end: number, duration = 1500, trigger: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(easeOut(progress) * end));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(end);
    };

    requestAnimationFrame(step);
  }, [trigger, end, duration]);

  return value;
}

interface CounterProps {
  value: string; // e.g. "30%", "3+", "70%", "1M+"
  label: string;
}

export default function AnimatedCounter({ value, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  // Parse numeric part
  const numMatch = value.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(/\d+/, "");

  const counted = useCounter(num, 1800, triggered);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-ink/50 border border-border/50 rounded-xl p-4 group hover:border-accent/40 transition-colors">
      <div className="font-heading font-800 text-2xl text-accent tabular-nums">
        {triggered ? counted : 0}{suffix}
      </div>
      <div className="font-mono text-xs text-muted mt-1">{label}</div>
    </div>
  );
}
