"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "Piles Treatment", href: "/treatments/piles", icon: "🔴" },
      { label: "Fissure Treatment", href: "/treatments/fissure", icon: "🟠" },
      { label: "Fistula Treatment", href: "/treatments/fistula", icon: "🟡" },
      { label: "Laser Surgery", href: "/treatments/laser-surgery", icon: "🔵" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTreatmentsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ── Top info strip ── */}
      <div className="bg-[var(--primary-dark)] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex justify-between items-center text-[11px] tracking-wide">
          <a
            href="https://maps.app.goo.gl/bdXK12WvjzaNNDNMA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-3 h-3 text-white/60 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Mankar Chowk, Wakad, Pune – 411057, Maharashtra
          </a>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white/70">
              <svg className="w-3 h-3 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Mon–Sat: 9 AM – 8 PM &nbsp;|&nbsp; Sunday: By Appointment
            </span>
            <a
              href="tel:+919096965217"
              className="flex items-center gap-1.5 text-[var(--accent)] hover:text-white font-bold transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 90969 65217
            </a>
            <span className="text-white/20">|</span>
            <span className="text-[var(--accent)] font-semibold">NABH Accredited</span>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_2px_20px_rgba(0,0,0,0.10)] border-b border-transparent"
            : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[76px] md:h-[84px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <SiteLogo priority />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide uppercase rounded-md transition-all duration-150 ${
                        treatmentsOpen
                          ? "text-[var(--primary)] bg-[var(--primary-light)]"
                          : "text-slate-600 hover:text-[var(--primary)] hover:bg-slate-50"
                      }`}
                      onMouseEnter={() => setTreatmentsOpen(true)}
                      onMouseLeave={() => setTreatmentsOpen(false)}
                    >
                      {link.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${treatmentsOpen ? "rotate-180 text-[var(--primary)]" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-60 bg-white rounded-xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-200 origin-top ${
                        treatmentsOpen
                          ? "opacity-100 visible scale-100 translate-y-0"
                          : "opacity-0 invisible scale-95 -translate-y-1"
                      }`}
                      onMouseEnter={() => setTreatmentsOpen(true)}
                      onMouseLeave={() => setTreatmentsOpen(false)}
                    >
                      <div className="p-1.5">
                        <p className="px-3 pt-2 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                          Our Treatments
                        </p>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-[var(--primary-light)] hover:text-[var(--primary-dark)] transition-colors group"
                          >
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] group-hover:bg-[var(--primary-dark)] transition-colors shrink-0" />
                            <span className="font-medium">{child.label}</span>
                          </Link>
                        ))}
                        <div className="mx-3 my-1.5 border-t border-slate-100" />
                        <Link
                          href="/treatments"
                          className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
                        >
                          View all treatments
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-[13px] font-medium tracking-wide uppercase text-slate-600 hover:text-[var(--primary)] hover:bg-slate-50 rounded-md transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Phone pill */}
              <a
                href="tel:+919096965217"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:border-[var(--primary)]/40 hover:text-[var(--primary)] hover:bg-[var(--primary-light)] transition-all text-[13px] font-medium"
              >
                <svg className="w-3.5 h-3.5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                90969 65217
              </a>

              {/* Book CTA */}
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-5 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all shadow-sm hover:shadow-md"
              >
                Book Appointment
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-[5px] transition-all">
                <span className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-100 bg-white px-4 py-3 space-y-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full text-left px-3 py-2.5 text-[13px] font-medium uppercase tracking-wide text-slate-600 hover:bg-slate-50 rounded-lg flex items-center justify-between transition-colors"
                    onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileTreatmentsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileTreatmentsOpen ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="ml-3 mt-0.5 border-l-2 border-[var(--border)] pl-3 space-y-0.5 pb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-md transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-[13px] font-medium uppercase tracking-wide text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile CTAs */}
            <div className="pt-3 pb-1 space-y-2 border-t border-slate-100 mt-2">
              <a
                href="tel:+919096965217"
                className="flex items-center justify-center gap-2 w-full border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[var(--primary-light)] hover:border-[var(--primary)]/40 hover:text-[var(--primary)] transition-colors"
              >
                <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call +91 90969 65217
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-[var(--primary)] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--primary-dark)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Book Appointment
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
