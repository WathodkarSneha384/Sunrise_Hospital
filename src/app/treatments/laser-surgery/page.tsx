import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TreatmentHeroActions from "@/components/TreatmentHeroActions";

export const metadata: Metadata = {
  title: "Laser Piles Surgery in Pune | Daycare Laser Proctology | Sunrise Piles Hospital",
  description:
    "Best laser surgery for piles, fissure & fistula in Pune at Sunrise Piles Hospital, Wakad. Bloodless, no stitches, 45-minute daycare procedure. NABH accredited. Call +91 9096965217.",
  alternates: { canonical: "https://sunrisepileshospital.com/treatments/laser-surgery" },
};

export default function LaserSurgeryPage() {
  return (
    <div>
      <PageHero
        align="left"
        badge="Advanced Laser Technology"
        title="Laser Proctology Surgery in Pune"
        subtitle="State-of-the-art laser procedures for piles, fissure and fistula. No stitches, go home the same day."
      >
        <TreatmentHeroActions />
      </PageHero>

      <section className="page-section">
        <div className="page-container space-y-10 md:space-y-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-4">How Laser Surgery Works</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Laser proctology uses a highly focused beam of laser energy to precisely treat
                  anorectal conditions. The laser coagulates and vaporises target tissue while causing
                  minimal damage to surrounding healthy tissue.
                </p>
                <p>
                  This results in procedures that are virtually bloodless, require no stitches, cause
                  minimal post-operative pain, and allow for same-day discharge — a major advantage
                  over conventional surgery.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: "🩸", label: "Bloodless", desc: "Laser seals blood vessels instantly" },
                { icon: "✂️", label: "No Incision", desc: "No sutures required" },
                { icon: "😌", label: "Less Pain", desc: "Minimal post-op discomfort" },
                { icon: "⚡", label: "Precise", desc: "Targets only affected tissue" },
              ].map((item) => (
                <div key={item.label} className="bg-brand-light rounded-2xl p-3 sm:p-4 text-center">
                  <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                  <p className="font-bold text-heading text-xs sm:text-sm">{item.label}</p>
                  <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-6 sm:mb-8 text-center">
              Your Daycare Journey
            </h2>
            <div className="relative space-y-6">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] -translate-x-1/2" />
              {[
                { step: "1", time: "Day 0 – Morning", title: "Arrival & Pre-op", desc: "Arrive at the clinic. Pre-operative assessment, consent and preparation are done." },
                { step: "2", time: "Day 0 – Mid Morning", title: "Procedure (45 min)", desc: "Laser procedure performed under local/short general anaesthesia. Completely painless." },
                { step: "3", time: "Day 0 – Afternoon", title: "Recovery", desc: "Short observation period of 2–3 hours. Post-operative instructions given." },
                { step: "4", time: "Day 0 – Evening", title: "Discharge", desc: "Go home the same day! Most patients are discharged within 4–6 hours of arrival." },
                { step: "5", time: "Day 2–3", title: "Back to Work", desc: "Return to normal activities and desk work. Avoid strenuous activity for 1 week." },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 min-w-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <p className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wide mb-1">
                      {item.time}
                    </p>
                    <h3 className="font-bold text-heading text-base sm:text-lg">{item.title}</h3>
                    <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--navy)] text-white flex items-center justify-center font-bold z-10 mx-auto md:mx-0">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-5 sm:mb-6 text-center">
              Laser vs Traditional Surgery
            </h2>
            <div className="overflow-x-auto rounded-2xl shadow -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full text-xs sm:text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-[var(--navy)] text-white">
                    <th className="px-3 sm:px-6 py-3 text-left">Feature</th>
                    <th className="px-3 sm:px-6 py-3 text-center">Laser Surgery</th>
                    <th className="px-3 sm:px-6 py-3 text-center">Traditional Surgery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Hospital Stay", "Daycare (same day)", "1–3 days admission"],
                    ["Pain Level", "Minimal", "Moderate to severe"],
                    ["Incisions", "None", "Surgical incisions required"],
                    ["Stitches", "No stitches", "Sutures needed"],
                    ["Blood Loss", "Negligible", "Moderate bleeding"],
                    ["Recovery Time", "2–3 days", "2–4 weeks"],
                    ["Return to Work", "2–3 days", "2–3 weeks"],
                    ["Procedure Duration", "~45 minutes", "60–90 minutes"],
                  ].map(([feature, laser, trad], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-3 sm:px-6 py-3 font-medium text-slate-700">{feature}</td>
                      <td className="px-3 sm:px-6 py-3 text-center">
                        <span className="bg-brand-light text-[var(--primary-dark)] px-2 sm:px-3 py-0.5 rounded-full font-medium">
                          {laser}
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3 text-center text-slate-500">{trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Book Your Laser Surgery Consultation"
        description="Advanced laser proctology at Sunrise Piles Hospital, Wakad, Pune. NABH accredited centre."
      />
    </div>
  );
}
