"use client";

import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
}

interface ExperienceProps {
  experience: Experience[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <Reveal className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              02 / Work History
            </p>
            <h2 className="font-heading font-800 text-4xl md:text-5xl text-paper">
              <ScrambleText text="Experience" />
            </h2>
          </div>
          <div className="hidden md:block w-24 h-px bg-border" />
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className={`relative md:grid md:grid-cols-2 md:gap-12`}>
                {i % 2 === 0 ? (
                  <>
                    <Reveal delay={i * 80} direction="left" className="md:text-right md:pr-12 mb-4 md:mb-0">
                      <div className="inline-flex items-center gap-2 mb-3">
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/30 text-accent font-mono text-xs px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-700 text-xl text-paper mb-1">{exp.role}</h3>
                      <p className="font-heading font-600 text-accent text-base mb-1">{exp.company}</p>
                      <p className="font-mono text-muted text-xs mb-1">{exp.location}</p>
                      <p className="font-mono text-muted text-xs">{exp.period}</p>
                    </Reveal>

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-accent border-2 border-ink z-10" />

                    <Reveal delay={i * 80 + 100} direction="right" className="md:pl-12">
                      <div className="bg-card border border-border rounded-2xl p-6 space-y-3 hover:border-accent/20 transition-colors">
                        {exp.highlights.map((h, j) => (
                          <div key={j} className="flex gap-3">
                            <span className="text-accent mt-1.5 text-xs flex-shrink-0">▸</span>
                            <p className="font-body text-paper/70 text-sm leading-relaxed">{h}</p>
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  </>
                ) : (
                  <>
                    <Reveal delay={i * 80 + 100} direction="left" className="md:pr-12 mb-4 md:mb-0 order-2 md:order-1">
                      <div className="bg-card border border-border rounded-2xl p-6 space-y-3 hover:border-accent/20 transition-colors">
                        {exp.highlights.map((h, j) => (
                          <div key={j} className="flex gap-3">
                            <span className="text-accent mt-1.5 text-xs flex-shrink-0">▸</span>
                            <p className="font-body text-paper/70 text-sm leading-relaxed">{h}</p>
                          </div>
                        ))}
                      </div>
                    </Reveal>

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-border border-2 border-ink z-10" />

                    <Reveal delay={i * 80} direction="right" className="md:pl-12 order-1 md:order-2 mb-4 md:mb-0">
                      <h3 className="font-heading font-700 text-xl text-paper mb-1">{exp.role}</h3>
                      <p className="font-heading font-600 text-accent text-base mb-1">{exp.company}</p>
                      <p className="font-mono text-muted text-xs mb-1">{exp.location}</p>
                      <p className="font-mono text-muted text-xs">{exp.period}</p>
                    </Reveal>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
