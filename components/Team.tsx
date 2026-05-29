
"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Team() {
  return (
    <section id="team" className="relative bg-background overflow-hidden px-[5%] py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[5%] h-70 w-70 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-20 max-w-6xl mx-auto">

        {/* LEFT COLUMN: CONTENT */}
        <div className="flex flex-col justify-center md:w-1/2">
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary/40" />
              Team
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h2 className="max-w-xl font-heading text-[clamp(2.3rem,4.5vw,3.5rem)] leading-[1.1] text-foreground">
              Building brands
              <br />
              with strategy,
              <br />
              <span className="text-primary">creativity & intelligence.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-7 max-w-xl text-base leading-[1.8] text-muted-foreground">
              We're creatives, strategists, and problem-solvers but above all,
              we're partners in building brands that matter.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-5 max-w-xl text-base leading-[1.8] text-muted-foreground">
              Our core strategy is driven by AI, data-driven marketing, trend
              intelligence, and top talent that delivers innovative, scalable,
              and growth-focused solutions.
            </p>
          </FadeUp>

          {/* Feature Pills */}
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {["AI Strategy", "Data Marketing", "Trend Intelligence"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/20 hover:bg-primary/5"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* RIGHT COLUMN: IMAGE CARD */}
        <FadeUp delay={0.15} className="w-full lg:w-auto mx-auto ">
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-sm transition-all duration-500 hover:shadow-md w-full lg:w-87.5">

            {/* Ambient glow behind card */}
            <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl pointer-events-none" />

            {/* Image wrapper */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-muted aspect-3/4">
              <Image
                src="/derrick.jpg"
                alt="Derrick Mboya"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Caption */}
            <div className="pt-5 pb-2 px-3">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Managing Director
              </div>
              <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                Derrick Mboya
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                Driving sustainable growth and future-ready branding across Africa.
              </p>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}