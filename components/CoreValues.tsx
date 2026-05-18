"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    num: "01",
    title: "Purpose First, Always",
    desc: "We build brands that matter. If it doesn't create impact, it's not for us.",
  },
  {
    num: "02",
    title: "Make It Make Sense",
    desc: "Clarity over complexity. If people don't get it, it doesn't work.",
  },
  {
    num: "03",
    title: "Creativity with Direction",
    desc: "Bold ideas, never for the sake of it. Everything is intentional and built to drive results.",
  },
  {
    num: "04",
    title: "Build, Test, Improve, Repeat",
    desc: "Progress over perfection. We experiment, learn fast, and continuously refine.",
  },
  {
    num: "05",
    title: "Design for Real People",
    desc: "Not just aesthetics connection. We create experiences that resonate and move people to act.",
  },
  {
    num: "06",
    title: "Growth Is the Goal",
    desc: "For our clients, the planet, and ourselves. If it's not growing, we rethink it.",
  },
];

export default function CoreValues() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <section
      id="values"
      ref={ref}
      className="relative overflow-hidden bg-background px-[5%] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-10%] left-[5%] h-[350px] w-[350px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mb-20 max-w-2xl text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-6 bg-primary/40" />
          Our Core Values
          <span className="h-px w-6 bg-primary/40" />
        </div>

        <h2 className="font-heading text-[clamp(2rem,4vw,3.4rem)] leading-tight text-foreground">
          The principles that
          <br />
          <span className="italic text-primary">
            drive our work
          </span>
        </h2>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Not buzzwords — just genuine beliefs that shape every decision,
          project, and partnership.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.06 * i,
              }}
              className="group relative border-border p-7 transition-all duration-300 hover:bg-primary/5 sm:p-9"
            >
              {/* Borders */}
              <div className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />

              {/* Horizontal borders */}
              <div className="absolute bottom-0 left-0 h-px w-full bg-border" />

              {/* Vertical borders */}
              {i % 2 === 0 && (
                <div className="absolute right-0 top-0 hidden h-full w-px bg-border sm:block" />
              )}

              <div className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-primary/50">
                {v.num}
              </div>

              <h3 className="mb-3 font-heading text-xl text-foreground transition-colors group-hover:text-primary">
                {v.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {v.desc}
              </p>
            </motion.div>
          ))}

          {/* Final Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.42,
            }}
            className="group relative sm:col-span-2"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />

            <div className="flex flex-col gap-8 p-7 transition-all duration-300 hover:bg-primary/5 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <div className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-primary/50">
                  07
                </div>

                <h3 className="mb-3 font-heading text-2xl text-foreground group-hover:text-primary">
                  Keep It Human
                </h3>

                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Collaborative, honest, and real. No jargon, no ego —
                  just good work and good people who care about what
                  they’re building.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                  ❤️
                </div>

                <div className="text-sm leading-tight text-muted-foreground">
                  The soul
                  <br />
                  of Badili
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}