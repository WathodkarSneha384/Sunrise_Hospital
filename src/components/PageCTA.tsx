import Link from "next/link";
import type { ReactNode } from "react";

interface PageCTAProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageCTA({ title, description, children }: PageCTAProps) {
  return (
    <section className="py-10 md:py-14 bg-[var(--primary)] text-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-white/85 text-sm md:text-base mb-6 md:mb-8">{description}</p>
        {children ?? (
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="tel:+919096965217"
              className="w-full sm:w-auto bg-white text-[var(--primary-dark)] px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-[var(--primary-light)] transition-colors"
            >
              📞 +91 90969 65217
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[var(--primary-dark)] hover:opacity-90 text-white px-6 sm:px-8 py-3 rounded-xl font-bold transition-colors border border-white/20"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
