
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
 {
  name: "Badiili AI",
  sub: "AI Automation & Growth",
  desc: "We help sustainable businesses build stronger brands, smarter systems, and better digital visibility through AI-first solutions.",
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
      {/* brain/core */}
      <path d="M12 3a3 3 0 0 0-3 3v1H8a3 3 0 0 0-3 3 3 3 0 0 0 2 2.83V14a3 3 0 0 0 3 3h1v1a3 3 0 0 0 6 0v-1h1a3 3 0 0 0 3-3v-1.17A3 3 0 0 0 23 10a3 3 0 0 0-3-3h-1V6a3 3 0 0 0-3-3" />

      {/* nodes */}
      <circle cx="9" cy="10" r="1" />
      <circle cx="15" cy="10" r="1" />
      <circle cx="12" cy="15" r="1" />

      {/* connections */}
      <path d="M10 10h4" />
      <path d="M9.7 10.7l1.6 3" />
      <path d="M14.3 10.7l-1.6 3" />
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
        <div className="absolute left-0 top-0 h-112 w-md rounded-full bg-primary/10 blur-[140px] dark:bg-primary/20" />

        {/* <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-emerald-500/10 blur-[140px] dark:bg-emerald-500/20" /> */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
       

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
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
              <h3 className="mb-4 text-2xl font-bold  text-card-foreground">
                {service.name}
              </h3>

              {/* Desc */}
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.desc}
              </p>

              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}