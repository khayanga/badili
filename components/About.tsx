"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { label: "Strategy", pct: 95 },
  { label: "Design", pct: 90 },
  { label: "Technology", pct: 85 },
];

export default function About() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-background px-[5%] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-125 w-125 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-10%] left-[10%] h-87.5 w-87.5 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary/40" />
            About Badiili
          </div>

          {/* Title */}
          <h2 className="font-heading text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] text-foreground">
            Built for a new kind
            <br />
            of{" "}
            <span className=" text-primary">
              business
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="mt-7 space-y-5">
            <p className="text-base leading-[1.9] text-muted-foreground sm:text-lg">
              Badili is a digital marketing agency built for businesses
              driven by purpose, sustainability, and impact. We work
              with brands solving real problems but struggling to
              communicate their value and scale their reach.
            </p>

            <p className="text-base leading-[1.9] text-muted-foreground sm:text-lg">
              We combine digital strategy, design, and technology to
              help purpose-driven businesses grow, stand out, and
              connect with the audiences that matter.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-10 rounded-r-2xl border border-border bg-card px-6 py-6 shadow-sm">
            <div className="mb-4 h-1 w-14 rounded-full bg-primary" />

            <p className="font-heading text-xl leading-relaxed text-foreground sm:text-2xl">
              “When the right brands grow,
              <br />
              the world moves forward with them.”
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="grid grid-cols-2 gap-4"
        >
          
         

          
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-primary/5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>

            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/60">
              Services
            </p>

            <p className="text-3xl font-bold tracking-tight text-foreground">
              3+
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Growth pillars
            </p>
          </div>

          {/* Commitment */}
          <div className="rounded-3xl border border-border bg-primary/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/60">
              Commitment
            </p>

            <p className="text-2xl font-bold leading-tight text-primary">
              Impact
              <br />
              First
            </p>
          </div>

          {/* Bottom Row */}
          <div className="col-span-2 flex flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-card px-6 py-6 shadow-sm sm:flex-row sm:items-center">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Helping sustainable brands
              <br />
              communicate & scale
            </p>

            <div className="rounded-full bg-primary px-5 py-4">
              <p className="font-heading text-lg text-primary-foreground">
                Badiili
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}