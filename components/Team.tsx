import FadeUp from "./FadeUp";


const team = [
  { initials: "AK", name: "Amani Kariuki", role: "Founder & Strategist" },
  { initials: "ZM", name: "Zara Mwangi", role: "Creative Director" },
  { initials: "TO", name: "Tendo Ochieng", role: "Lead Developer" },
  { initials: "NW", name: "Nia Waweru", role: "Brand & Growth" },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-lg bg-gradient-to-br from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/10 group-hover:scale-110 transition-transform duration-300">
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-28 px-[5%] bg-white dark:bg-[#030b11] transition-colors duration-500 overflow-hidden"
    >
      {/* subtle glow background */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.24em] uppercase text-cyan-600 dark:text-cyan-400 mb-5">
            <span className="w-8 h-px bg-cyan-500/60" />
            The People
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white mb-5">
            Meet the <span className="text-cyan-500 dark:text-cyan-400">Team</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-white/60 leading-relaxed font-light mb-14">
            Creatives, strategists, and problem-solvers. Above all, partners in
            building brands that matter.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={0.1 + i * 0.05}>
              <div className="group relative rounded-3xl border border-slate-200 dark:border-cyan-500/10 bg-white dark:bg-white/[0.03] backdrop-blur-sm p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30">

                {/* Avatar */}
                <div className="flex justify-center mb-5">
                  <Avatar initials={member.initials} />
                </div>

                {/* Name */}
                <div className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </div>

                {/* Role */}
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-cyan-600 dark:text-cyan-400">
                  {member.role}
                </div>

                {/* subtle hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 pointer-events-none" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}