import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import TreatmentHeroActions from "@/components/TreatmentHeroActions";

export const metadata: Metadata = {
  title: "Fissure Treatment in Pune | Laser Anal Fissure Surgery | Sunrise Piles Hospital",
  description:
    "Best anal fissure treatment in Pune at Sunrise Piles Hospital, Wakad. Laser sphincterotomy for acute & chronic fissures. Painless, daycare procedure. Call +91 9096965217.",
  alternates: { canonical: "https://sunrisepileshospital.com/treatments/fissure" },
};

export default function FissurePage() {
  return (
    <div>
      <PageHero
        align="left"
        badge="Anal Fissure Treatment"
        title="Fissure Treatment in Pune"
        subtitle="Effective laser treatment for acute and chronic anal fissures. Minimal pain, fast recovery, no stitches."
      >
        <TreatmentHeroActions />
      </PageHero>

      <section className="page-section">
        <div className="page-container space-y-10 md:space-y-14">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-4">What is an Anal Fissure?</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  An anal fissure is a small tear or cut in the thin, moist tissue (mucosa) that lines
                  the anus. Fissures typically cause sharp pain during bowel movements, followed by
                  burning pain that may persist for hours.
                </p>
                <p>
                  Fissures can be <strong className="text-[var(--navy)]">acute</strong> (recent, usually
                  heal with medical treatment) or <strong className="text-[var(--navy)]">chronic</strong>{" "}
                  (lasting more than 8–12 weeks, often requiring surgical intervention).
                </p>
              </div>
            </div>
            <div className="bg-brand-light rounded-2xl p-5 sm:p-6">
              <h3 className="font-bold text-heading text-lg mb-3">Symptoms</h3>
              {[
                "Sharp, severe pain during bowel movements",
                "Burning or stinging pain after passing stools",
                "Bright red blood on toilet paper or stool",
                "A visible crack or tear near the anus",
                "A small lump of skin near the fissure (skin tag)",
                "Itching or irritation around the anus",
              ].map((s) => (
                <div key={s} className="flex items-start gap-2 text-slate-700 text-sm mb-2">
                  <span className="text-[var(--primary)] font-bold mt-0.5 shrink-0">●</span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-5 sm:mb-6">Treatment Options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Medical Management", desc: "Topical creams, stool softeners, and dietary changes for acute fissures." },
                { name: "Botulinum Toxin Injection", desc: "Injection to relax the internal sphincter muscle, reducing spasm and promoting healing." },
                { name: "Laser Sphincterotomy", desc: "Precise laser incision in the internal sphincter to reduce muscle spasm and allow healing." },
                { name: "Lateral Internal Sphincterotomy (LIS)", desc: "Surgical division of the internal sphincter under anaesthesia — gold standard for chronic fissures." },
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
        title="Suffering from Fissure Pain?"
        description="Don't let fissure pain affect your daily life. Get expert treatment at Sunrise Piles Hospital."
      />
    </div>
  );
}
