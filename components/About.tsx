// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const skills = [
//   { label: "Strategy", pct: 95 },
//   { label: "Design", pct: 90 },
//   { label: "Technology", pct: 85 },
// ];

// export default function About() {
//   const ref = useRef(null);

//   const inView = useInView(ref, {
//     once: true,
//     margin: "-80px",
//   });

//   return (
//     <section
//       id="about"
//       ref={ref}
//       className="relative overflow-hidden bg-background px-[5%] py-24 sm:py-32"
//     >
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute right-[-10%] top-[-10%] h-125 w-125 rounded-full bg-primary/10 blur-3xl" />

//         <div className="absolute bottom-[-10%] left-[10%] h-87.5 w-87.5 rounded-full bg-primary/5 blur-3xl" />
//       </div>

//       <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.7 }}
//         >
//           {/* Label */}
//           <div className="mb-6 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-primary">
//             <span className="h-px w-8 bg-primary/40" />
//             About Badiili
//           </div>

//           {/* Title */}
//           <h2 className="font-heading text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] text-foreground">
//             Built for a new kind
//             <br />
//             of{" "}
//             <span className=" text-primary">
//               business
//             </span>
//           </h2>

//           {/* Paragraphs */}
//           <div className="mt-7 space-y-5">
//             <p className="text-base leading-[1.9] text-muted-foreground sm:text-lg">
//               Badili is a digital marketing agency built for businesses
//               driven by purpose, sustainability, and impact. We work
//               with brands solving real problems but struggling to
//               communicate their value and scale their reach.
//             </p>

//             <p className="text-base leading-[1.9] text-muted-foreground sm:text-lg">
//               We combine digital strategy, design, and technology to
//               help purpose-driven businesses grow, stand out, and
//               connect with the audiences that matter.
//             </p>
//           </div>

                   
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{
//             duration: 0.8,
//             delay: 0.2,
//           }}
//           className="grid grid-cols-2 gap-4"
//         >
//           <div className="mt-10 rounded-r-2xl border border-border bg-card px-6 py-6 shadow-sm">
//             <div className="mb-4 h-1 w-14 rounded-full bg-primary" />

//             <p className="font-heading text-xl leading-relaxed text-foreground sm:text-2xl">
//               “When the right brands grow,
//               <br />
//               the world moves forward with them.”
//             </p>
//           </div>
         
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    label: "Brands Supported",
    value: "8+",
  },
  {
    label: "Impact Sectors",
    value: "4+",
  },
  {
    label: "Growth Focus",
    value: "100%",
  },
];

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
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[5%] h-[320px] w-[320px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(currentColor 0.5px, transparent 0.5px),
              linear-gradient(90deg, currentColor 0.5px, transparent 0.5px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* label */}
          <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            <span className="h-px w-8 bg-primary/40" />
            About Badiili
          </div>

          {/* title */}
          <h2 className="max-w-2xl font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.02] tracking-tight text-foreground">
            Built for businesses
            <br />
            creating a more
            <br />
            <span className="text-primary">
              sustainable future.
            </span>
          </h2>

          {/* text */}
          <div className="mt-8 max-w-2xl space-y-6">
            <p className="text-base leading-[1.9] text-muted-foreground sm:text-lg">
              Badiili is a digital agency helping purpose-driven
              brands grow through strategy, design, technology,
              and intelligent marketing systems.
            </p>

            <p className="text-base leading-[1.9] text-muted-foreground sm:text-lg">
              We partner with businesses solving real-world
              challenges — helping them strengthen visibility,
              communicate value clearly, and scale with confidence.
            </p>
          </div>

          {/* stats */}
          <div className="mt-10 flex flex-wrap gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-primary/5"
              >
                <p className="text-2xl font-black text-primary">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative"
        >
          {/* glow */}
          <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            {/* top line */}
            <div className="mb-8 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Our Approach
              </div>

              <div className="h-px w-20 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            {/* quote */}
            <p className="font-heading text-2xl leading-[1.5] text-foreground sm:text-3xl">
              “When the right brands grow,
              the world moves forward
              with them.”
            </p>

            {/* divider */}
            <div className="my-8 h-px bg-border" />

            {/* skills */}
            {/* <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.label}
                    </span>

                    <span className="text-sm text-muted-foreground">
                      {skill.pct}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? { width: `${skill.pct}%` }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        delay: 0.4,
                      }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div> */}

            {/* bottom card */}
            <div className="mt-10 rounded-2xl border border-primary/10 bg-primary/5 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Combining creativity, AI-powered systems,
                strategic thinking, and modern technology to
                help sustainable brands scale their impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}