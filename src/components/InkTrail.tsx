"use client";

import { useEffect } from "react";

const MAX_DOTS = 28;

export function InkTrail() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    let last = 0;
    let count = 0;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < 45 || count >= MAX_DOTS) return;
      last = now;
      count += 1;

      const dot = document.createElement("span");
      dot.className = "ink-dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      document.body.appendChild(dot);
      dot.addEventListener("animationend", () => {
        dot.remove();
        count -= 1;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
