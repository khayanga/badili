// // core-values.tsx
// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const values = [
//   {
//     num: "01",
//     title: "Purpose First, Always",
//     desc: "We build brands that matter. If it doesn't create impact, it's not for us.",
//     icon: "shield",
//   },
//   {
//     num: "02",
//     title: "Make It Make Sense",
//     desc: "Clarity over complexity. If people don't get it, it doesn't work.",
//     icon: "info",
//   },
//   {
//     num: "03",
//     title: "Creativity with Direction",
//     desc: "Bold ideas, never for the sake of it. Everything is intentional and built to drive results.",
//     icon: "star",
//   },
//   {
//     num: "04",
//     title: "Build, Test, Improve, Repeat",
//     desc: "Progress over perfection. We experiment, learn fast, and continuously refine.",
//     icon: "refresh",
//   },
//   {
//     num: "05",
//     title: "Design for Real People",
//     desc: "Not just aesthetics connection. We create experiences that resonate and move people to act.",
//     icon: "users",
//   },
//   {
//     num: "06",
//     title: "Growth Is the Goal",
//     desc: "For our clients, the planet, and ourselves. If it's not growing, we rethink it.",
//     icon: "trend",
//   },
// ];

// const icons: Record<string, React.ReactNode> = {
//   shield: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-3.5 h-3.5"
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//     </svg>
//   ),
//   info: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-3.5 h-3.5"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="M12 16v-4M12 8h.01" />
//     </svg>
//   ),
//   star: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-3.5 h-3.5"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   ),
//   refresh: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-3.5 h-3.5"
//     >
//       <polyline points="23 4 23 10 17 10" />
//       <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
//     </svg>
//   ),
//   users: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-3.5 h-3.5"
//     >
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//     </svg>
//   ),
//   trend: (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-3.5 h-3.5"
//     >
//       <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//       <polyline points="16 7 22 7 22 13" />
//     </svg>
//   ),
// };

// export default function CoreValues() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <section
//       id="values"
//       ref={ref}
//       className="relative px-[5%] py-32 bg-[#030c14] overflow-hidden"
//     >
     
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center max-w-lg mx-auto mb-20"
//       >
//         <div className="inline-flex items-center gap-2 text-[14px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-5">
//           <span className="w-7 h-px bg-cyan-400/50" />
//           Our Core Values
//           <span className="w-7 h-px bg-cyan-400/50" />
//         </div>
//         <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black text-slate-100 leading-[1.1] tracking-tight">
//           The principles that
//           <br />
//           <span className="text-cyan-400">drive our work</span>
//         </h2>
//         <p className="text-white/70 text-xl leading-[1.75] font-light mt-4">
//           Not buzzwords just genuine beliefs that shape every decision, project,
//           and partnership.
//         </p>
//       </motion.div>

//       {/* Mosaic grid */}
//       <div className="max-w-6xl mx-auto border border-cyan-500/10 rounded-2xl overflow-hidden">
//         <div className="grid grid-cols-1 sm:grid-cols-2">
//           {values.map((v, i) => (
//             <motion.div
//               key={v.num}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.06 * i }}
//               className="group relative p-9 border-b border-r border-cyan-500/8 hover:bg-cyan-500/5 transition-colors duration-300 overflow-hidden"
//               style={{
//                 borderRight: i % 2 === 1 ? "none" : undefined,
//                 borderBottom: i >= 4 ? "none" : undefined,
//               }}
//             >
//               {/* Accent bar */}
//               <div className="absolute top-0 left-0 w-0.5 h-0 bg-linear-to-b from-cyan-400 to-emerald-400 group-hover:h-full transition-all duration-350" />

//               <div className="text-[12px] font-bold tracking-[0.2em] text-cyan-400/50 font-mono group-hover:text-cyan-400 transition-colors mb-4">
//                 {v.num}
//               </div>
//               <div className="text-lg md:text-xl font-bold text-cyan-100/75 group-hover:text-slate-100 tracking-tight mb-3 transition-colors">
//                 {v.title}
//               </div>
//               <p className="text-md md:text-lg text-white/65 leading-[1.7] font-light">
//                 {v.desc}
//               </p>

//               <div className="absolute bottom-6 right-6 w-8 h-8 rounded-lg bg-cyan-500/6 border border-cyan-500/10 flex items-center justify-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
//                 {icons[v.icon]}
//               </div>
//             </motion.div>
//           ))}

//           {/* Value 07 — full width */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.42 }}
//             className="group relative col-span-2 p-9 hover:bg-cyan-500/5 transition-colors duration-300 overflow-hidden"
//           >
//             <div className="absolute top-0 left-0 w-0.5 h-0 bg-linear-to-b from-cyan-400 to-emerald-400 group-hover:h-full transition-all duration-350" />
//             <div className="flex items-center gap-16 flex-wrap">
//               <div>
//                 <div className="text-[12px] font-bold tracking-[0.2em] text-cyan-400/50 font-mono group-hover:text-cyan-400 transition-colors mb-4">
//                   07
//                 </div>
//                 <div className="text-lg md:text-xl font-bold text-cyan-100/75 group-hover:text-slate-100 tracking-tight mb-3 transition-colors">
//                   Keep It Human
//                 </div>
//                 <p className="text-md md:text-lg text-white/65 leading-[1.7] font-light max-w-xl">
//                   Collaborative, honest, and real. No jargon, no ego just good
//                   work and good people who care about what they're building.
//                 </p>
//               </div>
//               <div className="ml-auto flex items-center gap-3 shrink-0">
//                 <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/2 flex items-center justify-center text-cyan-400">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-5 h-5"
//                   >
//                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//                   </svg>
//                 </div>
//                 <div className="text-[13px] text-cyan-100/50 font-light leading-snug">
//                   The soul
//                   <br />
//                   of Badili
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom row */}
//       
//     </section>
//   );
// }


"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    num: "01",
    title: "Purpose First, Always",
    desc: "We build brands that matter. If it doesn't create impact, it's not for us.",
    icon: "shield",
  },
  {
    num: "02",
    title: "Make It Make Sense",
    desc: "Clarity over complexity. If people don't get it, it doesn't work.",
    icon: "info",
  },
  {
    num: "03",
    title: "Creativity with Direction",
    desc: "Bold ideas, never for the sake of it. Everything is intentional and built to drive results.",
    icon: "star",
  },
  {
    num: "04",
    title: "Build, Test, Improve, Repeat",
    desc: "Progress over perfection. We experiment, learn fast, and continuously refine.",
    icon: "refresh",
  },
  {
    num: "05",
    title: "Design for Real People",
    desc: "Not just aesthetics connection. We create experiences that resonate and move people to act.",
    icon: "users",
  },
  {
    num: "06",
    title: "Growth Is the Goal",
    desc: "For our clients, the planet, and ourselves. If it's not growing, we rethink it.",
    icon: "trend",
  },
];

export default function CoreValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="values"
      ref={ref}
      className="relative px-[5%] py-24 sm:py-32 bg-[#030c14] overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0">
         <div className="absolute top--37.5px right--25 w-150 h-150 rounded-full bg-cyan-600/9 blur-[140px] pointer-events-none" />
      <div className="absolute bottom--12.5px left-[5%] w-100 h-100 rounded-full bg-emerald-500/6 blur-[120px] pointer-events-none" />

      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-lg mx-auto mb-16 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 text-[14px] tracking-[0.25em] uppercase text-cyan-400 mb-5">
          <span className="w-6 h-px bg-cyan-400/50" />
          Our Core Values
          <span className="w-6 h-px bg-cyan-400/50" />
        </div>

        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight">
          The principles that
          <br />
          <span className="text-cyan-400">drive our work</span>
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-4">
          Not buzzwords, just genuine beliefs that shape every decision,
          project, and partnership.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="relative z-10 max-w-6xl mx-auto border border-cyan-500/10 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="group relative p-6 sm:p-8 border-b border-cyan-500/10 sm:border-r hover:bg-cyan-500/5 transition"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-0.5 h-0 bg-linear-to-b from-cyan-400 to-cyan-600 group-hover:h-full transition-all duration-300" />

              <div className="text-[11px] tracking-[0.2em] text-cyan-400/50 font-mono mb-3">
                {v.num}
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {v.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}

          {/* VALUE 07 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="group relative sm:col-span-2 p-6 sm:p-8 hover:bg-cyan-500/5 transition"
          >
            <div className="absolute top-0 left-0 w-0.5 h-0 bg-linear-to-b from-cyan-400 to-cyan-600 group-hover:h-full transition-all duration-300" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <div className="text-[11px] tracking-[0.2em] text-cyan-400/50 font-mono mb-3">
                  07
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Keep It Human
                </h3>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
                  Collaborative, honest, and real. No jargon, no ego just good work and good people.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/10 flex items-center justify-center text-cyan-400">
                  ❤️
                </div>
                <div className="text-xs text-cyan-100/50 leading-snug">
                  The soul
                  <br />
                  of Badili
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM */}
      
    </section>
  );
}
