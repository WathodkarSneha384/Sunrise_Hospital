import Link from "next/link";
import type { BlogPost, BlogSection } from "@/lib/blog-types";

interface BlogSidebarProps {
  sections: BlogSection[];
  related: BlogPost[];
}

export default function BlogSidebar({ sections, related }: BlogSidebarProps) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
      <div className="bg-[var(--navy)] text-white rounded-2xl p-5 sm:p-6">
        <h3 className="font-bold text-base sm:text-lg mb-1">Book Free Consultation</h3>
        <p className="text-white/70 text-sm mb-4">Speak with Dr. Satish Jadhav today.</p>
        <div className="space-y-2">
          <a
            href="tel:+919096965217"
            className="flex items-center justify-center w-full bg-white text-[var(--navy)] font-semibold py-2.5 rounded-xl text-sm hover:bg-[var(--primary-light)] transition-colors"
          >
            Call Us Now
          </a>
          <a
            href="https://wa.me/919096965217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="bg-[var(--section-alt)] border border-[var(--border)] rounded-2xl p-5 sm:p-6">
        <h3 className="font-bold text-[var(--navy)] mb-3 text-sm uppercase tracking-wide">
          Table of Contents
        </h3>
        <nav className="space-y-1.5 max-h-64 overflow-y-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block text-sm text-slate-600 hover:text-[var(--primary)] py-1 transition-colors leading-snug"
            >
              {s.heading}
            </a>
          ))}
        </nav>
      </div>

      {related.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
          <h3 className="font-bold text-[var(--navy)] mb-3 text-sm uppercase tracking-wide">
            Recent Articles
          </h3>
          <ul className="space-y-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="text-sm text-slate-600 hover:text-[var(--primary)] leading-snug transition-colors line-clamp-2"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-brand-light border border-[var(--border)] rounded-2xl p-5 sm:p-6 text-sm">
        <h3 className="font-bold text-[var(--navy)] mb-3 text-sm uppercase tracking-wide">
          Contact Info
        </h3>
        <address className="not-italic space-y-2 text-slate-600">
          <p>2nd Floor, T Junction Building, Mankar Chowk, Wakad, Pune – 411057</p>
          <a href="tel:+919096965217" className="block text-[var(--primary-dark)] font-medium hover:underline">
            +91 90969 65217
          </a>
          <a
            href="mailto:sunrisespecialityhospital01@gmail.com"
            className="block text-[var(--primary-dark)] font-medium hover:underline break-all"
          >
            sunrisespecialityhospital01@gmail.com
          </a>
        </address>
      </div>
    </aside>
  );
}
