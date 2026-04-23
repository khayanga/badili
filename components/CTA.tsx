// cta.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const proofPoints = [
  {
    icon: "users",
    text: "100% purpose-driven client portfolio—we only work with brands we believe in",
  },
  {
    icon: "trend",
    text: "Strategy, design & tech under one roof—no juggling multiple agencies",
  },
  {
    icon: "check",
    text: "We respond within 24 hours—no ghosting, no runaround",
    emerald: true,
  },
];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name) newErrors.name = true;
    if (!form.email) newErrors.email = true;
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-[5%] py-32 bg-[#010d14] overflow-hidden"
    >
      <div className="absolute -top-48 -left-48 w-175 h-175 rounded-full bg-cyan-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-100 h-100 rounded-full bg-emerald-500/7 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 text-[14px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-5">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> */}
            Ready to grow?
          </div>
          <h2 className="text-[clamp(2rem,3.8vw,3.4rem)]  text-slate-100 leading-[1.08] tracking-tight mb-5">
            Let's build something
            <br />
            <span className="text-cyan-400">the world</span> can be
            <br />
            proud of
          </h2>
          <p className=" text-md md:text-xl text-white/70 leading-[1.8] font-light mb-10 max-w-md">
            Your purpose-driven brand deserves a partner who understands that
            growth and impact aren't opposites they're the same thing.
          </p>
          <div className="flex flex-col gap-4">
            {[
              "100% purpose-driven portfolio we only work with brands we believe in",
              "Strategy, design & tech under one roof no juggling agencies",
              "We respond within 24 hours no ghosting, no runaround",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                {/* ICON */}
                <div className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                {/* TEXT */}
                <p className="text-md text-white/70 font-light leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-10">
            <a
              href="mailto:hello@badili.africa"
              className="text-[0.82rem] text-cyan-400/60 font-semibold border-b border-cyan-400/20 pb-0.5 hover:text-cyan-400 transition-colors"
            >
              hello@badili.africa
            </a>
            <span className="text-cyan-100/15">·</span>
            <a
              href="#services"
              className="text-[0.82rem] text-cyan-400/60 font-semibold border-b border-cyan-400/20 pb-0.5 hover:text-cyan-400 transition-colors"
            >
              View our services
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="relative rounded-2xl p-10 bg-white/2 border border-cyan-500/12 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_100%_100%,rgba(6,182,212,0.07),transparent_70%)] pointer-events-none" />

            {!sent ? (
              <>
                <div className="mb-7">
                  <h3 className="text-[1.2rem] font-black text-cyan-100/85 mb-1.5 tracking-tight">
                    Start the conversation
                  </h3>
                  <p className="text-[1rem] text-white/70 font-light">
                    Tell us about your brand and what you're trying to build
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {["name", "email"].map((field) => (
                      <div key={field} className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-cyan-400/70">
                          {field === "name" ? "Your name" : "Email"}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          placeholder={
                            field === "name" ? "Amara Osei" : "you@brand.com"
                          }
                          value={form[field as keyof typeof form]}
                          onChange={(e) => {
                            setForm({ ...form, [field]: e.target.value });
                            setErrors({ ...errors, [field]: false });
                          }}
                          className={`bg-white/3 border rounded-xl px-3.5 py-2.5 text-cyan-100/80 text-[0.875rem] font-light placeholder:text-cyan-100/18 outline-none transition-colors ${errors[field] ? "border-red-500/50" : "border-cyan-500/12 focus:border-cyan-500/38 focus:bg-cyan-500/4"}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-cyan-400/50">
                      Brand / Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your brand name"
                      value={form.brand}
                      onChange={(e) =>
                        setForm({ ...form, brand: e.target.value })
                      }
                      className="bg-white/3 border border-cyan-500/12 focus:border-cyan-500/38 focus:bg-cyan-500/4 rounded-xl px-3.5 py-2.5 text-cyan-100/80 text-[0.875rem] font-light placeholder:text-cyan-100/18 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-cyan-400/50">
                      What do you need help with?
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="bg-[#0d1b2a] border border-cyan-500/12 focus:border-cyan-500/38 rounded-xl px-3.5 py-2.5 text-cyan-100/70 text-[0.875rem] font-light outline-none transition-colors"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {[
                        "Digital Marketing (Badili Grow)",
                        "Branding & Design (Badili Studio)",
                        "Print & Collateral (Badili Print)",
                        "Web Design & Development (Badili Build)",
                        "Consulting & Training (Badili Consult)",
                        "Not sure yet — I need guidance",
                      ].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-cyan-400/50">
                      Tell us more
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What's your biggest challenge right now?"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="bg-white/3 border border-cyan-500/12 focus:border-cyan-500/38 focus:bg-cyan-500/4 rounded-xl px-3.5 py-2.5 text-cyan-100/80 text-[0.875rem] font-light placeholder:text-cyan-100/18 outline-none resize-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-60 text-white text-[0.9rem] font-black tracking-wide rounded-xl flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send message 
                      </>
                    )}
                  </button>
                  <p className="text-center text-[0.85rem] text-white/65 font-light">
                    No commitment required. We reply within 24 hours.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[1.1rem] font-black text-cyan-100/85 mb-2">
                  Message sent!
                </h3>
                <p className="text-[0.875rem] text-cyan-100/35 font-light leading-relaxed">
                  We'll be in touch within 24 hours.
                  <br />
                  Check your inbox for a confirmation.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
