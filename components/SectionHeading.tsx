interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        {label}
      </p>

      <h2 className="font-serif text-4xl font-bold leading-tight text-text md:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 max-w-2xl text-text2 leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}