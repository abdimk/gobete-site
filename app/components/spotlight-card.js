"use client";

import { useRef } from "react";

// A card with a soft mint glow that follows the cursor (Aceternity-style spotlight).
export function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} className={`spotlight ${className}`} onMouseMove={handleMove}>
      {children}
    </div>
  );
}
