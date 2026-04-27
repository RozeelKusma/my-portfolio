"use client";

import TiltCard from "./TiltCard";
import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";

interface Project {
  name: string;
  description: string;
  tags: string[];
  highlights: string[];
  url: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              03 / Selected Work
            </p>
            <h2 className="font-heading font-800 text-4xl md:text-5xl text-paper">
              <ScrambleText text="Projects" />
            </h2>
          </div>
          <div className="hidden md:block w-24 h-px bg-border" />
        </Reveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 100} direction="scale">
              <TiltCard>
                <a target="_blank" href={project.url}>
                  <div className="group relative bg-card border border-border rounded-2xl p-7 hover:border-accent/40 transition-all duration-300 overflow-hidden h-full">
                    {/* Scan line on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 overflow-hidden rounded-2xl">
                      <div
                        className="absolute left-0 right-0 h-px bg-accent/20"
                        style={{
                          animation: "scanline 2s linear infinite",
                          top: 0,
                        }}
                      />
                    </div>

                    {/* Number */}
                    <span className="font-mono text-xs text-border mb-4 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Name */}
                    <h3 className="font-heading font-700 text-xl text-paper mb-3 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-paper/60 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-muted font-mono"
                        >
                          <span className="text-accent mt-0.5">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-muted border border-border/70 rounded-full px-3 py-1 group-hover:border-accent/30 group-hover:text-paper/80 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-6 right-6 w-8 h-8 border border-border rounded-full flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-300">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </section>
  );
}
