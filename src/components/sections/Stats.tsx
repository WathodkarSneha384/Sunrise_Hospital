"use client";

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

function useCountUp(target: number, duration = 2200) {
  const [value, setValue] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered || target === 0) return;
    const fps = 60;
    const steps = (duration / 1000) * fps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setValue(Math.round(eased * target));
      if (step >= steps) clearInterval(timer);
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);

  return { value, ref };
}

const statsData = [
  { target: 5000, display: (n: number) => `${n.toLocaleString()}+`, label: "Patients Treated", sub: "Successful procedures" },
  { target: 49, display: (n: number) => `${(n / 10).toFixed(1)} ★`, label: "Google Rating", sub: "200+ verified reviews" },
  { target: 95, display: (n: number) => `${n}%+`, label: "Success Rate", sub: "Laser procedures" },
  { target: 10, display: (n: number) => `${n}+`, label: "Years Experience", sub: "Specialist proctologist" },
  { target: 45, display: (n: number) => `${n} min`, label: "Avg. Procedure", sub: "Daycare surgery" },
  { target: 0, display: () => "NABH", label: "Accredited", sub: "Quality certified" },
];

function StatItem({ stat }: { stat: (typeof statsData)[0] }) {
  const { value, ref } = useCountUp(stat.target);
  return (
    <div ref={ref} className="py-5 sm:py-6 px-3 text-center group">
      <p className="text-3xl sm:text-4xl font-bold text-[var(--primary)] leading-none group-hover:scale-105 transition-transform duration-300">
        {stat.target === 0 ? stat.display(0) : stat.display(value)}
      </p>
      <div className="w-8 h-0.5 bg-[var(--accent)] mx-auto mt-3 mb-2 rounded-full" />
      <p className="text-sm font-semibold text-[var(--navy)]">{stat.label}</p>
      <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative -mt-6 z-10 pb-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll variant="scale">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-slate-100">
              {statsData.map((stat) => (
                <StatItem key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
