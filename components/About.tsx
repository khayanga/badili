
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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative px-[5%] py-36 bg-[#040f18] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-150 h-150 rounded-full bg-cyan-600/10 blur-[140px] -top-24 -right-24" />
        <div className="absolute w-100 h-100 rounded-full bg-cyan-500/6 blur-[120px] bottom-0 left-[10%]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
        {/* Text */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-3 text-[14px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-6">
            <span className="w-8 h-px bg-cyan-400" />
            About Badili
          </div>
          <h2 className="text-[clamp(2.2rem,3.5vw,3.2rem)] font-extrabold text-slate-100 leading-[1.1] tracking-tight mb-7">
            Built for a new kind<br />of <span className="text-cyan-400">business</span>
          </h2>
          <p className="text-white/70 text-md md:text-lg leading-[1.8] font-light mb-4">
            Badili is a digital marketing agency built for businesses driven by purpose, sustainability, and impact. We work with brands solving real problems but struggling to communicate their value and scale their reach.
          </p>
          <p className="text-white/70 text-md md:text-lg text-[1.02rem] leading-[1.8] font-light">
            We combine digital strategy, design, and technology to help purpose-driven businesses grow, stand out, and connect with the audiences that matter.
          </p>
          <div className="mt-10 pl-6 border-l-2 border-cyan-400/15 py-5 pr-7 bg-cyan-500/5 border  rounded-r-xl">
            <p className="text-lg text-slate-100 font-semibold leading-relaxed">
              "When the right brands grow,<br />the world moves forward with them."
            </p>
          </div>
          
        </motion.div>

        {/* Data visual */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-2 gap-3.5">
          {/* Main metric card */}
          <div className="col-span-2 flex items-center gap-6 rounded-2xl p-7 bg-linear-to-br from-cyan-500/10 to-emerald-500/5 border border-cyan-500/20">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/12 border border-cyan-500/2 flex items-center justify-center text-cyan-400 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400/65 mb-1">Growth Focus</p>
              <p className="text-3xl font-extrabold text-slate-100 tracking-tight leading-none">100%</p>
              <p className="text-[18px] text-white/70 mt-1 ">Purpose-driven client portfolio</p>
              <div className="mt-4 flex flex-col gap-2">
                {skills.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-[16px] text-white/70 mb-1 font-light"><span>{s.label}</span><span>{s.pct}%</span></div>
                    <div className="h-0.5 rounded-full bg-cyan-500/10 overflow-hidden">
                      <div className="h-full rounded-full bg-linear-to-r from-cyan-400 to-emerald-400" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services count */}
          <div className="rounded-2xl p-6 bg-white/2 border border-cyan-500/12 hover:bg-cyan-500/5 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/12 border border-cyan-500/15 flex items-center justify-center text-cyan-400 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400/55 mb-1">Services</p>
            <p className="text-3xl font-extrabold text-slate-100 tracking-tight">5+</p>
            <p className="text-lg text-white/70 mt-1 font-light">Growth pillars</p>
          </div>

          {/* Commitment */}
          <div className="rounded-2xl p-6 bg-cyan-500/3 border border-cyan-500/15 hover:bg-cyan-500/6 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center text-cyan-400 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400/60 mb-1">Commitment</p>
            <p className="text-lg font-extrabold text-cyan-300 tracking-tight leading-snug">Impact<br />First</p>
          </div>

          {/* Brand tagline row */}
          <div className="col-span-2 rounded-2xl px-6 py-5 bg-white/2 border border-cyan-500/10 flex items-center justify-between gap-4">
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Helping sustainable brands<br />communicate &amp; scale
            </p>
            <div className="bg-cyan-400 px-4 py-4 rounded-full" >
              <p className="text-lg text-gray-800 ">Badili</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}