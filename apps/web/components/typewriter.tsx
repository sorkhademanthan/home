"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "Software Engineer",
  "Frontend Developer",
  "Building from zero",
  "Crypto & Web",
];

export function TypewriterEffect() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    if (!current) return;
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          75
        );
      } else {
        timeout = setTimeout(() => setPhase("waiting"), 1800);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          40
        );
      } else {
        timeout = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
          setPhase("typing");
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, phraseIndex]);

  return (
    <span className="font-sans text-[14px] text-neutral-400 inline-flex items-center gap-0.5 h-[20px]">
      <span>{displayed}</span>
      <span className="inline-block w-px h-[13px] bg-neutral-400 animate-pulse" />
    </span>
  );
}
