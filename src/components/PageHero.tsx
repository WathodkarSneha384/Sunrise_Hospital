import type { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  align?: "center" | "left";
  children?: ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  align = "center",
  children,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section className="brand-gradient text-white py-10 md:py-14 lg:py-16">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 ${isCenter ? "text-center" : "text-left"}`}
      >
        <div className={isCenter ? "max-w-3xl mx-auto" : "max-w-3xl"}>
          {badge && (
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white/90 mb-3">
              {badge}
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            {title}
          </h1>
          <p className="text-white/85 text-base md:text-lg mb-6">{subtitle}</p>
          {children && (
            <div
              className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 ${
                isCenter ? "justify-center" : ""
              }`}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
