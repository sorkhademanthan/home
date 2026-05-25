"use client";

import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-transparent">
      <div
        className="h-full bg-neutral-400 dark:bg-neutral-500 transition-none origin-left"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      />
    </div>
  );
}
