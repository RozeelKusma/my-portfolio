"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.documentElement.style.cursor = "none";

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }

      animId = requestAnimationFrame(animate);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isLink = el.closest("a, button, [role='button']");
      const isTextEl = el.closest("p, h1, h2, h3, span, li");
      setIsHovering(!!isLink);
      setIsText(!!isTextEl && !isLink);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    animId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-accent mix-blend-difference transition-transform duration-75"
        style={{
          transform: "translate(-100px, -100px)",
          scale: isClicking ? "0.5" : "1",
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-all duration-300 ${
          isHovering
            ? "w-14 h-14 border-accent/80 bg-accent/10 backdrop-blur-sm"
            : isText
            ? "w-8 h-8 border-paper/30"
            : "w-10 h-10 border-paper/20"
        } ${isClicking ? "scale-75" : "scale-100"}`}
        style={{ transform: "translate(-100px, -100px)" }}
      />
    </>
  );
}
