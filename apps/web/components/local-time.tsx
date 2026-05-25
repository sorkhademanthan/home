"use client";

import { useState, useEffect } from "react";

export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

    const initialId = setTimeout(() => setTime(format()), 0);
    const id = setInterval(() => setTime(format()), 1_000);
    return () => {
      clearTimeout(initialId);
      clearInterval(id);
    };
  }, []);

  if (!time) return null;

  return (
    <span className="font-mono-meta text-xs text-neutral-400 tabular-nums">
      {time} IST
    </span>
  );
}
