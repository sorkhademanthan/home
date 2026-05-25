"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, RefreshCw, Activity, MoreHorizontal, Layers } from "lucide-react";

// ─── ✏️  Change these values to test different states ─────────────────────────
const CARD_VALUES = {
  current: 78500,        // current ARR amount
  target: 100000,        // target ARR amount
  finishDate: "FEB 4",   // finish date label
  finishIn: "IN 8 DAYS", // finish sub-label
  ratePerDay: 2778,      // daily rate
  trendPercent: 44,      // trend percentage (positive = green, negative = red)
  trendVs: "VS JANUARY", // trend comparison label
  status: "On track" as "On track" | "At risk" | "Behind",
};
// ─────────────────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

const STATUS_STYLE: Record<string, string> = {
  "On track": "bg-emerald-500/[0.15] text-emerald-400 border border-emerald-500/25",
  "At risk":  "bg-amber-500/[0.15]  text-amber-400  border border-amber-500/25",
  "Behind":   "bg-red-500/[0.15]    text-red-400    border border-red-500/25",
};

export default function ARRTargetCard() {
  const [v] = useState(CARD_VALUES);
  const pct = Math.min(100, (v.current / v.target) * 100);

  // glow intensity: stronger the more progress we have
  const glow = 0.25 + (pct / 100) * 0.55;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#090909]">
      <div className="relative w-[460px]">
        {/* ── Card shell ──────────────────────────────────────────────────── */}
        <div
          className="relative rounded-[28px] overflow-visible"
          style={{
            background: "linear-gradient(160deg, #1a1a22 0%, #141418 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* ── Header ────────────────────────────────────────────────────── */}
          <div className="px-5 pt-5 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Layers size={15} className="text-slate-300" />
              </div>
              <span className="text-white font-semibold text-[15px] tracking-[-0.01em]">
                Q4 ARR Target
              </span>
            </div>
            <button className="text-white/30 hover:text-white/60 transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>

          {/* thin rule */}
          <div className="mx-5 h-px" style={{ background: "rgba(255,255,255,0.055)" }} />

          {/* ── Progress section ──────────────────────────────────────────── */}
          <div className="px-5 pt-4 pb-3">
            {/* label + badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10.5px] font-semibold tracking-[0.12em] text-white/35 uppercase">
                Current Progress
              </span>
              <span className={`text-[10.5px] font-semibold px-2.5 py-[3px] rounded-full ${STATUS_STYLE[v.status]}`}>
                {v.status}
              </span>
            </div>

            {/* amount */}
            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-[38px] font-bold text-white tracking-[-0.03em] leading-none">
                {fmt(v.current)}
              </span>
              <span className="text-[17px] font-medium text-white/30">
                / {fmt(v.target)}
              </span>
            </div>

            {/* ── Progress bar ──────────────────────────────────────────── */}
            <div className="relative mb-1">
              {/* percentage pill — sits above bar */}
              <motion.div
                className="absolute -top-[22px] text-[10px] font-bold text-blue-300 bg-blue-500/[0.18] border border-blue-400/25 px-1.5 py-px rounded-md whitespace-nowrap"
                style={{ left: `calc(${pct}% - 22px)` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                {pct.toFixed(1)}%
              </motion.div>

              {/* track */}
              <div
                className="h-[7px] rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #1d4ed8 0%, #3b82f6 55%, #7dd3fc 100%)",
                    boxShadow: "0 0 14px 3px rgba(59,130,246,0.55), 0 0 4px 1px rgba(59,130,246,0.9)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* ✨ Glow bloom — the key effect: bleeds DOWN onto stat cards */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  // anchored to the filled portion, radiates downward
                  left: 0,
                  top: "3px",
                  height: "220px",
                  zIndex: 0,
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "260px",
                    height: "220px",
                    background: `radial-gradient(ellipse 100% 80% at 100% 0%, rgba(59,130,246,${glow}) 0%, rgba(59,130,246,${glow * 0.3}) 40%, transparent 70%)`,
                    filter: "blur(6px)",
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* ── Stat cards ────────────────────────────────────────────────── */}
          <div className="px-5 pb-4 grid grid-cols-3 gap-2.5 relative z-10">
            <StatCard
              icon={<Calendar size={13} className="text-slate-400" />}
              label="FINISH"
              value={v.finishDate}
              sub={v.finishIn}
              glow={glow}
              delay={0.1}
            />
            <StatCard
              icon={<RefreshCw size={13} className="text-slate-400" />}
              label="RATE"
              value={fmt(v.ratePerDay)}
              sub="PER DAY"
              glow={glow}
              delay={0.17}
            />
            <StatCard
              icon={<Activity size={13} className="text-emerald-400" />}
              label="TREND"
              value={`${v.trendPercent >= 0 ? "+" : ""}${v.trendPercent}%`}
              sub={v.trendVs}
              valueColor={v.trendPercent >= 0 ? "text-emerald-400" : "text-red-400"}
              glow={glow}
              delay={0.24}
            />
          </div>

          {/* ── Generate insight ──────────────────────────────────────────── */}
          <div className="px-5 pb-5">
            <button
              className="w-full h-12 rounded-2xl flex items-center justify-center gap-2.5 text-[13.5px] font-medium text-white/70 hover:text-white/90 transition-all active:scale-[0.98]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              Generate insight
              <AiSparkle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  valueColor?: string;
  glow: number;
  delay: number;
}

function StatCard({ icon, label, value, sub, valueColor = "text-white", glow, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="relative rounded-[18px] p-3.5 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Top-edge illumination strip — this is the "lit from above" effect */}
      <div
        className="absolute inset-x-0 top-0 h-[1px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg,
            transparent 0%,
            rgba(59,130,246,${glow * 0.9}) 40%,
            rgba(96,165,250,${glow}) 60%,
            transparent 100%)`,
        }}
      />

      {/* Very subtle inner top glow to simulate light bouncing in */}
      <div
        className="absolute inset-x-0 top-0 h-[32px] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(59,130,246,${glow * 0.07}) 0%, transparent 100%)`,
        }}
      />

      <div className="relative flex items-center gap-1.5 mb-2.5">
        {icon}
        <span className="text-[9.5px] font-bold tracking-[0.1em] text-white/35 uppercase">
          {label}
        </span>
      </div>
      <div className={`relative text-[19px] font-bold leading-none ${valueColor}`}>
        {value}
      </div>
      <div className="relative text-[9.5px] font-medium text-white/30 mt-1 tracking-wider uppercase">
        {sub}
      </div>
    </motion.div>
  );
}

function AiSparkle() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L13.8 9.2L21 11L13.8 12.8L12 20L10.2 12.8L3 11L10.2 9.2L12 2Z"
        fill="url(#sg1)"
      />
      <path
        d="M19.5 14.5L20.5 18.5L24 19.5L20.5 20.5L19.5 24L18.5 20.5L15 19.5L18.5 18.5L19.5 14.5Z"
        fill="url(#sg2)"
        opacity="0.65"
      />
      <defs>
        <linearGradient id="sg1" x1="3" y1="2" x2="21" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c084fc" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="sg2" x1="15" y1="14.5" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c084fc" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
