const items = [
  "Digital Strategy",
  "Brand Identity",
  "Web Development",
  "Print & Collateral",
  "Growth Consulting",
  "Purpose-Driven Marketing",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-primary py-4">
      <div className="ticker flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="px-10 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100"
          >
            {item} ·
          </div>
        ))}
      </div>
    </div>
  );
}