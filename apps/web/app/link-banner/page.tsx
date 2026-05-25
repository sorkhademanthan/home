import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function LinkBannerPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black p-4 text-white">
            {/* Container - Standard OG Image size */}
            <div className="relative w-[1200px] h-[630px] bg-black border border-white/10 overflow-hidden">
                {/* 4 solid layout rails forming the frame boundary (No subtle background grid) */}
                <div className="absolute left-[64px] top-0 bottom-0 w-px bg-white/20" />
                <div className="absolute right-[64px] top-0 bottom-0 w-px bg-white/20" />
                <div className="absolute top-[64px] left-0 right-0 h-px bg-white/20" />
                <div className="absolute bottom-[64px] left-0 right-0 h-px bg-white/20" />

                {/* Center Content Box */}
                <div className="absolute top-[65px] bottom-[65px] left-[65px] right-[65px] bg-black p-12 flex flex-col justify-between">
                    
                    {/* Top Area - Intentionally Left Blank or for future content */}
                    <div className="flex justify-between items-start w-full">
                        {/* Removed Index, Active Profile */}
                    </div>

                    {/* Middle Area */}
                    <div className="flex flex-col gap-3">
                        <p className="font-sans text-xl text-neutral-500 max-w-sm leading-relaxed">
                            Building polished web interfaces and reliable systems from zero.
                        </p>
                    </div>

                    {/* Bottom Area - Identity Statement */}
                    <div className="flex flex-col gap-3 justify-end w-full mt-auto">
                        <span className="font-mono-meta text-xs uppercase tracking-[0.25em] text-neutral-400">
                            Software Engineer
                        </span>
                        <h1 className="font-serif-accent text-[6rem] tracking-tight text-white leading-none">
                            Harsh Jadhav
                        </h1>
                    </div>

                </div>

                {/* Corner intersection dots for ultra-detail */}
                <div className="absolute left-[63px] top-[63px] w-[3px] h-[3px] bg-white rounded-full"></div>
                <div className="absolute right-[63px] top-[63px] w-[3px] h-[3px] bg-white rounded-full"></div>
                <div className="absolute left-[63px] bottom-[63px] w-[3px] h-[3px] bg-white rounded-full"></div>
                <div className="absolute right-[63px] bottom-[63px] w-[3px] h-[3px] bg-white rounded-full"></div>

            </div>
        </div>
    );
}

