"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  contact: {
    github: string;
    linkedin: string;
    email: string;
    location: string;
  };
}

export default function Hero({ name, title, summary, contact }: HeroProps) {
  const [visible, setVisible] = useState(false);
  const blobRef = useRef<SVGCircleElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Delay reveal for after loader
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  // Morphing blob follows mouse in hero section
  useEffect(() => {
    let blobX = 0,
      blobY = 0;
    let targetX = 0,
      targetY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (e.clientY > rect.bottom) return;
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      blobX = lerp(blobX, targetX, 0.06);
      blobY = lerp(blobY, targetY, 0.06);
      const blob = blobRef.current;
      if (blob) {
        blob.setAttribute("cx", String(blobX));
        blob.setAttribute("cy", String(blobY));
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const stagger = (i: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.8s cubic-bezier(0.33,1,0.68,1) ${i * 120}ms, transform 0.8s cubic-bezier(0.33,1,0.68,1) ${i * 120}ms`,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* SVG blob cursor follower */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      >
        <defs>
          <filter id="blob-blur">
            <feGaussianBlur stdDeviation="60" />
          </filter>
          <radialGradient id="blob-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8FF47" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E8FF47" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          ref={blobRef}
          cx="-500"
          cy="-500"
          r="280"
          fill="url(#blob-grad)"
          filter="url(#blob-blur)"
        />
      </svg>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#F4F1EA 1px, transparent 1px), linear-gradient(90deg, #F4F1EA 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div
              style={stagger(0)}
              className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-muted tracking-widest uppercase">
                Available for work
              </span>
            </div>

            {/* Name with scramble */}
            <div style={stagger(1)} className="mb-4">
              <h1 className="font-heading font-800 text-5xl md:text-7xl leading-[0.95] tracking-tight text-paper">
                <ScrambleText text={name.split(" ")[0]} delay={1900} />
                <br />
                <span className="text-accent">
                  <ScrambleText text={name.split(" ")[1]} delay={2100} />
                </span>
              </h1>
            </div>

            {/* Animated title */}
            <div style={stagger(2)} className="mb-6">
              <p className="font-mono text-muted text-lg tracking-wide">
                <TypewriterText text={`— ${title}`} delay={2400} />
              </p>
            </div>

            {/* Summary */}
            <p
              style={stagger(3)}
              className="font-body text-paper/70 text-base md:text-lg leading-relaxed max-w-xl mb-10"
            >
              {summary}
            </p>

            {/* CTAs with magnetic effect */}
            <div style={stagger(4)} className="flex flex-wrap gap-4 mb-10">
              <Magnetic strength={0.35}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-accent text-ink font-heading font-700 px-6 py-3 rounded-full hover:bg-paper transition-colors text-sm"
                >
                  View Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic strength={0.35}>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border text-paper font-heading font-600 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors text-sm"
                >
                  GitHub
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </Magnetic>
            </div>

            {/* Location */}
            <div
              style={stagger(5)}
              className="flex items-center gap-2 text-muted text-sm font-mono"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              {contact.location}
            </div>
          </div>

          {/* Right: Stats card */}
          <div
            style={stagger(3)}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 w-full max-w-sm">
                {/* Code snippet */}
                <div className="font-mono text-xs text-muted mb-6 leading-relaxed">
                  <span className="text-accent">const</span>{" "}
                  <span className="text-paper">developer</span>{" "}
                  <span className="text-muted">= {"{"}</span>
                  <br />
                  <span className="ml-4 text-paper/60">
                    experience:{" "}
                    <span className="text-accent">&quot;3+ years&quot;</span>,
                  </span>
                  <br />
                  <span className="ml-4 text-paper/60">
                    focus:{" "}
                    <span className="text-accent">&quot;Frontend&quot;</span>,
                  </span>
                  <br />
                  <span className="ml-4 text-paper/60">
                    stack:{" "}
                    <span className="text-accent">
                      [&quot;React&quot;, &quot;TS&quot;]
                    </span>
                    ,
                  </span>
                  <br />
                  <span className="text-muted">{"}"}</span>
                </div>

                {/* Animated counters */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <AnimatedCounter value="3+" label="Years exp." />
                  <AnimatedCounter value="30%" label="Load time ↓" />
                  <AnimatedCounter value="70%" label="Time saved" />
                  <AnimatedCounter value="1M+" label="Emails/campaign" />
                </div>

                {/* Socials */}
                <div className="flex gap-3">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center border border-border rounded-lg py-2.5 text-muted hover:text-accent hover:border-accent transition-colors text-xs font-mono"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex-1 flex items-center justify-center border border-border rounded-lg py-2.5 text-muted hover:text-accent hover:border-accent transition-colors text-xs font-mono"
                  >
                    Email ↗
                  </a>
                </div>
              </div>

              {/* Dot grid decoration */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#E8FF47 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={stagger(6)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent animate-pulse" />
      </div>
    </section>
  );
}

// Inline typewriter
function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i >= text.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-pulse text-accent">|</span>
      )}
    </span>
  );
}
