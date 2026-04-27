"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export function useScramble(text: string, trigger: boolean, speed = 40) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const total = text.length * 2;

    if (frameRef.current) clearInterval(frameRef.current);

    frameRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration / 2) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration > total) {
        clearInterval(frameRef.current!);
        setDisplay(text);
      }
    }, speed);

    return () => {
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [trigger, text, speed]);

  return display;
}

// Component version
interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function ScrambleText({ text, className, delay = 0, as: Tag = "span" }: ScrambleTextProps) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const display = useScramble(text, triggered, 30);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTriggered(true);
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
