
"use client";

const services = [
  {
    name: "Badiili Studio",
    sub: "Branding & Design",
    desc: "Creating visual identities that build trust and stand out in a crowded market.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },

  {
    name: "Badiili Build",
    sub: "Web Design & Development",
    desc: "High-performing websites and digital experiences built for speed, accessibility, and high conversion.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },

  {
    name: "Badiili Consult",
    sub: "Consulting & Training",
    desc: "Equipping teams with the strategy and tools to scale sustainably and lead with confidence.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background px-[5%] py-24 sm:py-32"
    >
      {/* BACKGROUND */}
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

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[140px] dark:bg-primary/20" />

        {/* <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-emerald-500/10 blur-[140px] dark:bg-emerald-500/20" /> */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-20 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              What we do
            </p>

            <h2 className="max-w-2xl text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.05] text-foreground">
              Three focused services
              <br />
              built for{" "}
              <span className="text-primary">
                modern brands
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Strategy, design, and digital execution unified into one ecosystem
            built for purpose-driven businesses.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl"
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-32 w-32 bg-[radial-gradient(circle,rgba(6,182,212,0.08),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[radial-gradient(circle,rgba(6,182,212,0.14),transparent_70%)]" />

              {/* Icon */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-primary/10 text-cyan-600 transition-colors duration-500 group-hover:bg-primary group-hover:text-white dark:text-cyan-400">
                {service.icon}
              </div>

              {/* Sub */}
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600/70 dark:text-cyan-400/70">
                {service.sub}
              </p>

              {/* Title */}
              <h3 className="mb-4 text-2xl text-card-foreground">
                {service.name}
              </h3>

              {/* Desc */}
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.desc}
              </p>

              {/* Arrow */}
              <div className="mt-10 flex items-center gap-2 text-sm font-medium text-cyan-600 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 dark:text-cyan-400">
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>

              {/* Huge background word */}
              <div className="pointer-events-none absolute bottom-[-18px] right-[-10px] select-none text-6xl font-heading text-foreground/[0.03] transition-all duration-500 group-hover:text-cyan-500/[0.05] dark:text-white/[0.03]">
                {service.name.split(" ")[1]?.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}