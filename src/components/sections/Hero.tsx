"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const hospitalImages = [
  "/Assset/img1.jpg",
  "/Assset/img2.jpg",
  "/Assset/img3.jpg",
  "/Assset/img4.jpg",
  "/Assset/img5.jpg",
];

const features = [
  "NABH Certified",
  "Insurance Cashless",
  "15-min Procedure",
  "No Stitches",
];

const heroStats = [
  { value: "5,000+", label: "Patients Treated" },
  { value: "4.9★", label: "Google Rating" },
  { value: "95%+", label: "Success Rate" },
  { value: "10+", label: "Yrs Experience" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % hospitalImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden brand-gradient">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center py-8 md:py-10 lg:py-12">
        <div>
          <RevealOnScroll variant="left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-white/95 text-[11px] font-semibold uppercase tracking-wider">
                Advanced Laser Proctology · Wakad, Pune
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-bold text-white leading-[1.15] mb-3 tracking-tight">
              Trusted Care for{" "}
              <span className="text-[var(--accent)]">Piles, Fissure</span>
              <br />
              &amp; Fistula Treatment
            </h1>

            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-4 max-w-lg">
              Painless laser daycare surgery at NABH-accredited Sunrise Piles Hospital.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1 bg-white/10 border border-white/15 text-white/90 text-[11px] px-2.5 py-1 rounded-full"
                >
                  <svg className="w-3 h-3 text-[var(--accent)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mb-5">
              <a href="tel:+919096965217" className="btn-accent text-sm px-5 py-2.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary-dark)] hover:bg-[var(--primary-light)] font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-md hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="text-lg md:text-xl font-bold text-white leading-none">{s.value}</p>
                  <p className="text-white/70 text-[11px] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="right" delay={150} className="relative">
          <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-white/20 aspect-[16/10] max-h-[280px] lg:max-h-[300px] w-full">
            {hospitalImages.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={src}
                  alt={`Sunrise Piles Hospital ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--navy)]/90 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end gap-2">
              <p className="text-white text-xs font-semibold drop-shadow-sm">Sunrise Piles Hospital, Wakad</p>
              <div className="flex gap-1 shrink-0">
                {hospitalImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all ${i === active ? "w-5 h-1.5 bg-[var(--accent)]" : "w-1.5 h-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-lg px-3 py-2 border border-slate-100 animate-float hidden sm:block">
            <p className="text-lg font-bold text-[var(--primary)] leading-none">NABH</p>
            <p className="text-slate-500 text-[10px] mt-0.5 font-medium">Accredited Centre</p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="relative h-6 md:h-8">
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path d="M0 64L60 58C120 52 240 40 360 37C480 34 600 40 720 42C840 44 960 42 1080 37C1200 32 1320 24 1380 20L1440 16V64H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
