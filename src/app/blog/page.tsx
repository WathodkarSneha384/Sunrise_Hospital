import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import { blogCategories, blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Health Blog | Piles, Fissure & Fistula Tips",
  description:
    "Expert health articles on piles, fissure, fistula, and laser surgery from Dr. Satish Jadhav at Sunrise Piles Hospital, Wakad, Pune.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

const categoryColors: Record<string, string> = {
  "Piles Treatment": "bg-[var(--primary-light)] text-[var(--primary-dark)]",
  Fissure: "bg-[var(--primary-light)] text-[var(--navy)]",
  Fistula: "bg-[var(--primary-light)] text-[var(--primary-dark)]",
  "Laser Surgery": "bg-[var(--primary-light)] text-[var(--navy)]",
  "Diet & Lifestyle": "bg-[var(--section-alt)] text-[var(--navy)]",
  Recovery: "bg-[var(--section-alt)] text-[var(--primary-dark)]",
};

export default function BlogPage() {
  return (
    <div>
      <PageHero
        title="Health Blog & Articles"
        subtitle="Expert insights on piles, fissure, fistula, and laser surgery from Dr. Jadhav — helping you make informed decisions about your health."
      />

      <section className="page-section bg-white">
        <div className="page-container">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8 space-y-5 sm:space-y-6">
              <div>
                <p className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest mb-1">
                  Latest Articles
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
                  Know More, Heal Better
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-2">
                  Clinically accurate articles from our specialist team at Sunrise Piles Hospital.
                </p>
              </div>

              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[var(--border)] transition-all"
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span
                      className={`text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-slate-100 text-slate-700"}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs">{post.date}</span>
                    <span className="text-slate-300 hidden sm:inline">·</span>
                    <span className="text-slate-500 text-xs">{post.author}</span>
                    <span className="text-slate-300 hidden sm:inline">·</span>
                    <span className="text-slate-400 text-xs">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[var(--navy)] leading-snug mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[var(--primary)] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[var(--primary)] font-semibold text-sm hover:text-[var(--primary-dark)] transition-colors"
                  >
                    Read Full Article
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              ))}
            </div>

            <aside className="lg:col-span-4 mt-10 lg:mt-0 space-y-6">
              <div className="bg-[var(--section-alt)] border border-[var(--border)] rounded-2xl p-5 sm:p-6">
                <h3 className="font-bold text-[var(--navy)] mb-4 text-sm uppercase tracking-wide">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {blogCategories.map((cat) => (
                    <li key={cat.name}>
                      <span className="flex justify-between items-center text-sm text-slate-600 py-1.5 border-b border-slate-200/80 last:border-0">
                        <span>{cat.name}</span>
                        <span className="text-[var(--primary)] font-semibold text-xs bg-white px-2 py-0.5 rounded-full">
                          {cat.count}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--navy)] text-white rounded-2xl p-5 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-2">Need Expert Advice?</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  Consult Dr. Satish Jadhav (MD, FPC, CCKS) — Pune&apos;s trusted specialist for
                  piles, fissure &amp; fistula treatment.
                </p>
                <Link href="/book-appointment" className="btn-primary w-full text-center text-sm">
                  Book Now
                </Link>
              </div>

              <div className="bg-brand-light border border-[var(--border)] rounded-2xl p-5 sm:p-6">
                <h3 className="font-bold text-[var(--navy)] mb-3 text-sm uppercase tracking-wide">
                  Quick Contact
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="tel:+919096965217" className="text-[var(--primary-dark)] font-medium hover:underline">
                      Call: +91 90969 65217
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/919096965217"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary-dark)] font-medium hover:underline"
                    >
                      WhatsApp Us
                    </a>
                  </li>
                  <li>
                    <Link href="/contact" className="text-[var(--primary-dark)] font-medium hover:underline">
                      Find Our Clinic
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PageCTA
        title="Have a Health Question?"
        description="Our team is here to help. Book a consultation with Dr. Jadhav and get personalised treatment advice."
      />
    </div>
  );
}
