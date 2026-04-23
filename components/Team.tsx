// team.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    initials: "AM", name: "Amara Mbeki", role: "Founder & Strategy Lead",
    bio: "The visionary steering it all. Amara bridges business goals with impact turning purpose into scalable growth strategies.",
    tags: ["Strategy", "Growth", "Leadership"],
    color: "rgba(6,182,212,0.1)", textColor: "#22d3ee",
  },
  {
    initials: "KO", name: "Kofi Osei", role: "Creative Director",
    bio: "Kofi turns brand language into visual truth building identities that feel unmistakably yours and resonate at first glance.",
    tags: ["Branding", "Design", "Identity"],
    color: "rgba(6,182,212,0.1)", textColor: "#22d3ee",
  },
  {
    initials: "ZN", name: "Zara Nkosi", role: "Digital Marketing Lead",
    bio: "Data-driven and audience-obsessed. Zara crafts campaigns that don't just reach people they move them to act.",
    tags: ["SEO", "Paid Media", "Analytics"],
    color: "rgba(6,182,212,0.1)", textColor: "#22d3ee",
  },
  // {
  //   initials: "TM", name: "Taiwo Mensah", role: "Lead Developer",
  //   bio: "Taiwo builds the digital infrastructure brands grow on fast, clean, and engineered to convert.",
  //   tags: ["Web Dev",  "Performance"],
  //   color: "rgba(6,182,212,0.1)", textColor: "#22d3ee",
  // },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="team" ref={ref} className="relative px-[5%] py-32 bg-[#030c14] overflow-hidden">
      <div className="absolute -top-36 -right-20 w-150 h-150 rounded-full bg-cyan-600/9 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-[5%] w-100 h-100 rounded-full bg-emerald-500/6 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-18 gap-10 flex-wrap">
        <div>
          <div className="inline-flex items-center gap-2 text-[14px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">
            <span className="w-7 h-px bg-cyan-400/50" />Our Team
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black text-slate-100 leading-[1.1] tracking-tight">
            The people behind<br /><span className="text-cyan-400">every big idea</span>
          </h2>
        </div>
        <p className="max-w-xs md:text-end text-md md:text-lg text-white/70 text-base leading-relaxed font-light shrink-0">
          Creatives, strategists, and problem-solvers above all, partners in building brands that matter.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 * i }}
            className="group relative rounded-2xl p-8 bg-white/2 border border-cyan-500/10 hover:bg-cyan-500/5 hover:border-cyan-500/28 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0.5 h-0 bg-linear-to-b from-cyan-400 to-emerald-400 group-hover:h-full transition-all duration-350" />
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black mb-5 border"
              style={{ background: m.color, color: m.textColor, borderColor: m.textColor + "33" }}
            >
              {m.initials}
            </div>
            <div className="text-[1.05rem] font-bold text-cyan-100/80 group-hover:text-slate-100 tracking-tight mb-1 transition-colors">{m.name}</div>
            <div className="text-[12px] font-bold tracking-[0.18em] uppercase mb-4" style={{ color: m.textColor, opacity: 0.7 }}>{m.role}</div>
            <p className="text-md md:text-lg text-white/65 leading-[1.7] font-light">{m.bio}</p>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {m.tags.map(t => (
                <span key={t} className="text-[10px] font-bold tracking-[0.12em] uppercase text-cyan-400/55 bg-cyan-500/7 border border-cyan-500/12 px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_100%_100%,rgba(6,182,212,0.07),transparent_70%)] pointer-events-none" />
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}