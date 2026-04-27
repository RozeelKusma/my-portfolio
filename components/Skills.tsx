"use client";

import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";

interface SkillsProps {
  skills: Record<string, string[]>;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              04 / Toolkit
            </p>
            <h2 className="font-heading font-800 text-4xl md:text-5xl text-paper">
              <ScrambleText text="Skills" />
            </h2>
          </div>
          <div className="hidden md:block w-24 h-px bg-border" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 80} direction="scale">
              <div className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors h-full">
                <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span
                      key={skill}
                      className="font-body text-sm text-paper/80 bg-ink/50 border border-border/60 rounded-lg px-3 py-1.5 hover:border-accent/40 hover:text-paper hover:bg-accent/5 transition-all duration-200 cursor-default"
                      style={{ transitionDelay: `${j * 20}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
