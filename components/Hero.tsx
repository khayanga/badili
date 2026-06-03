// "use client";

// import { motion } from "framer-motion";
// import {
//   ChevronDown,
//   TrendingUp,
//   Palette,
//   Laptop,
//   Lightbulb,
// } from "lucide-react";
// import Container from "./Container";

// const avatars = [
//   { initials: "BG" },
//   { initials: "FF" },
//   { initials: "AK" },
//   { initials: "VG" },
// ];

// const orbitIcons = [
//   {
//     icon: TrendingUp,
//     label: "Growth",
//     pos: "top-[12%] left-1/2 -translate-x-1/2",
//   },
//   {
//     icon: Palette,
//     label: "Design",
//     pos: "top-1/2 right-[12%] -translate-y-1/2",
//   },
//   {
//     icon: Laptop,
//     label: "Build",
//     pos: "bottom-[12%] left-1/2 -translate-x-1/2",
//   },
//   {
//     icon: Lightbulb,
//     label: "Strategy",
//     pos: "top-1/2 left-[12%] -translate-y-1/2",
//   },
// ];

// const stats = [
//   {
//     label: "Brands grown",
//     value: "10+",
//     sub: "across East Africa",
//     pos: "top-[8%] left-[4%]",
//   },
//   {
//     label: "Industries",
//     value: "4+",
//     sub: "impact sectors",
//     pos: "top-[10%] right-[4%]",
//   },
//   {
//     label: "Purpose-driven",
//     value: "100%",
//     sub: "mission-led work",
//     pos: "bottom-[10%] left-[5%]",
//   },
//   {
//     label: "Planet",
//     value: "1",
//     sub: "worth protecting",
//     pos: "bottom-[8%] right-[4%]",
//   },
// ];

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: {
//     duration: 0.7,
//     delay,
//     ease: "easeOut",
//   },
// });

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-background pt-28 pb-20 lg:pt-42 lg:pb-28">
//       {/* ambient glow */}
//       <div className="pointer-events-none absolute top--30 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

//       <Container>
//         <div className="grid items-center gap-14 lg:grid-cols-2">
//           {/* ───────────────── LEFT ───────────────── */}
//           <div className="relative z-10">
//             {/* Eyebrow */}

//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
//                 <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
//                 Digital Agency · Nairobi
//               </div>

//             {/* Heading */}
//             <h1
//               className="max-w-2xl font-display text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.96] tracking-tight text-foreground"
//             >
//               We grow brands
//               <br />
//               <span className=" text-primary">
//                 that grow the planet.
//               </span>
//             </h1>

//             {/* Description */}
//             <p
//               className="mt-7 max-w-xl text-[1rem] leading-[1.9] text-muted-foreground"
//             >
//               Digital solutions for sustainable and impact-driven
//               businesses. We help brands strengthen visibility,
//               communicate value clearly, and scale confidently
//               across Africa.
//             </p>

//             {/* CTA */}
//             <div

//               className="mt-10 flex flex-wrap gap-4"
//             >
//               <a
//                 href="#work"
//                 className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
//               >
//                 See our work
//               </a>

//               <a
//                 href="#services"
//                 className="inline-flex items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
//               >
//                 Explore services
//               </a>
//             </div>

//             {/* Social proof */}
//             <div

//               className="mt-12 flex items-center gap-4"
//             >
//               {/* avatars */}
//               <div className="flex">
//                 {avatars.map((avatar, i) => (
//                   <div
//                     key={avatar.initials}
//                     className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-[11px] font-bold text-primary-foreground shadow-sm"
//                     style={{
//                       marginLeft: i === 0 ? 0 : "-10px",
//                       zIndex: avatars.length - i,
//                     }}
//                   >
//                     {avatar.initials}
//                   </div>
//                 ))}
//               </div>

//               <div className="text-sm text-muted-foreground">
//                 <span className="font-semibold text-foreground">
//                   8+
//                 </span>{" "}
//                 We transform across East Africa
//               </div>
//             </div>
//           </div>

//           <div

//             className="relative flex min-h-130 items-center justify-center rounded-4xl border border-border bg-card"
//           >
//             {/* grid overlay */}
//             <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]  opacity-[0.03]" />

//             {/* rings */}
//             {[220, 340, 460].map((size, i) => (
//               <div
//                 key={size}
//                 className="absolute rounded-full border border-dashed border-primary/15"
//                 style={{
//                   width: size,
//                   height: size,
//                   opacity: 1 - i * 0.25,
//                 }}
//               />
//             ))}

//             {/* center */}
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.5,
//                 ease: "easeOut",
//               }}
//               className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-primary/20 bg-primary shadow-[0_0_60px_hsl(var(--primary)/0.25)]"
//             >
//               <div className="text-center">
//                 <span className="block text-[13px] uppercase tracking-[0.18em] text-primary-foreground/70">
//                   Badiili
//                 </span>

//               </div>
//             </motion.div>

//             {/* orbit icons */}
//             {orbitIcons.map(({ icon: Icon, label, pos }, i) => (
//               <motion.div
//                 key={label}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.45,
//                   delay: 0.7 + i * 0.08,
//                 }}
//                 className={`absolute ${pos} z-20`}
//               >
//                 <div className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
//                   <Icon
//                     size={20}
//                     className="text-primary transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>
//               </motion.div>
//             ))}

//             {/* floating stats */}
//             {stats.map(({ label, value, sub, pos }, i) => (
//               <motion.div
//                 key={label}
//                 initial={{ opacity: 0, y: 14 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: 0.9 + i * 0.08,
//                 }}
//                 className={`absolute ${pos} rounded-2xl border border-border bg-card/80 px-4 py-3 backdrop-blur-xl`}
//               >
//                 <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
//                   {label}
//                 </p>

//                 <p className="font-display text-2xl font-black text-primary">
//                   {value}
//                 </p>

//                 <p className="text-[11px] text-muted-foreground">
//                   {sub}
//                 </p>
//               </motion.div>
//             ))}

//             {/* bottom indicator */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.5 }}
//               className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
//             >
//               <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
//                 scroll
//               </span>

//               <motion.div
//                 animate={{ y: [0, 5, 0] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 1.6,
//                   ease: "easeInOut",
//                 }}
//                 className="text-muted-foreground"
//               >
//                 <ChevronDown size={16} />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "./Container";
import Image from "next/image";

const avatars = [
  { initials: "BG" },
  { initials: "FF" },
  { initials: "AK" },
  { initials: "VG" },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    alt: "Sustainable green brand",
    className: "absolute top-8 left-10 w-[42%] h-[250px] rounded-[32px]",
    delay: 0.4,
  },
  {
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    alt: "Impact-driven marketing Africa",
    className: "absolute top-24 right-8 w-[38%] h-[220px] rounded-[32px]",
    delay: 0.55,
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    alt: "Digital creative strategy",
    className: "absolute bottom-10 left-20 w-[52%] h-[190px] rounded-[32px]",
    delay: 0.7,
  },
];

// Floating badge overlay
const badge = {
  text: "🌿 Sustainable Impact",
  sub: "Brands built for good",
  pos: "bottom-[28%] left-1/2 -translate-x-1/2",
  delay: 1.1,
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 lg:pt-42 lg:pb-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top--30 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ───────────────── LEFT ───────────────── */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Digital Agency · Nairobi
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl font-display text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.96] tracking-tight text-foreground">
              We grow brands
              <br />
              <span className="text-primary">that grow the planet.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-[1rem] leading-[1.9] text-muted-foreground">
              Digital solutions for sustainable and impact-driven businesses. We
              help brands strengthen visibility, communicate value clearly, and
              scale confidently across Africa.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
              >
                See our work
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-card px-6 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Explore services
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex">
                {avatars.map((avatar, i) => (
                  <div
                    key={avatar.initials}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-[11px] font-bold text-primary-foreground shadow-sm"
                    style={{
                      marginLeft: i === 0 ? 0 : "-10px",
                      zIndex: avatars.length - i,
                    }}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">8+</span> We
                transform across East Africa
              </div>
            </div>
          </div>

          {/* ───────────────── RIGHT — Image Collage ───────────────── */}
<div className="relative flex min-h-[560px] items-center justify-center">
  {/* Top image */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="absolute top-12 left-[12%] h-[250px] w-[240px] overflow-hidden rounded-[32px]"
  >
    <Image
      src="/hero2.jpg"
      alt=""
      fill
      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 240px"
      className="object-cover"
    />
  </motion.div>

  {/* Right image */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.55 }}
    className="absolute top-28 right-[8%] h-[230px] w-[210px] overflow-hidden rounded-[32px]"
  >
    <Image
      src="/hero1.jpg"
      alt=""
      fill
      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 35vw, 210px"
      className="object-cover"
    />
  </motion.div>

  {/* Bottom image */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
    className="absolute bottom-12 left-[8%] h-45 w-75 overflow-hidden rounded-4xl"
  >
    <Image
      src="/hero4.jpg"
      alt=""
      fill
      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 300px"
      className="object-cover"
    />
  </motion.div>

  

  

  {/* Small dots */}
  <div className="absolute right-10 top-24 h-3 w-3 rounded-full bg-violet-300" />
  <div className="absolute bottom-20 right-24 h-5 w-5 rounded-full bg-sky-200" />

  {/* Stars */}
  <div className="absolute left-[8%] top-[52%] text-green-400">
    ✦
  </div>

  <div className="absolute right-[22%] bottom-[28%] text-green-400">
    ✦
  </div>
</div>
        </div>
      </Container>
    </section>
  );
}
