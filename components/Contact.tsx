"use client";

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

interface ContactProps {
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  education: { degree: string; institution: string; period: string }[];
}

export default function Contact({ contact, education }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-card/30 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Big CTA */}
        <Reveal className="text-center mb-20">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-6">
            05 / Get In Touch
          </p>
          <h2 className="font-heading font-800 text-5xl md:text-7xl text-paper mb-6 leading-tight">
            Let&apos;s build
            <br />
            <span className="text-accent">
              <ScrambleText text="something great" />
            </span>
          </h2>
          <p className="font-body text-paper/60 text-lg max-w-xl mx-auto mb-10">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to chat, I&apos;d love to hear from
            you.
          </p>
          {/* <Magnetic strength={0.25}> */}
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 bg-accent text-ink font-heading font-700 text-lg px-8 py-4 rounded-full hover:bg-paper transition-colors group"
          >
            {contact.email}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          {/* </Magnetic> */}
        </Reveal>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Reveal direction="up" delay={0}>
            <h3 className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="block font-body text-paper/70 text-sm hover:text-accent transition-colors"
              >
                {contact.email}
              </a>
              <p className="font-body text-paper/70 text-sm">{contact.phone}</p>
              <p className="font-body text-paper/70 text-sm">
                {contact.location}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h3 className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
              Profiles
            </h3>
            <div className="space-y-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-paper/70 text-sm hover:text-accent transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-paper/70 text-sm hover:text-accent transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <h3 className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="font-body text-paper/80 text-sm leading-snug">
                    {edu.degree}
                  </p>
                  <p className="font-mono text-muted text-xs mt-1">
                    {edu.institution} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-muted text-xs">
            © {new Date().getFullYear()} Rojil Kusma. Built with Next.js &
            Tailwind CSS.
          </p>
          <p className="font-mono text-muted text-xs">Bhaktapur, Nepal 🇳🇵</p>
        </div>
      </div>
    </section>
  );
}
