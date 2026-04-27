"use client";

const allSkills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "GraphQL",
  "AWS S3",
  "CloudFront",
  "WebRTC",
  "Twilio",
  "Redux",
  "Zustand",
  "NestJS",
  "PostgreSQL",
  "GrapesJS",
  "Vite",
  "Apollo Client",
  "REST APIs",
  "CodePipeline",
];

export default function SkillsMarquee() {
  const doubled = [...allSkills, ...allSkills];

  return (
    <div className="py-8 border-y border-border overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((skill, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-4">
            <span className="font-mono text-sm text-muted tracking-wide">{skill}</span>
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
