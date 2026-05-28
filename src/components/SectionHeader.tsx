interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-6 md:mb-8 ${alignClass}`}>
      <div
        className={`flex items-center gap-3 mb-2 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <div className={`h-px w-10 ${light ? "bg-white/40" : "bg-[var(--primary)]/30"}`} />
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-[var(--accent)]" : "text-[var(--primary)]"
          }`}
        >
          {eyebrow}
        </span>
        <div className={`h-px w-10 ${light ? "bg-white/40" : "bg-[var(--primary)]/30"}`} />
      </div>
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-[var(--navy)]"
        }`}
      >
        {title}
        {highlight && (
          <span className={light ? "text-[var(--accent)]" : " text-[var(--primary)]"}>
            {" "}
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={`mt-2 text-sm md:text-base leading-relaxed ${
            light ? "text-white/85" : "text-slate-500"
          } ${align === "center" ? "max-w-2xl mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
