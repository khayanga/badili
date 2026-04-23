
"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center px-[5%] pt-28 pb-24 overflow-hidden bg-[#010d14] text-slate-50">
      
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
      />
      <div className="absolute -top-48 -left-36 w-175 h-175 rounded-full bg-cyan-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-[15%] w-100 h-100 rounded-full bg-cyan-500/6 blur-[120px] pointer-events-none" />

      <div className="relative  md:mt-20 z-10 md:max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-16 items-center">
        
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-cyan-400 bg-cyan-500/8 border border-cyan-500/20 px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" />
            Digital solutions for green businesses
          </div>

          <h1 className="text-[clamp(2.8rem,6vw,4.8rem)] leading-[1.04] tracking-tight mb-6">
            We grow brands<br />
            that grow<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400">
              the planet
            </span>
          </h1>

          <p className=" text-md md:text-xl text-white/70 leading-[1.8] font-light max-w-xl mb-10">
            We bridge the gap between impact and growth helping sustainable businesses communicate their value,
            increase visibility, and scale through strategy, design, and technology.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan-700 hover:bg-cyan-600 text-white text-md font-bold tracking-wide rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore our services
              
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/6 text-cyan-100/70 text-md font-semibold rounded-xl transition-all duration-200"
            >
              Our story
            </a>
          </div>

          
        </div>

        {/* Right — Stats panel */}
        <div className="hidden xl:block relative">
          <div className="rounded-2xl p-9 bg-white/2 border border-cyan-500/12 flex flex-col gap-7">
            <div>
              <div className="text-[2.8rem] font-georgia text-slate-100 leading-none tracking-tight mb-1">100%</div>
              <div className="text-[12px] font-bold tracking-[0.22em] uppercase text-cyan-400">Purpose-driven clients</div>
            </div>
            <div className="h-px bg-cyan-500/8" />
            <div>
              <div className="text-[2.8rem] font-georgia text-slate-100 leading-none tracking-tight mb-1">5+</div>
              <div className="text-[12px] font-bold tracking-[0.22em] uppercase text-cyan-400">Growth engines</div>
            </div>
            <div className="h-px bg-cyan-500/8" />
            <div className="flex flex-col gap-3">
              {[["Strategy", "95%", 95], ["Design", "90%", 90], ["Technology", "85%", 85]].map(([label, pct, w]) => (
                <div key={label as string}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[16px] text-white/70 font-medium">{label as string}</span>
                    <span className="text-[16px] text-cyan-400 font-bold">{pct as string}</span>
                  </div>
                  <div className="h-0.5 rounded-full bg-cyan-500/10 overflow-hidden">
                    <div className="h-full rounded-full bg-linear-to-r from-cyan-700 to-emerald-500" style={{ width: `${w}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

