"use client";

import { useRef } from "react";

// A card with a soft mint glow that follows the cursor (Aceternity-style spotlight).
export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
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
