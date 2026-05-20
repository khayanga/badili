"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden px-[5%] py-24 sm:py-32"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[10%] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[5%] h-70 w-70 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        
        <div>
          <FadeUp>
            <div className="mb-6 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary/40" />
            Team
          </div>

          </FadeUp>

          <FadeUp delay={0.05}>
            <h2 className="max-w-xl font-heading text-[clamp(2.3rem,5vw,4rem)] leading-[1.05] text-foreground">
              Building brands
              <br />
              with strategy,
              <br />
              <span className="text-primary">
                creativity & intelligence.
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-7 max-w-xl text-base leading-[1.9] text-muted-foreground sm:text-lg">
              We’re creatives, strategists, and problem-solversbut above
              all, we’re partners in building brands that matter.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-5 max-w-xl text-base leading-[1.9] text-muted-foreground sm:text-lg">
              Our core strategy is driven by AI, data-driven marketing,
              trend intelligence, and the acquisition of top talent to
              deliver innovative, scalable, and growth-focused solutions
              for purpose-driven organisations.
            </p>
          </FadeUp>

          {/* feature pills */}
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "🔵 AI Strategy",
                "📊 Data-driven Marketing",
                "📈 Trend Intelligence",
                "💡 Creative Innovation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5 hover:text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* RIGHT IMAGE CARD */}
        <FadeUp delay={0.15}>
          <div className="relative">
            {/* ambient glow */}
            <div className="absolute inset-0 rounded-4xl bg-primary/10 blur-2xl" />

            <div className="group relative overflow-hidden rounded-4xl bg-card shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(8,145,178,0.12)]">
              
              {/* image */}
              <div className="relative h-130 w-full overflow-hidden">
                <Image
                  src="/derrick.jpg"
                  alt="Managing Director"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center scale-[1.02] contrast-105 brightness-[1.02] 
                  transition-transform duration-700 group-hover:scale-105 height-auto width-auto"
                />

                {/* overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
              </div>

              {/* content overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Managing Director
                </div>

                <h3 className="mt-4 font-heading text-3xl font-bold text-foreground">
                  Derrick Mboya
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Leading the vision behind Badiili with a focus on
                  innovation, sustainable growth, and building
                  future-ready brands across Africa.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}