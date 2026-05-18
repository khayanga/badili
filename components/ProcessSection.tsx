"use client";

import { useEffect, useState } from "react";
import {
  Eye,
  LayoutGrid,
  TrendingUp,
  Rocket,
  Users,
  Lightbulb,
  Handshake,
  Monitor,
  ArrowRight,
} from "lucide-react";

import FadeUp from "./FadeUp";

// ─────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────

const steps = [
  {
    id: 1,
    phase: "Visibility",
    title: "Low visibility, high impact",
    desc: "Helping sustainable businesses communicate their value and increase visibility so the right audiences can finally discover them.",
    icon: Eye,
  },
  {
    id: 2,
    phase: "Structure",
    title: "From project to business",
    desc: "Transforming ideas and initiatives into structured, revenue-generating systems with clear positioning and infrastructure.",
    icon: LayoutGrid,
  },
  {
    id: 3,
    phase: "Scale",
    title: "Scaling green businesses",
    desc: "Building digital systems, strategic branding, and communication frameworks that support long-term growth.",
    icon: TrendingUp,
  },
  {
    id: 4,
    phase: "Launch",
    title: "Product launches",
    desc: "Designing launch systems and go-to-market strategies that increase adoption and create momentum.",
    icon: Rocket,
  },
  {
    id: 5,
    phase: "Engage",
    title: "Engagement & adoption",
    desc: "Creating campaigns and experiences that drive community participation and behavioural adoption.",
    icon: Users,
  },
  {
    id: 6,
    phase: "Lead",
    title: "Thought leadership",
    desc: "Helping organisations become visible industry voices through strategic storytelling and communication.",
    icon: Lightbulb,
  },
  {
    id: 7,
    phase: "Fund",
    title: "Partnership & funding",
    desc: "Crafting compelling positioning and investor-facing systems that attract partnerships and funding.",
    icon: Handshake,
  },
  {
    id: 8,
    phase: "Transform",
    title: "Digital transformation",
    desc: "Implementing digital platforms, automation, and operational systems that scale impact-driven brands.",
    icon: Monitor,
  },
];

// ─────────────────────────────────────────────────────────
// Card
// ─────────────────────────────────────────────────────────

function ProcessCard({
  step,
  active,
  onClick,
  align,
}: {
  step: (typeof steps)[0];
  active: boolean;
  onClick: () => void;
  align: "left" | "right";
}) {
  const Icon = step.icon;

  return (
    <div
      className={`relative flex ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {/* connector line */}
      <div
        className="hidden lg:block absolute top-1/2 border-dashed border-[var(--border)]"
        style={{
          width: "70px",
          borderTopWidth: "1px",
          left: align === "left" ? "100%" : "auto",
          right: align === "right" ? "100%" : "auto",
        }}
      />

      <button
        onClick={onClick}
        className={`group relative w-full max-w-97.5 overflow-hidden rounded-[1.75rem] border text-left transition-all duration-500
        ${
          active
            ? "border-var(--accent)/30 scale-[1.01]"
            : "border-border hover:border-var(--accent)]/20"
        }`}
        style={{
          background: "var(--surface)",
        }}
      >
        {/* subtle glow */}
        <div className="absolute inset-0 bg-cyan-500/[0.03]" />

        <div className="relative z-10 p-5">
          {/* top */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
                ${
                  active
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-[var(--surface2)] text-[var(--accent)] border border-[var(--border)]"
                }`}
              >
                <Icon size={20} />
              </div>

              {/* phase */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--accent)] mb-1">
                  {step.phase}
                </p>

                <div
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    background: "var(--surface2)",
                    color: "var(--text2)",
                    border: "1px solid var(--border)",
                  }}
                >
                  Step 0{step.id}
                </div>
              </div>
            </div>

            {/* arrow */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
              ${
                active
                  ? "bg-cyan-500 text-white"
                  : "bg-[var(--surface2)] text-[var(--text3)] border border-[var(--border)]"
              }`}
            >
              <ArrowRight size={15} />
            </div>
          </div>

          {/* title */}
          <h3 className="text-[1.15rem] font-bold leading-tight text-[var(--text)] mb-3">
            {step.title}
          </h3>

          {/* desc */}
          <p className="text-sm leading-relaxed text-[var(--text2)]">
            {step.desc}
          </p>
        </div>
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────

export default function ProcessSection() {
  const [activeId, setActiveId] = useState(1);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 px-[5%] bg-[var(--background)]"
    >
      {/* ambient glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto ">
        {/* header */}
        <FadeUp>
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-bold text-[var(--accent)] mb-4">
            <span className="w-8 h-px bg-[var(--accent)]/50" />
            Our Process
          </div>
        </FadeUp>


        <div className=" p-4 flex flex-col justify-between md:flex-row md:items-center gap-5 mb-12">
          <FadeUp delay={0.05}>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)]  md:max-w-md font-black leading-[1] tracking-tight text-[var(--text)] mb-5">
            
            
            
            <span className="text-cyan-400">
              Design. Deploy. Grow.
            </span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="md:max-w-sm text-base md:text-lg leading-relaxed md:text-right mb-14">
            A strategic workflow designed to help sustainable and impact-driven
            organisations strengthen visibility, build scalable systems, and
            create measurable growth.
          </p>
        </FadeUp>

        </div>

        

        

        {/* timeline */}
        <div className="relative">
          {/* center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border)] -translate-x-1/2" />

          <div className="space-y-5">
            {steps.map((step, index) => (
              <FadeUp key={step.id} delay={index * 0.04}>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
                  {/* left */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:pr-10" : "lg:opacity-0"
                    }`}
                  >
                    {index % 2 === 0 && (
                      <ProcessCard
                        step={step}
                        active={activeId === step.id}
                        onClick={() => setActiveId(step.id)}
                        align="left"
                      />
                    )}
                  </div>

                  {/* center node */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-[var(--background)] transition-all duration-300
                      ${
                        activeId === step.id
                          ? "bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                          : "bg-[var(--surface2)]"
                      }`}
                    />
                  </div>

                  {/* right */}
                  <div
                    className={`${
                      index % 2 !== 0 ? "lg:pl-10" : "lg:opacity-0"
                    }`}
                  >
                    {index % 2 !== 0 && (
                      <ProcessCard
                        step={step}
                        active={activeId === step.id}
                        onClick={() => setActiveId(step.id)}
                        align="right"
                      />
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}