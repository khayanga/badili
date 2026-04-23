
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Badili Grow", href: "#services", pill: "Growth" },
    { label: "Badili Studio", href: "#services" },
    { label: "Badili Print", href: "#services" },
    { label: "Badili Build", href: "#services" },
    { label: "Badili Consult", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Values", href: "#values" },
    { label: "Our Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "hello@badili.africa", href: "mailto:hello@badili.africa", email: true },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#020b10] px-[5%] pt-16 pb-0 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute top--50px right--25px w-125 h-125 rounded-full bg-cyan-600/7 blur-[140px] pointer-events-none" />
      <div className="absolute bottom--25 left-[10%] w-87.5 h-87.5 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Top grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-cyan-500/8">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="inline-flex items-center text-[1.5rem] font-black tracking-tight text-slate-100 no-underline mb-4"
          >
            Ba<span className="text-cyan-400">dili</span>
            <span className="inline-block w-1.25 h-1.25 rounded-full bg-emerald-400 mb-0.5 ml-1" />
          </Link>
          <p className="text-[0.875rem] text-cyan-100/35 font-light leading-[1.7] max-w-55 mb-6">
            Digital solutions for purpose-driven businesses. We grow brands that grow the planet.
          </p>

          {/* Social icons */}
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-[10px] bg-white/2 border border-cyan-500/10 flex items-center justify-center text-cyan-100/40 hover:text-cyan-400 hover:bg-cyan-500/8 hover:border-cyan-500/28 transition-all duration-200 no-underline"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-cyan-100/25 mb-5">
              {title}
            </h4>
            <ul className="list-none space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`inline-flex items-center gap-2 text-[0.875rem] font-light no-underline transition-colors duration-200 hover:text-slate-100 ${
                      "email" in l && l.email ? "text-cyan-500/55 hover:text-cyan-400" : "text-cyan-100/38"
                    }`}
                  >
                    {l.label}
                    {"pill" in l && l.pill && (
                      <span className="text-[9px] font-bold tracking-widest uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/2 px-1.5 py-px rounded-full">
                        {l.pill}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mid CTA strip */}
      <div className="relative z-10 flex items-center justify-between gap-6 py-9 border-b border-cyan-500/8 flex-wrap">
        <p className="text-[1.02rem] font-semibold text-cyan-100/55 leading-snug">
          Ready to grow your brand?{" "}
          <span className="text-cyan-400">Let's build something the world can be proud of.</span>
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/8 border border-cyan-500/22 rounded-xl text-cyan-400 text-[0.85rem] font-bold tracking-wide no-underline hover:bg-cyan-500/14 transition-colors duration-200 shrink-0"
        >
          Start a project →
        </a>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex items-center justify-between gap-4 py-5 flex-wrap">
        <p className="text-[0.8rem] text-cyan-100/20 font-light">
          © 2025 <strong className="text-cyan-400 font-bold">Badili</strong>. All rights reserved.
        </p>

        <div className="inline-flex items-center gap-2 text-[0.8rem] text-cyan-100/18 font-light italic">
          <span className="inline-block w-2.5 h-2.5 rounded-full rounded-tr-none bg-emerald-400/60 rotate-45" />
          We grow brands that grow the planet
        </div>

        <div className="flex gap-5">
          {["Privacy", "Terms"].map((t) => (
            <a key={t} href="#" className="text-[0.78rem] text-cyan-100/18 font-light no-underline hover:text-cyan-100/45 transition-colors">
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}