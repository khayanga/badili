import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function BentoCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent",
        className
      )}
    >
      {children}
    </div>
  );
}