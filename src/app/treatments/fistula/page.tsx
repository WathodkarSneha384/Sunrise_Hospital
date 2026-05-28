import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TreatmentHeroActions from "@/components/TreatmentHeroActions";

export const metadata: Metadata = {
  title: "Fistula Treatment in Pune | VAAFT & Laser Fistulotomy | Sunrise Piles Hospital",
  description:
    "Advanced fistula treatment in Pune at Sunrise Piles Hospital, Wakad. VAAFT (Video-Assisted Anal Fistula Treatment) & laser fistulotomy. Low recurrence. Call +91 9096965217.",
  alternates: { canonical: "https://sunrisepileshospital.com/treatments/fistula" },
};

export default function FistulaPage() {
  return (
    <div>
      <PageHero
        align="left"
        badge="Fistula in Ano Treatment"
        title="Fistula Treatment in Pune"
        subtitle="Advanced VAAFT and laser procedures for anal fistula with low recurrence and sphincter preservation."
      >
        <TreatmentHeroActions />
      </PageHero>

      <section className="page-section">
        <div className="page-container space-y-10 md:space-y-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-4">What is Anal Fistula?</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  An anal fistula is an abnormal tunnel that forms between the inside of the anus and
                  the skin near the anus. It usually develops as a result of a previous anal abscess.
                </p>
                <p>
                  Fistulas cause persistent discharge of pus, pain, and discomfort. They rarely heal on
                  their own and typically require surgical treatment. The key challenge is treating the
                  fistula while preserving the sphincter muscle.
                </p>
              </div>
            </div>
            <div className="bg-brand-light rounded-2xl p-5 sm:p-6">
              <h3 className="font-bold text-heading text-lg mb-3">Symptoms</h3>
              {[
                "Persistent or recurring discharge (pus/blood) near the anus",
                "Pain and swelling around the anus",
                "Skin irritation around the anus",
                "Frequent anal abscesses",
                "Fever (in case of active infection)",
                "Pain during bowel movements",
              ].map((s) => (
                <div key={s} className="flex items-start gap-2 text-slate-700 text-sm mb-2">
                  <span className="text-[var(--primary)] font-bold mt-0.5 shrink-0">●</span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="brand-gradient text-white rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="inline-block bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-[var(--accent)] mb-4">
                Advanced Technology
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                VAAFT — Video-Assisted Anal Fistula Treatment
              </h2>
              <p className="text-white/85 leading-relaxed mb-6 text-sm sm:text-base">
                Dr. Satish Jadhav is trained in VAAFT, a cutting-edge, minimally invasive procedure
                that uses a miniature video fistuloscope to visualise and treat the fistula tract from
                inside. This sphincter-preserving technique offers lower recurrence rates and faster
                recovery compared to traditional surgery.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  ["Sphincter", "Preserving"],
                  ["Low", "Recurrence"],
                  ["Video", "Guided"],
                  ["Fast", "Recovery"],
                ].map(([v, l]) => (
                  <div key={v} className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="font-bold text-[var(--accent)] text-sm sm:text-base">{v}</p>
                    <p className="text-xs text-white/75">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-5 sm:mb-6">Treatment Options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "VAAFT (Video-Assisted)", desc: "Gold-standard minimally invasive technique using video fistuloscope for visualization and treatment." },
                { name: "Laser Fistulotomy", desc: "Laser energy destroys the fistula tract lining with minimal damage to surrounding tissues." },
                { name: "Fistulotomy / Fistulectomy", desc: "Surgical excision of the fistula tract — suitable for superficial, simple fistulas." },
                { name: "LIFT Procedure", desc: "Ligation of Intersphincteric Fistula Tract — sphincter-preserving surgical option for complex fistulas." },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-5 shadow border border-slate-100">
                  <h3 className="font-bold text-heading mb-2 text-sm sm:text-base">{t.name}</h3>
                  <p className="text-slate-600 text-sm">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Get Expert Fistula Treatment in Pune"
        description="Consult Dr. Satish Jadhav for VAAFT and advanced laser fistula treatment."
      />
    </div>
  );
}
