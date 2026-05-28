import type { Metadata } from "next";
import Link from "next/link";
import DoctorImage from "@/components/DoctorImage";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "About Dr. Satish Jadhav | Expert Proctologist in Pune",
  description:
    "Meet Dr. Satish Jadhav (MD, FPC, CCKS), lead proctologist & laser surgeon at Sunrise Piles Hospital, Wakad Pune. 10+ years of experience, 5000+ patients treated for Piles, Fissure & Fistula.",
  alternates: { canonical: "https://sunrisepileshospital.com/about" },
};

const qualifications = [
  { title: "MD", description: "Doctor of Medicine" },
  { title: "FPC", description: "Fellowship in Proctology & Coloproctology" },
  { title: "CCKS", description: "Certified in Colorectal & Keyhole Surgery" },
];

const achievements = [
  "10+ years specialised experience in laser proctology",
  "5000+ successful procedures for piles, fissure & fistula",
  "Trained in advanced VAAFT (Video-Assisted Anal Fistula Treatment)",
  "Expert in daycare laser proctology procedures",
  "Led establishment of NABH accredited Sunrise Piles Hospital",
  "4.9/5 rating with 200+ verified Google patient reviews",
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Dr. Satish Jadhav"
        subtitle="MD, FPC, CCKS — Proctologist & Laser Surgeon | Founder, Sunrise Piles Hospital"
      />

      <section className="page-section">
        <div className="page-container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="brand-gradient rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl lg:sticky lg:top-24">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/40 mx-auto mb-5 shadow-inner">
                  <DoctorImage size={144} className="w-full h-full rounded-full" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Dr. Satish Jadhav</h2>
                <p className="text-[var(--accent)] font-medium mt-1 text-sm">MD, FPC, CCKS</p>
                <p className="text-white/75 text-sm mt-0.5">Proctologist &amp; Laser Surgeon</p>
                <div className="flex justify-center mt-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/75 text-xs mt-1">4.9/5 — 200+ Reviews</p>

                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 text-center">
                  {[
                    ["10+", "Years"],
                    ["5000+", "Patients"],
                    ["95%+", "Success"],
                  ].map(([val, label]) => (
                    <div key={label} className="bg-white/10 rounded-xl p-2 sm:p-3">
                      <p className="text-lg sm:text-xl font-bold">{val}</p>
                      <p className="text-[10px] sm:text-xs text-white/75">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  <a
                    href="tel:+919096965217"
                    className="block bg-white/20 hover:bg-white/30 text-white py-2.5 rounded-xl font-semibold transition-colors text-sm sm:text-base"
                  >
                    📞 Book Consultation
                  </a>
                  <a
                    href="https://wa.me/919096965217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hero-btn-whatsapp w-full"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-heading mb-4">About the Doctor</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    Dr. Satish Jadhav is a highly experienced and dedicated{" "}
                    <strong className="text-[var(--navy)]">Proctologist and Laser Surgeon</strong>{" "}
                    with over 10 years of specialised practice in anorectal disorders. He is the
                    founder and lead specialist at Sunrise Piles Hospital, Wakad, Pune — an NABH
                    accredited advanced laser proctology centre.
                  </p>
                  <p>
                    With a deep commitment to providing{" "}
                    <strong className="text-[var(--navy)]">painless and minimally invasive</strong>{" "}
                    treatment options, Dr. Jadhav has successfully treated over 5000 patients suffering
                    from piles (haemorrhoids), anal fissures, and anal fistulas using state-of-the-art
                    laser techniques.
                  </p>
                  <p>
                    Dr. Jadhav is trained in{" "}
                    <strong className="text-[var(--navy)]">
                      VAAFT (Video-Assisted Anal Fistula Treatment)
                    </strong>
                    , an advanced procedure for fistula treatment with low recurrence rates and
                    faster healing.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-heading mb-4">Qualifications</h3>
                <div className="flex flex-wrap gap-3">
                  {qualifications.map((q) => (
                    <div
                      key={q.title}
                      className="bg-brand-light border border-brand rounded-xl px-4 sm:px-5 py-3 flex-1 min-w-[140px]"
                    >
                      <p className="font-bold text-[var(--primary)] text-lg">{q.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{q.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-heading mb-4">Key Achievements</h3>
                <ul className="space-y-2">
                  {achievements.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-600 text-sm sm:text-base">
                      <span className="text-[var(--primary)] font-bold mt-0.5 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-light rounded-2xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-heading mb-3">
                  About Sunrise Piles Hospital
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                  Sunrise Piles Hospital is an <strong>NABH accredited</strong> advanced laser
                  proctology centre located at Mankar Chowk, Wakad, Pune.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    ["NABH", "Accredited"],
                    ["Laser OT", "Equipped"],
                    ["Cashless", "Insurance"],
                    ["Daycare", "Procedures"],
                  ].map(([val, label]) => (
                    <div key={val} className="text-center bg-white rounded-xl p-3 shadow-sm">
                      <p className="font-bold text-[var(--navy)] text-sm sm:text-base">{val}</p>
                      <p className="text-xs text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Book a Consultation with Dr. Jadhav"
        description="Get expert advice and a personalised treatment plan. Same-day appointments available."
      >
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
            Contact Us
          </Link>
        </div>
      </PageCTA>
    </div>
  );
}
