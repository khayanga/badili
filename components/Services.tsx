// // services.tsx
// "use client";

// const services = [
//   {
//     name: "Badili Grow",
//     sub: "Digital Marketing",
//     desc: "We help your business get seen by the right people. Through targeted strategies, we turn attention into real, measurable growth that compounds over time.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//         <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
//       </svg>
//     ),
//     featured: true,
//   },
//   {
//     name: "Badili Studio",
//     sub: "Branding & Design",
//     desc: "We shape how your brand looks, feels, and communicates—creating identities that build trust and stand out.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//         <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
//       </svg>
//     ),
//   },
//   {
//     name: "Badili Print",
//     sub: "Print & Collateral",
//     desc: "We bring your brand into the physical world with materials that leave a lasting impression.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
//       </svg>
//     ),
//   },
//   {
//     name: "Badili Build",
//     sub: "Web Design & Development",
//     desc: "High-performing websites and digital experiences that engage users and drive action—built with speed, accessibility, and conversion in mind.",
//     features: ["Custom websites", "Landing pages", "E-commerce", "Web apps"],
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//         <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
//       </svg>
//     ),
//     tall: true,
//   },
//   {
//     name: "Badili Consult",
//     sub: "Consulting & Training",
//     desc: "We equip your team with the strategy and tools to scale sustainably and lead with confidence.",
//     accent: "emerald",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//       </svg>
//     ),
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="relative px-[5%] py-32 bg-[#020b10] overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-600/10 blur-[140px] -top-40 -left-32" />
//         <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[120px] -bottom-20 -right-20" />
//       </div>

//       <div className="relative z-10 max-w-[1100px] mx-auto">
//         {/* Header */}
       

//         {/* Bento Grid */}
//         <div className="grid grid-cols-3 grid-rows-2 gap-4">
//           {/* Featured — spans 2 cols */}
//           <div className="group col-span-2 flex items-center gap-14 rounded-2xl p-11 bg-gradient-to-br from-cyan-500/15 to-emerald-500/8 border border-cyan-500/25 hover:border-cyan-400/45 transition-all duration-500 hover:-translate-y-1">
//             <div className="w-14 h-14 rounded-xl bg-cyan-500/12 border border-cyan-500/2 flex items-center justify-center flex-shrink-0 text-cyan-400">
//               {services[0].icon}
//             </div>
//             <div className="flex-1">
//               <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 px-3 py-1 rounded-full mb-3">Core Service</span>
//               <h3 className="text-2xl font-bold text-slate-100 mb-1 tracking-tight">{services[0].name}</h3>
//               <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-3">{services[0].sub}</p>
//               <p className="text-cyan-100/40 text-sm leading-relaxed font-light">{services[0].desc}</p>
//               <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-cyan-500/60 group-hover:text-cyan-400 group-hover:gap-3 transition-all">
//                 Explore service <span>→</span>
//               </div>
//             </div>
//           </div>

//           {/* Build — tall, spans 2 rows */}
//           <div className="group row-span-2 flex flex-col rounded-2xl p-8 bg-white/[0.02] border border-cyan-500/12 hover:bg-cyan-500/6 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
//             <p className="text-[11px] font-bold tracking-[0.2em] text-cyan-400/35 font-mono mb-7">03 / 05</p>
//             <div className="w-11 h-11 rounded-xl bg-cyan-500/12 border border-cyan-500/2 flex items-center justify-center text-cyan-400 mb-6">
//               {services[3].icon}
//             </div>
//             <h3 className="text-xl font-bold text-slate-100 mb-1 tracking-tight">{services[3].name}</h3>
//             <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-4">{services[3].sub}</p>
//             <p className="text-cyan-100/40 text-sm leading-relaxed font-light">{services[3].desc}</p>
//             <div className="mt-auto pt-8">
//               <div className="border-t border-cyan-500/10 pt-6">
//                 <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-cyan-400/50 mb-3">Includes</p>
//                 <div className="flex flex-col gap-2">
//                   {services[3].features?.map((f) => (
//                     <span key={f} className="text-[0.82rem] text-cyan-100/40 font-light">→ {f}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="mt-7">
//               <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-cyan-500/60 group-hover:text-cyan-400 group-hover:gap-3 transition-all">
//                 Explore service <span>→</span>
//               </span>
//             </div>
//             <div className="absolute bottom-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_100%_100%,rgba(6,182,212,0.12),transparent_70%)] pointer-events-none" />
//           </div>

//           {/* Studio */}
//           <div className="group flex flex-col rounded-2xl p-7 bg-white/[0.02] border border-cyan-500/12 hover:bg-cyan-500/6 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
//             <p className="text-[11px] font-bold tracking-[0.2em] text-cyan-400/35 font-mono mb-7">02 / 05</p>
//             <div className="w-11 h-11 rounded-xl bg-cyan-500/12 border border-cyan-500/2 flex items-center justify-center text-cyan-400 mb-6">{services[1].icon}</div>
//             <h3 className="text-xl font-bold text-slate-100 mb-1">{services[1].name}</h3>
//             <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-3">{services[1].sub}</p>
//             <p className="text-cyan-100/40 text-sm leading-relaxed font-light flex-1">{services[1].desc}</p>
//             <div className="mt-6"><span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-cyan-500/60 group-hover:text-cyan-400 group-hover:gap-3 transition-all">Explore <span>→</span></span></div>
//             <div className="absolute bottom-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_100%_100%,rgba(6,182,212,0.12),transparent_70%)] pointer-events-none" />
//           </div>

//           {/* Print */}
//           <div className="group flex flex-col rounded-2xl p-7 bg-white/[0.02] border border-cyan-500/12 hover:bg-cyan-500/6 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
//             <p className="text-[11px] font-bold tracking-[0.2em] text-cyan-400/35 font-mono mb-7">04 / 05</p>
//             <div className="w-11 h-11 rounded-xl bg-cyan-500/12 border border-cyan-500/2 flex items-center justify-center text-cyan-400 mb-6">{services[2].icon}</div>
//             <h3 className="text-xl font-bold text-slate-100 mb-1">{services[2].name}</h3>
//             <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-3">{services[2].sub}</p>
//             <p className="text-cyan-100/40 text-sm leading-relaxed font-light flex-1">{services[2].desc}</p>
//             <div className="mt-6"><span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-cyan-500/60 group-hover:text-cyan-400 group-hover:gap-3 transition-all">Explore <span>→</span></span></div>
//             <div className="absolute bottom-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_100%_100%,rgba(6,182,212,0.12),transparent_70%)] pointer-events-none" />
//           </div>

//           {/* Consult — emerald accent */}
//           <div className="group col-span-2 flex flex-col rounded-2xl p-7 bg-emerald-500/[0.04] border border-emerald-500/15 hover:border-emerald-500/35 hover:bg-emerald-500/8 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
//             <p className="text-[11px] font-bold tracking-[0.2em] text-emerald-400/35 font-mono mb-7">05 / 05</p>
//             <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/2 flex items-center justify-center text-emerald-400 mb-6">{services[4].icon}</div>
//             <h3 className="text-xl font-bold text-slate-100 mb-1">{services[4].name}</h3>
//             <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400/70 mb-3">{services[4].sub}</p>
//             <p className="text-cyan-100/40 text-sm leading-relaxed font-light flex-1 max-w-lg">{services[4].desc}</p>
//             <div className="mt-6"><span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-emerald-500/60 group-hover:text-emerald-400 group-hover:gap-3 transition-all">Explore <span>→</span></span></div>
//             <div className="absolute bottom-0 right-0 w-20 h-20 bg-[radial-gradient(circle_at_100%_100%,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

const services = [
  {
    name: "Badili Grow",
    sub: "Digital Marketing",
    desc: "Targeted strategies that turn attention into real, measurable growth that compounds over time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    name: "Badili Consult",
    sub: "Consulting & Training",
    desc: "Equipping teams with the strategy and tools to scale sustainably and lead with confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    name: "Badili Studio",
    sub: "Branding & Design",
    desc: "Creating visual identities that build trust and stand out in a crowded market.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    name: "Badili Print",
    sub: "Print & Collateral",
    desc: "Physical materials that bring your brand into the real world with lasting quality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    name: "Badili Build",
    sub: "Web Design & Development",
    desc: "High-performing websites and digital experiences built for speed, accessibility, and high conversion.",
    features: ["Custom Web Apps", "E-commerce", "UI/UX Design", "Performance Tech"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="px-[5%] py-32 bg-[#01080c] relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#06b6d4 0.5px, transparent 0.5px), linear-gradient(90deg, #06b6d4 0.5px, transparent 0.5px)`, backgroundSize: '60px 60px' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-10 mb-20 flex-wrap">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-5">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> */}
              What we do
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold text-slate-50 leading-[1.08] tracking-tight">
              One ecosystem,<br />
              <span className="text-cyan-400">five engines</span> of growth
            </h2>
          </div>
          <p className="max-w-sm text-cyan-100/40 text-[1.05rem] leading-relaxed font-light">
            Strategy, design, and execution unified into one growth system built exclusively for purpose-driven brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* ROW 1: GROW & CONSULT */}
          <HorizontalServiceCard data={services[0]} accent />
          <HorizontalServiceCard data={services[1]} accent />

          {/* ROW 2: STUDIO & PRINT */}
          <HorizontalServiceCard data={services[2]} />
          <HorizontalServiceCard data={services[3]} />

          {/* ROW 3: WEB DEV (BADILI BUILD) - Full Width Bottom */}
          <div className="md:col-span-2 group relative rounded-2xl border border-cyan-500/20 bg-cyan-950/10 p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-cyan-400/40">
             <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-cyan-500 text-black">{services[4].icon}</div>
                        <span className="text-xs font-black tracking-[0.3em] uppercase text-cyan-400">{services[4].sub}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{services[4].name}</h3>
                    <p className="text-cyan-100/40 text-lg max-w-xl leading-relaxed">{services[4].desc}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 shrink-0 border-l border-cyan-500/10 pl-12">
                    {services[4].features?.map((f) => (
                        <div key={f} className="flex items-center gap-3 text-xs font-bold tracking-widest text-cyan-200/40 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" /> {f}
                        </div>
                    ))}
                </div>
             </div>
             {/* Large background text for "Build" */}
             <div className="absolute -bottom-10 -right-10 text-[12rem] font-heading text-cyan-500/3 select-none pointer-events-none">BUILD</div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HorizontalServiceCard({ data, accent = false }: { data: any, accent?: boolean }) {
  return (
    <div className={`group relative rounded-2xl border p-8 flex items-start gap-8 transition-all duration-500 hover:bg-white/2 ${accent ? 'border-cyan-500/15 bg-cyan-500/2' : 'border-white/5 bg-transparent'}`}>
      <div className={`shrink-0 p-3 rounded-xl transition-colors duration-500 ${accent ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black' : 'bg-white/5 text-white/40 group-hover:text-cyan-400'}`}>
        {data.icon}
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col mb-4">
            <span className="text-[12px] font-black tracking-[0.2em] uppercase text-cyan-400/50 mb-1">{data.sub}</span>
            <h3 className="text-xl font-bold text-white tracking-tight">{data.name}</h3>
        </div>
        <p className="text-white/70 text-md leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
          {data.desc}
        </p>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
}