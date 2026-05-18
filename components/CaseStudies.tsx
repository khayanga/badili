import FadeUp from "./FadeUp";


const cases = [
  {
    id: "badiili",
    initials: "B",
    gradient: "from-cyan-500 to-blue-600",
    brand: "Badiili Digital Marketing Agency",
    location: "Nairobi",
    industry: "Digital Marketing",
    services: ["Brand Strategy", "Web Design", "Growth Marketing"],
    description:
      "A strategic branding and digital growth agency helping sustainable, agricultural, and impact-driven businesses communicate their value, strengthen visibility, and scale their impact.",
    outcome: "Stronger digital positioning",
  },
  {
    id: "futurefarms",
    initials: "FF",
    gradient: "from-green-500 to-lime-500",
    brand: "Future Farms Initiative",
    location: "Nairobi",
    industry: "Agriculture & Agritech",
    services: ["Branding", "Digital Strategy"],
    description:
      "Positioned a future-focused agricultural innovation platform through modern branding, storytelling, and digital communication systems.",
    outcome: "Innovation-driven brand identity",
  },
  {
    id: "aysha",
    initials: "AK",
    gradient: "from-cyan-500 to-sky-500",
    brand: "Aysha Kiu Maji Safi",
    location: "Mombasa",
    industry: "Clean Water Solutions",
    services: ["Brand Identity", "Marketing"],
    description:
      "Developed a clean and community-focused identity for a sustainable water refill initiative reducing plastic waste across communities.",
    outcome: "Community-centered visibility",
  },
  {
    id: "versatile",
    initials: "VG",
    gradient: "from-lime-500 to-green-600",
    brand: "Versatile Growers",
    location: "Kajiado",
    industry: "Farming",
    services: ["Branding", "Content"],
    description:
      "Built a modern agricultural brand presence focused on sustainability, reliability, and stronger market trust.",
    outcome: "Stronger market positioning",
  },
  {
    id: "shambany",
    initials: "SB",
    gradient: "from-blue-500 to-cyan-600",
    brand: "Shambany by Arbarne",
    location: "Kenya",
    industry: "Agritech Platform",
    services: ["UI/UX", "Product Strategy"],
    description:
      "Designed and positioned a digital farm management platform helping farmers efficiently manage operations and planning.",
    outcome: "Improved digital experience",
  },
  {
    id: "fishbyadili",
    initials: "FA",
    gradient: "from-sky-500 to-cyan-700",
    brand: "Fish by Adili",
    location: "Kenya",
    industry: "Fish Processing",
    services: ["Brand Strategy", "Marketing"],
    description:
      "Created a trustworthy and modern brand direction for a sustainable fish processing and distribution company.",
    outcome: "Clear sustainability messaging",
  },
  {
    id: "greentalos",
    initials: "GL",
    gradient: "from-green-600 to-emerald-500",
    brand: "Greentalos Farm Logistics",
    location: "Kenya",
    industry: "Agri-Transport & Logistics",
    services: ["Digital Identity", "Strategy"],
    description:
      "Crafted a professional logistics identity helping farmers transport produce efficiently and access markets reliably.",
    outcome: "Farmer-focused logistics positioning",
  },
  {
    id: "afriponics",
    initials: "AC",
    gradient: "from-emerald-500 to-teal-500",
    brand: "Afriponics Cooperative",
    location: "Kenya",
    industry: "Agricultural Cooperative",
    services: ["Branding", "Communications"],
    description:
      "Supported a farmer-centered cooperative with branding and communication systems designed to improve visibility and trust.",
    outcome: "Enhanced cooperative visibility",
  },
];

// ─────────────────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.14em] font-semibold bg-cyan-500/10 dark:bg-cyan-500/10 bg-cyan-500/8 border border-cyan-500/15 text-cyan-700 dark:text-cyan-300 transition-colors">
      {children}
    </span>
  );
}

function Logo({
  initials,
  gradient,
  size = "md",
}: {
  initials: string;
  gradient: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "w-9 h-9 text-xs rounded-xl",
    md: "w-11 h-11 text-sm rounded-2xl",
    lg: "w-14 h-14 text-lg rounded-2xl",
  };

  return (
    <div
      className={`${sizes[size]} bg-linear-to-br ${gradient} flex items-center justify-center font-black text-white shadow-lg shadow-cyan-500/10`}
    >
      {initials}
    </div>
  );
}



export default function CaseStudies() {
  return (
    <section
      id="work"
      className="relative py-32 px-[5%] overflow-hidden bg-white dark:bg-[#030b11] transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.24em] uppercase text-primary mb-5">
            <span className="w-8 h-px bg-cyan-500/60" />
            Selected Work
          </div>
        </FadeUp>

        <div className=" p-4 flex flex-col justify-between md:flex-row md:items-center gap-5 mb-12">
          <FadeUp delay={0.05}>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white mb-5">
              Real brands.
              <br />
              <span className="text-primary">Real impact.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-md text-lg text-slate-600 dark:text-white/60 leading-relaxed font-light  md:text-right mb-14">
              From agriculture and sustainability to logistics and technology —
              we help purpose-driven brands communicate clearly, scale
              visibility, and build stronger digital experiences.
            </p>
          </FadeUp>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {cases.map((c, i) => (
            <FadeUp key={c.id} delay={0.18 + i * 0.04}>
              <div className="group h-full min-h-[420px] rounded-3xl border border-slate-200 dark:border-cyan-500/10 bg-white dark:bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 flex flex-col">
                {/* Top */}
                <div className="flex items-start justify-between mb-6">
                  <Logo initials={c.initials} gradient={c.gradient} size="md" />

                  <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-cyan-500/10 bg-slate-100 dark:bg-cyan-500/5 flex items-center justify-center text-cyan-600 dark:text-cyan-300 text-xs group-hover:translate-x-0.5 transition-transform">
                    →
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  {/* Meta */}
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-primary mb-1">
                      {c.industry}
                    </p>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1 min-h-[56px]">
                      {c.brand}
                    </h3>

                    <p className="text-[12px] text-slate-500 dark:text-white/35">
                      {c.location}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 min-h-[58px] content-start">
                    {c.services.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-[0.93rem] text-slate-600 dark:text-white/60 leading-relaxed flex-1 mb-6">
                    {c.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200 dark:border-cyan-500/10 mt-auto">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 dark:text-white/30 mb-1">
                      Outcome
                    </p>

                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {c.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
