"use client";

import { useEffect, useRef } from "react";

/**
 * An ambient, pointer-following halo for the homepage only.
 * The ring deliberately trails far from the real pointer so it never
 * replaces the cursor or competes with form inputs and buttons.
 */
export default function LandingCursorHalo() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const halo = haloRef.current;
    if (!halo) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let pointerX = 0;
    let pointerY = 0;
    let ringX = 0;
    let ringY = 0;
    let active = false;
    let frame = 0;

    const draw = () => {
      const targetX = pointerX + 155;
      const targetY = pointerY - 55;
      ringX += (targetX - ringX) * 0.085;
      ringY += (targetY - ringY) * 0.085;
      halo.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(draw);
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!active) {
        active = true;
        ringX = pointerX + 155;
        ringY = pointerY - 55;
        halo.style.opacity = "1";
        draw();
      }
    };

    const hide = () => {
      active = false;
      halo.style.opacity = "0";
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const leave = (event: PointerEvent) => {
      if (!event.relatedTarget) hide();
    };

    const visibility = () => {
      if (document.hidden) hide();
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerout", leave);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("blur", hide);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", leave);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("blur", hide);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={haloRef}
      aria-hidden="true"
      className="carebridge-landing-halo pointer-events-none fixed left-0 top-0 z-40 hidden h-44 w-44 rounded-full opacity-0 md:block"
    />
  );
}
