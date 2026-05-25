"use client";

import { useEffect } from "react";

const SPARK_COUNT = 8;

export function ClickEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const color = getComputedStyle(document.documentElement).getPropertyValue("--foreground").trim() || "#000";

      const container = document.createElement("div");
      container.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        z-index: 9999;
      `;
      document.body.appendChild(container);

      for (let i = 0; i < SPARK_COUNT; i++) {
        const angle = (360 / SPARK_COUNT) * i;
        const rad = (angle * Math.PI) / 180;

        const spark = document.createElement("div");
        spark.style.cssText = `
          position: absolute;
          width: 14px;
          height: 2px;
          background: ${color};
          border-radius: 1px;
          top: 0px;
          left: 0px;
          transform-origin: left center;
          transform: rotate(${angle}deg) translateX(4px);
        `;
        container.appendChild(spark);

        spark.animate(
          [
            {
              transform: `rotate(${angle}deg) translateX(4px)`,
              opacity: 1,
              width: "14px",
            },
            {
              transform: `rotate(${angle}deg) translateX(24px)`,
              opacity: 0,
              width: "5px",
            },
          ],
          { duration: 380, easing: "ease-out", fill: "forwards" }
        );
      }

      setTimeout(() => container.remove(), 400);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
