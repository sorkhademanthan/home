import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { ArrowUpRight, GitPullRequest, PenTool } from "lucide-react";
import { FadeIn } from "@/components/page-transition";
import { LocalTime } from "@/components/local-time";


const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Independent",
    period: "2023 — Present",
    description: "Building web apps and crypto tooling for early-stage products. Work spans payment platforms, wallet integrations, and interface systems."
  },
  {
    role: "Frontend Intern",
    company: "CSRBOX",
    period: "2023",
    description: "Built accessible, responsive frontend components. Worked on form handling and layout systems."
  }
];

const PROJECTS = [
  {
    title: "Componentry",
    type: "UI Library",
    stack: "React",
    href: "https://www.componentry.fun",
    description: "Built by Harsh Jadhav. A React UI component library with accessible, customizable components for production applications."
  },
  {
    title: "GameSideVault",
    type: "Crypto Wallet",
    stack: "Solana",
    href: "https://github.com/harshjdhv",
    description: "Crypto wallet infrastructure with multi-chain support. Implements fund locking and automated releases."
  },
  {
    title: "Perpetual Trading",
    type: "Exchange UI",
    stack: "React",
    href: "https://github.com/harshjdhv",
    description: "Frontend for a perpetual futures trading interface. Includes wallet connection and real-time chart rendering."
  },
  {
    title: "AnchorPay",
    type: "Escrow Platform",
    stack: "Next.js",
    href: "https://github.com/harshjdhv",
    description: "Escrow payment platform. Freelancers and clients can lock funds against milestones."
  }
];

const PULL_REQUESTS = [
  {
    title: "Rocket.Chat",
    description: "Fix variable shadowing in Livechat API",
    pr: "#38040",
    href: "https://github.com/RocketChat/Rocket.Chat/pull/38040"
  },
  {
    title: "Cal.com",
    description: "Hide organizer email in workflows",
    pr: "#23525",
    href: "https://github.com/calcom/cal.com/pull/23525"
  },
  {
    title: "ActivePieces",
    description: "Fix Add Tool dialog overflow",
    pr: "#8003",
    href: "https://github.com/activepieces/activepieces/pull/8003"
  },
  {
    title: "oss.now",
    description: "Fix navbar overflow on mobile",
    pr: "#78",
    href: "https://github.com/collabute/ossdotnow/pull/78"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center bg-background overflow-hidden">
      {/* Editorial Grid Container */}
      <div className="w-full flex flex-row justify-center gap-4 xl:gap-8 relative">
        
        {/* Decorative Left Track */}
        <div 
          className="hidden lg:block w-[20px] xl:w-[32px] border-x border-dashed border-border shrink-0"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 8px)" }}
        />

        {/* Main Column */}
        <main className="w-full max-w-[760px] px-6 pt-32 pb-8 md:pt-44 md:pb-16 shrink-0 z-10">
          <div className="w-full max-w-[660px] mx-auto flex flex-col gap-10">
        <FadeIn delay={0}>
          <div className="flex justify-start">
            <div className="-rotate-2 rounded-2xl border border-border/70 bg-background/40 p-px shadow-sm">
              <Image
                src="/_.jpeg"
                alt="Harsh Jadhav profile image"
                width={80}
                height={80}
                priority
                className="aspect-square rounded-[14px] object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* -- Header -- */}
        <FadeIn delay={0.05}>
          <header className="flex flex-col gap-6">
            <h1 className="text-[22px] sm:text-[26px] tracking-tight max-w-[28ch] leading-[1.3]">
              <span className="text-foreground font-semibold">I&apos;m Harsh Jadhav.</span>{" "}
              <span className="text-muted-foreground font-medium">a builder, full stack developer and hobbyist designer.</span>
            </h1>

            <div className="flex flex-col gap-5 max-w-[55ch]">
              <p className="font-sans text-[15.5px] sm:text-[16px] text-muted-foreground leading-[1.75]">
                I build things from zero. Focused on polished web interfaces and performant systems. If it&apos;s boring and reliable, it&apos;s good enough to ship.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Link
                href="mailto:hi@harshjdhv.com"
                className="group flex items-center gap-1.5 bg-muted text-muted-foreground hover:text-foreground w-fit py-1 px-2.5 rounded-full text-[13px] font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                </svg>
                Email
              </Link>

              <Link
                href="https://www.linkedin.com/in/jadhavharsh"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 bg-muted text-muted-foreground hover:text-foreground w-fit py-1 px-2.5 rounded-full text-[13px] font-medium transition-colors"
              >
                <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2H3.5ZM4.74556 5.5C5.21057 5.5 5.5 5.16665 5.5 4.75006C5.49133 4.3241 5.21057 4 4.75438 4C4.29824 4 4 4.3241 4 4.75006C4 5.16665 4.28937 5.5 4.73687 5.5H4.74556ZM5.5 6.5V12H4V6.5H5.5ZM7 12H8.5V8.89479C8.5 8.89479 8.60415 7.78962 9.55208 7.78962C10.5 7.78962 10.5 9.02275 10.5 9.02275V12H12V8.8133C12 7.13837 11.25 6.5025 10.125 6.5025C9 6.5025 8.5 7.27778 8.5 7.27778V6.5025H7.00005C7.02383 7.01418 7 12 7 12Z" />
                </svg>
                LinkedIn
              </Link>

              <Link
                href="https://x.com/harshjdhv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 bg-muted text-muted-foreground hover:text-foreground w-fit py-1 px-2.5 rounded-full text-[13px] font-medium transition-colors"
              >
                <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z" />
                </svg>
                Twitter
              </Link>

              <Link
                href="https://github.com/harshjdhv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 bg-muted text-muted-foreground hover:text-foreground w-fit py-1 px-2.5 rounded-full text-[13px] font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
                </svg>
                GitHub
              </Link>
            </div>
          </header>
        </FadeIn>

        {/* -- Main Content Stream -- */}
        <div className="flex flex-col gap-10 sm:gap-12 pt-16">

          {/* 01. EXPERIENCE */}
          <FadeIn delay={0.1}>
            <section className="flex flex-col gap-6">
              <div className="font-mono-meta text-[11px] text-neutral-500 uppercase tracking-widest border-b border-dashed border-border/40 pb-2 w-full flex items-center gap-2">
                <span>Experience</span>
              </div>

              <div className="flex flex-col gap-5">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="group flex flex-col gap-1.5">
                    <div className="flex flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="font-sans text-[15.5px] sm:text-[16px]">
                        <span className="font-semibold text-foreground">{exp.company}</span>
                        <span className="text-muted-foreground mx-1.5">/</span>
                        <span className="text-muted-foreground">{exp.role}</span>
                      </div>
                      <div className="font-mono-meta text-[11.5px] text-neutral-500 flex items-center gap-1.5 shrink-0">
                        {exp.period.includes("Present") && <span className="pulse-dot" />}
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="font-sans text-[14.5px] sm:text-[15px] text-muted-foreground leading-[1.7] max-w-[65ch]">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 02. SELECTED WORK */}
          <FadeIn delay={0.2}>
            <section className="flex flex-col gap-6">
              <div className="font-mono-meta text-[11px] text-neutral-500 uppercase tracking-widest border-b border-dashed border-border/40 pb-2 w-full flex items-center gap-2">
                <span>Selected Work</span>
              </div>

              <div className="flex flex-col gap-5">
                {PROJECTS.map((project, i) => (
                  <Link key={i} href={project.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1.5">
                    <div className="flex flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="font-sans text-[15.5px] sm:text-[16px]">
                        <span className="font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{project.title}</span>
                        <span className="text-muted-foreground mx-1.5">/</span>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{project.type}</span>
                      </div>
                      <div className="font-mono-meta text-[11.5px] text-neutral-500 flex items-center gap-1.5 shrink-0">
                        <span className="group-hover:text-foreground transition-colors">{project.stack}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>
                    <p className="font-sans text-[14.5px] sm:text-[15px] text-muted-foreground leading-[1.7] max-w-[65ch]">
                      {project.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 03. OPEN SOURCE */}
          <FadeIn delay={0.3}>
            <section className="flex flex-col gap-6">
              <div className="font-mono-meta text-[11px] text-neutral-500 uppercase tracking-widest border-b border-dashed border-border/40 pb-2 w-full flex items-center gap-2">
                <span>Open Source</span>
              </div>

              <div className="flex flex-col gap-4">
                {PULL_REQUESTS.map((pr, i) => (
                  <Link key={i} href={pr.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1.5">
                    <div className="flex flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-3 font-sans text-[15.5px] sm:text-[16px]">
                        <GitPullRequest className="w-4 h-4 text-neutral-400 shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground group-hover:text-muted-foreground transition-colors">{pr.title}</span>
                          <span className="text-muted-foreground mx-1.5">/</span>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">{pr.description}</span>
                        </div>
                      </div>
                      <div className="font-mono-meta text-[11.5px] text-neutral-500 flex items-center gap-1.5 shrink-0">
                        <span className="group-hover:text-foreground transition-colors">{pr.pr}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 04. WRITING */}
          <FadeIn delay={0.4}>
            <section className="flex flex-col gap-6">
              <div className="font-mono-meta text-[11px] text-neutral-500 uppercase tracking-widest border-b border-dashed border-border/40 pb-2 w-full flex items-center gap-2">
                <span>Writing</span>
              </div>

              <div className="flex flex-col gap-6">
                <div className="group flex flex-col gap-1.5 cursor-not-allowed select-none">
                  <div className="flex flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 font-sans text-[15.5px] sm:text-[16px]">
                      <PenTool className="w-4 h-4 text-neutral-400 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                          Trust me, I&apos;ll write something soon
                        </span>
                      </div>
                    </div>
                    <div className="font-mono-meta text-[11.5px] text-neutral-500 flex items-center gap-1.5 shrink-0">
                      <span className="group-hover:text-foreground transition-colors">Soon™</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

        </div>

        {/* -- Footer -- */}
        <FadeIn delay={0.5}>
          <footer className="pt-10 flex flex-row items-center justify-between gap-4 font-sans text-[14px] opacity-60">
            <div className="flex items-center gap-3">
              <span className="font-mono-meta text-xs text-neutral-400">© {new Date().getFullYear()} Harsh Jadhav</span>
              <span className="text-neutral-300 dark:text-neutral-700 text-xs">·</span>
              <LocalTime />
            </div>
          </footer>
        </FadeIn>
        
        <div className="fixed top-8 right-8 z-50">
          <ModeToggle />
        </div>

          </div>
        </main>

        {/* Decorative Right Track */}
        <div 
          className="hidden lg:block w-[20px] xl:w-[32px] border-x border-dashed border-border shrink-0"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 8px)" }}
        />
      </div>
    </div>
  );
}
