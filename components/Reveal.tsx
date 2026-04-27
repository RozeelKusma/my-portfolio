"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0) scale(1)";
          el.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
          observer.unobserve(el);
        }
      },
      {
        rootMargin: "0px 0px -50px 0px",
        threshold: 0,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initial = {
    up: "translate(0, 36px) scale(1)",
    left: "translate(-36px, 0) scale(1)",
    right: "translate(36px, 0) scale(1)",
    scale: "translate(0, 0) scale(0.94)",
  }[direction];

  const clipInitial =
    direction === "up"
      ? "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
      : "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initial,
        clipPath: clipInitial,
        transition: `opacity 0.7s cubic-bezier(0.33, 1, 0.68, 1), transform 0.7s cubic-bezier(0.33, 1, 0.68, 1), clip-path 0.7s cubic-bezier(0.33, 1, 0.68, 1)`,
      }}
    >
      {children}
    </div>
  );
}
