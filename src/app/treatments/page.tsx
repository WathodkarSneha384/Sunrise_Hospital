import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Treatments | Piles, Fissure & Fistula Laser Treatment in Pune",
  description:
    "Advanced laser treatments for Piles, Fissure, and Fistula at Sunrise Piles Hospital, Wakad, Pune. Daycare procedures, no cuts, no stitches. Book today.",
  alternates: { canonical: "https://sunrisepileshospital.com/treatments" },
};

const treatments = [
  {
    icon: "🩸",
    title: "Piles (Haemorrhoids) Treatment",
    href: "/treatments/piles",
    description:
      "Comprehensive management of all grades of piles using advanced laser ablation, sclerotherapy, and Rubber Band Ligation (RBL). Our daycare approach ensures you are back home the same day.",
    highlights: [
      "All grades (Grade 1–4) treated",
      "Laser ablation & sclerotherapy",
      "Rubber Band Ligation (RBL)",
      "Same-day discharge",
    ],
  },
  {
    icon: "⚡",
    title: "Fissure Treatment",
    href: "/treatments/fissure",
    description:
      "Effective treatment for acute and chronic anal fissures. We offer both medical management and advanced laser sphincterotomy for cases requiring surgical intervention.",
    highlights: [
      "Acute & chronic fissures",
      "Laser sphincterotomy",
      "Medical management options",
      "Quick relief from pain",
    ],
  },
  {
    icon: "🔬",
    title: "Fistula Treatment",
    href: "/treatments/fistula",
    description:
      "Advanced VAAFT (Video-Assisted Anal Fistula Treatment) and laser fistulotomy procedures with minimal recurrence rates, reduced hospital stay, and faster healing.",
    highlights: [
      "VAAFT procedure",
      "Laser fistulotomy",
      "Low recurrence rate",
      "Sphincter-preserving technique",
    ],
  },
  {
    icon: "💡",
    title: "Laser Surgery",
    href: "/treatments/laser-surgery",
    description:
      "Our state-of-the-art laser surgery suite enables precise, bloodless procedures for all anorectal conditions. No incisions, no stitches, minimal pain and rapid recovery.",
    highlights: [
      "No cuts, no stitches",
      "Bloodless procedure",
      "45-minute average time",
      "Return to work in 2–3 days",
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <div>
      <PageHero
        title="Our Treatments"
        subtitle="Advanced laser procedures for all anorectal conditions — performed by Dr. Satish Jadhav with 10+ years of specialised experience."
      />

      <section className="page-section">
        <div className="page-container">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {treatments.map((t) => (
              <div
                key={t.href}
                className="bg-white rounded-3xl shadow-lg p-5 sm:p-8 hover:shadow-xl transition-shadow border border-slate-100 flex flex-col"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{t.icon}</div>
                <h2 className="text-lg sm:text-2xl font-bold text-heading mb-2 sm:mb-3">{t.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base flex-1">
                  {t.description}
                </p>
                <ul className="space-y-1.5 mb-5 sm:mb-6">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="text-[var(--primary)] font-bold shrink-0">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link href={t.href} className="btn-primary w-full sm:w-auto text-center text-sm sm:text-base">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Not Sure Which Treatment You Need?"
        description="Book a consultation with Dr. Satish Jadhav for a proper diagnosis and personalised treatment plan."
      >
        <a
          href="tel:+919096965217"
          className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[var(--primary-dark)] px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-[var(--primary-light)] transition-colors text-base sm:text-lg"
        >
          📞 Book Consultation
        </a>
      </PageCTA>
    </div>
  );
}
