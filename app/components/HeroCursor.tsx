"use client";

import { useEffect, useRef, useState } from "react";

type HeroCursorProps = {
  containerId?: string;
  theme?: "dark" | "light";
};

export default function HeroCursor({
  containerId = "hero-section",
  theme = "dark",
}: HeroCursorProps) {
  const [visible, setVisible] = useState(false);
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mouseX = 0;
    let mouseY = 0;

    let delayedX = 0;
    let delayedY = 0;

    let ringX = 0;
    let ringY = 0;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      // Mouse'un geçmiş izini oluşturuyor
      delayedX = lerp(delayedX, mouseX, 0.08);
      delayedY = lerp(delayedY, mouseY, 0.08);

      // Halo bu gecikmeli pozisyonu takip ediyor
      const targetRingX = delayedX + 155;
      const targetRingY = delayedY - 55;

      ringX = lerp(ringX, targetRingX, 0.06);
      ringY = lerp(ringY, targetRingY, 0.06);

      setDot({ x: mouseX, y: mouseY });
      setRing({ x: ringX, y: ringY });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX = x;
      mouseY = y;

      delayedX = x;
      delayedY = y;

      ringX = rect.width * 0.5;
      ringY = rect.height * 0.42;

      setDot({ x, y });
      setRing({ x: ringX, y: ringY });
      setVisible(true);

      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleLeave = () => {
      setVisible(false);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [containerId]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[8] hidden overflow-hidden md:block">
      <div
        className={`absolute transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: ring.x,
          top: ring.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className={`h-48 w-48 rounded-full backdrop-blur-lg ${theme === "light" ? "border border-teal-300/45 bg-teal-100/10 shadow-[0_0_0_1px_rgba(13,148,136,0.09),0_0_42px_rgba(20,184,166,0.15),0_0_72px_rgba(20,184,166,0.08)]" : "border border-white/35 bg-white/6 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_0_30px_rgba(255,255,255,0.12),0_0_60px_rgba(255,255,255,0.08)]"}` />
      </div>

      <div
        className={`absolute z-[9] transition-opacity duration-150 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: dot.x,
          top: dot.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className={`h-2.5 w-2.5 rounded-full ${theme === "light" ? "bg-teal-600 shadow-[0_0_12px_rgba(13,148,136,0.45)]" : "bg-white shadow-[0_0_10px_rgba(255,255,255,0.95)]"}`} />
      </div>
    </div>
  );
}