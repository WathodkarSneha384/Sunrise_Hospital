"use client";

import { useState, useEffect, useCallback } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Wakad, Pune",
    date: "March 2024",
    rating: 5,
    text: "I was very scared about surgery but Dr. Jadhav explained everything clearly. The laser procedure was smooth and comfortable. No pain at all! Back to work in 3 days. Highly recommended.",
    initials: "RS",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Priya Kulkarni",
    location: "Hinjewadi, Pune",
    date: "January 2024",
    rating: 5,
    text: "Excellent treatment for my chronic fissure. I had been suffering for 2 years and visiting multiple doctors. Dr. Jadhav solved my problem with a simple laser procedure. Very professional staff and hygienic clinic.",
    initials: "PK",
    color: "from-rose-500 to-rose-700",
  },
  {
    name: "Suresh Patil",
    location: "Pimpri, Pune",
    date: "February 2024",
    rating: 5,
    text: "Best piles hospital in Pune! The entire team is very helpful and the hospital is very clean. My fistula treatment (VAAFT) was completed without any complications. No recurrence even after 6 months!",
    initials: "SP",
    color: "from-green-600 to-green-800",
  },
  {
    name: "Anjali Desai",
    location: "Baner, Pune",
    date: "December 2023",
    rating: 5,
    text: "I was worried about the cost but they accept my health insurance. The treatment was done without stitches. Dr. Satish Jadhav is very experienced and patient. Thank you team!",
    initials: "AD",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Manoj Kale",
    location: "Aundh, Pune",
    date: "April 2024",
    rating: 5,
    text: "Grade 3 piles treated successfully. The laser procedure was amazing and very comfortable. The nursing staff was very caring. Would definitely recommend to family and friends.",
    initials: "MK",
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Sneha Joshi",
    location: "Wakad, Pune",
    date: "March 2024",
    rating: 5,
    text: "Had severe piles during pregnancy. Dr. Jadhav suggested the safest treatment option for me. Very understanding and knowledgeable doctor. The clinic is well-equipped, clean, and comfortable.",
    initials: "SJ",
    color: "from-amber-500 to-amber-700",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-100">
      {/* Google badge + date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5">
          <GoogleIcon />
          <span className="text-xs font-semibold text-gray-600">Google Review</span>
        </div>
        <span className="text-xs text-gray-400">{t.date}</span>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-5">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-[var(--navy)] text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {t.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const total = testimonials.length; // 6
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrentIndex(((idx % total) + total) % total);
    setAnimKey(k => k + 1);
  }, [total]);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => next(), 5000);
    return () => clearInterval(t);
  }, [isPaused, next]);

  // Desktop shows window of 3: currentIndex, +1, +2 (wrapping)
  const desktopCards = [0, 1, 2].map(offset => testimonials[(currentIndex + offset) % total]);
  const mobileCard = testimonials[currentIndex];

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Patient Stories"
            title="What Our"
            highlight="Patients Say"
          />
          <div className="flex justify-center -mt-6 mb-6 px-1">
            <div className="w-full max-w-xs sm:max-w-none sm:w-auto bg-[var(--primary-light)] border border-[var(--border)] rounded-2xl px-4 py-3 sm:px-6">
              <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:gap-3 sm:justify-center">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-0.5 shrink-0">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="hidden sm:block h-6 w-px bg-[var(--border)] shrink-0" />
                  <div className="flex items-baseline gap-1 shrink-0">
                    <span className="font-bold text-[var(--navy)] text-base sm:text-lg leading-none">4.9</span>
                    <span className="text-slate-500 text-xs sm:text-sm">/ 5</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-600 text-xs sm:text-sm text-center sm:text-left">
                    <strong className="text-[var(--navy)] font-bold">200+</strong> Google Reviews
                  </span>
                  <GoogleIcon />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: 3 visible */}
          <div key={`desktop-${animKey}`} className="hidden md:grid md:grid-cols-3 gap-6 animate-fadeInUp">
            {desktopCards.map((t) => (
              <TestimonialCard key={`${t.name}-${animKey}`} t={t} />
            ))}
          </div>

          {/* Mobile: 1 visible */}
          <div key={`mobile-${animKey}`} className="md:hidden animate-fadeInUp">
            <TestimonialCard t={mobileCard} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-[var(--navy)] text-[var(--navy)] flex items-center justify-center hover:bg-[var(--navy)] hover:text-white transition-all"
            aria-label="Previous reviews"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-[var(--primary)] w-8 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-[var(--navy)] text-[var(--navy)] flex items-center justify-center hover:bg-[var(--navy)] hover:text-white transition-all"
            aria-label="Next reviews"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Link to Google */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/Sunrise+Piles+Hospital+Wakad+Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] underline-offset-4 hover:underline transition-colors text-sm"
          >
            <GoogleIcon />
            View all 200+ reviews on Google
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
