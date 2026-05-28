import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TreatmentHeroActions from "@/components/TreatmentHeroActions";

export const metadata: Metadata = {
  title: "Piles Treatment in Pune | Laser Haemorrhoid Surgery | Sunrise Piles Hospital",
  description:
    "Best piles treatment in Pune at Sunrise Piles Hospital, Wakad. Painless laser haemorrhoid surgery, sclerotherapy & RBL for all grades. Daycare, no stitches. Call +91 9096965217.",
  alternates: { canonical: "https://sunrisepileshospital.com/treatments/piles" },
};

const grades = [
  { grade: "Grade 1", desc: "Small swellings inside the lining — bleeding without prolapse." },
  { grade: "Grade 2", desc: "Larger piles — prolapse during straining but return spontaneously." },
  { grade: "Grade 3", desc: "Piles prolapse during straining and need to be pushed back manually." },
  { grade: "Grade 4", desc: "Permanently prolapsed piles that cannot be pushed back." },
];

const treatments = [
  { name: "Laser Hemorrhoidoplasty (LHP)", desc: "Gold-standard daycare procedure using laser energy to shrink haemorrhoidal tissue. Minimal pain, no stitches." },
  { name: "Injection Sclerotherapy", desc: "A sclerosing solution is injected to shrink internal piles. Ideal for Grade 1 & 2." },
  { name: "Rubber Band Ligation (RBL)", desc: "A small rubber band is placed at the base of the pile to cut off blood supply." },
  { name: "Open / Closed Haemorrhoidectomy", desc: "Traditional surgical excision for advanced cases — performed under anaesthesia." },
  { name: "Stapled Haemorrhoidopexy (MIPH)", desc: "Minimally invasive procedure using a circular stapler to reposition prolapsed piles." },
];

const gradeColors = [
  "bg-[var(--primary)]",
  "bg-[var(--accent)]",
  "bg-[var(--primary-dark)]",
  "bg-[var(--navy)]",
];

export default function PilesPage() {
  return (
    <div>
      <PageHero
        align="left"
        badge="Piles / Haemorrhoids"
        title="Painless Piles Treatment in Pune"
        subtitle="Advanced laser treatment for all grades of piles — no cuts, no stitches, same-day discharge. 5000+ patients treated successfully."
      >
        <TreatmentHeroActions />
      </PageHero>

      <section className="page-section">
        <div className="page-container space-y-10 md:space-y-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-4">What Are Piles?</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Piles (haemorrhoids) are swollen and inflamed veins in the rectum and anus that
                  cause discomfort and bleeding. They are one of the most common anorectal conditions
                  affecting people of all ages.
                </p>
                <p>
                  Symptoms include rectal bleeding, pain, itching, and a feeling of incomplete
                  evacuation. Left untreated, piles can progress through grades and cause significant
                  discomfort.
                </p>
              </div>
            </div>
            <div className="bg-brand-light rounded-2xl p-5 sm:p-6 space-y-3">
              <h3 className="font-bold text-heading text-lg mb-2">Common Symptoms</h3>
              {[
                "Bright red blood after passing stools",
                "Pain or discomfort around the anus",
                "Itching or irritation in the anal region",
                "Swelling around the anus",
                "Feeling of incomplete bowel evacuation",
                "Mucus discharge after bowel movement",
              ].map((s) => (
                <div key={s} className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-[var(--primary)] font-bold mt-0.5 shrink-0">●</span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-5 sm:mb-6 text-center">
              Grades of Piles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {grades.map((g, i) => (
                <div key={g.grade} className="bg-white rounded-2xl p-5 shadow border border-slate-100">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 ${gradeColors[i]}`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-heading mb-2">{g.grade}</h3>
                  <p className="text-slate-600 text-sm">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-5 sm:mb-6 text-center">
              Treatment Options We Offer
            </h2>
            <div className="space-y-4">
              {treatments.map((t) => (
                <div key={t.name} className="flex gap-3 sm:gap-4 bg-brand-light rounded-2xl p-4 sm:p-5">
                  <span className="text-[var(--primary)] font-bold text-xl shrink-0 mt-0.5">✓</span>
                  <div>
                    <h3 className="font-bold text-heading text-sm sm:text-base">{t.name}</h3>
                    <p className="text-slate-600 text-sm mt-1">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="brand-gradient text-white rounded-3xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-center">
              Why Choose Laser Piles Treatment?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                { icon: "🔴", title: "No Cuts", desc: "Laser energy shrinks tissue without surgical incisions" },
                { icon: "🩹", title: "No Stitches", desc: "Wound healing is natural with no sutures needed" },
                { icon: "🏠", title: "Daycare", desc: "Go home the same day as the procedure" },
                { icon: "⏱️", title: "45 Minutes", desc: "Most procedures completed in under an hour" },
                { icon: "💊", title: "Minimal Pain", desc: "Far less post-operative pain vs traditional surgery" },
                { icon: "💼", title: "Quick Recovery", desc: "Return to work and daily activities in 2–3 days" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-[var(--accent)]">{item.title}</h3>
                  <p className="text-white/75 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Get Expert Piles Treatment in Pune"
        description="Book your consultation with Dr. Satish Jadhav today. Same-day appointments available at Sunrise Piles Hospital, Wakad."
      />
    </div>
  );
}
