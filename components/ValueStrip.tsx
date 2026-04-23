"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { num: "5", label: "Service Areas" },
  { num: "360°", label: "Brand Coverage" },
  { num: "1", label: "Mission: Planet Growth" },
  { num: "∞", label: "Impact Potential" },
];

export default function ValuesStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-gradient-to-r from-[rgba(30,143,255,0.08)] to-[rgba(15,212,176,0.05)] border-y border-[rgba(255,255,255,0.09)] px-[5%] py-14"
    >
      <div className="flex flex-wrap">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex-1 min-w-[200px] px-8 py-6 ${
              i < stats.length - 1 ? "border-r border-[rgba(255,255,255,0.09)]" : ""
            }`}
          >
            <div className="font-[family-name:var(--font-display)] text-[2.2rem] font-extrabold gradient-text leading-none">
              {s.num}
            </div>
            <div className="text-[0.875rem] text-[#8ab3d4] mt-1.5 font-light">{s.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}