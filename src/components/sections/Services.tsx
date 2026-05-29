"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const treatments = [
  {
    id: "piles",
    num: "01",
    title: "Piles (Hemorrhoids)",
    tabLabel: "Piles",
    href: "/treatments/piles",
    badge: "Most Common",
    tagline: "Swollen veins in the anal region causing bleeding, discomfort & prolapse",
    image: "/Pilse-Fissure,Fistula/piles.jpg",
    theme: {
      tab: "bg-[#1a6570]",
      light: "bg-[#e8f6f8]",
      border: "border-[#b8dde4]",
      text: "text-[#1a6570]",
      accent: "text-[#29a8b7]",
      iconBg: "bg-[#d4eef2]",
      bar: "bg-[#1a6570]",
      cardHighlight: "bg-[#e8f6f8] border-[#29a8b7]/40",
      sectionBg: "bg-white",
    },
    whatIs:
      "Piles, also known as hemorrhoids, are swollen veins in and around the anal region. They develop due to increased pressure in the rectal veins and can cause discomfort, bleeding, prolapse, and swelling. They are classified as internal or external based on their location.",
    types: [
      { name: "Internal Piles", icon: "↑", description: "Inside the anal canal, not visible. Classified into Grade 1–4 by severity of prolapse. Painless bleeding is the most common presenting symptom." },
      { name: "External Piles", icon: "↓", description: "Around the anal verge (outside the anus). Causes visible swelling, irritation, itching, and pain especially during sitting or bowel movements." },
    ],
    causes: ["Chronic constipation and straining", "Low-fibre diet and low fluid intake", "Prolonged sitting on the toilet", "Pregnancy and increased abdominal pressure", "Hereditary factors"],
    symptoms: [
      { label: "Internal Piles", items: ["Painless bleeding during or after passing stool", "Mucus discharge", "Feeling of incomplete bowel evacuation", "Prolapse of tissue (Grade 3–4)"] },
      { label: "External Piles", items: ["Swelling around the anal verge", "Itching and irritation", "Pain or discomfort while sitting or passing stool", "Tender lump near the anus"] },
    ],
    conservativeNote: "Grade 1 piles are usually managed with lifestyle changes alone.",
    conservativeOptions: ["Lifestyle modification", "High-fibre diet & increased water", "Avoiding constipation and straining", "Medications and stool softeners", "Sitz bath for relief"],
    surgicalOptions: [
      { name: "Stapler Surgery (MIPH)", desc: "Best for Grade 3–4. Removes prolapsing tissue, reduces bleeding and prolapse effectively.", badge: "Grade 3 & 4", highlight: false },
      { name: "DHAL — Doppler Guided HAL", desc: "Hemorrhoidal Artery Ligation. Preserves anal anatomy, minimal pain, very low complication rate.", badge: "Grade 2", highlight: false },
      { name: "Laser Hemorrhoidectomy", desc: "Effective for painful or thrombosed hemorrhoids. Faster recovery, less postoperative discomfort vs. open surgery.", badge: "Recommended", highlight: true },
      { name: "Rubber Band Ligation", desc: "Minimally invasive for internal hemorrhoids only. Cuts off blood supply. May need multiple sittings.", badge: "Internal only", highlight: false },
      { name: "Laser Ablation", desc: "Minimally invasive. May have slightly higher recurrence in some patients. Suitable for early-grade hemorrhoids.", badge: "", highlight: false },
    ],
    goldStandard: null,
    prevention: ["High-fibre diet — fruits, vegetables, whole grains", "Drink 8–10 glasses of water daily", "Avoid prolonged sitting on the toilet", "Exercise regularly", "Avoid straining during bowel movements"],
  },
  {
    id: "fissure",
    num: "02",
    title: "Fissure in Ano",
    tabLabel: "Fissure",
    href: "/treatments/fissure",
    badge: "Highly Treatable",
    tagline: "A small tear in the anal canal causing severe pain & bleeding during bowel movements",
    image: "/Pilse-Fissure,Fistula/fissure.jpg",
    theme: {
      tab: "bg-[#29a8b7]",
      light: "bg-[#e8f6f8]",
      border: "border-[#b8dde4]",
      text: "text-[#1a6570]",
      accent: "text-[#29a8b7]",
      iconBg: "bg-[#d4eef2]",
      bar: "bg-[#29a8b7]",
      cardHighlight: "bg-[#e8f6f8] border-[#29a8b7]/40",
      sectionBg: "bg-[var(--section-alt)]",
    },
    whatIs:
      "Fissure in ano is a small cut or tear in the lining of the anal canal, usually occurring below the dentate line. It is one of the most common anorectal conditions causing sharp, severe pain during and after bowel movements, often accompanied by bright red bleeding.",
    types: [
      { name: "Acute Fissure", icon: "⚡", description: "A recent, fresh fissure that typically heals within 2–3 weeks with proper medical treatment, dietary changes, and Sitz bath — without requiring surgery." },
      { name: "Chronic Fissure", icon: "🔁", description: "Long-standing (>6 weeks) fissure with severe anal sphincter spasm that impairs blood supply and prevents natural healing. Surgery is usually required." },
    ],
    causes: ["Chronic constipation and hard stools", "Loose motions or repeated diarrhoea", "Trauma during bowel movements", "Low-fibre diet and dehydration"],
    symptoms: [
      { label: "Symptoms", items: ["Sharp cutting pain during and after passing stool", "Pain lasting 1–2 hours after defecation", "Bright red bleeding with stool", "Burning sensation in the anal region", "Fear of passing stool due to severe pain"] },
    ],
    conservativeNote: "Acute fissures usually heal within 2–3 weeks with conservative treatment.",
    conservativeOptions: ["Topical anaesthetics and muscle relaxants", "Sitz bath — warm water soaking 2–3 times daily", "High-fibre diet & plenty of fluids", "Stool softeners to ease bowel movements", "Lifestyle modification"],
    surgicalOptions: [
      { name: "Open LIS Surgery", desc: "Lateral Internal Sphincterotomy — a small incision to release the tight internal anal sphincter, relieving spasm and allowing the wound to heal naturally.", badge: "Chronic Fissure", highlight: false },
      { name: "Laser LIS Surgery", desc: "Laser-assisted Lateral Internal Sphincterotomy. All benefits of open LIS with added advantages: minimal blood loss, faster healing, less post-op pain, quicker return to work.", badge: "Gold Standard", highlight: true },
    ],
    goldStandard: {
      name: "LIS Surgery — Lateral Internal Sphincterotomy",
      note: "Gold standard for chronic fissure in ano (Open LIS or Laser LIS)",
      benefits: ["Permanent cure with excellent success rate", "Relief from severe anal spasm and pain", "Faster healing & recovery (2–3 days)", "Minimal recurrence with proper technique"],
    },
    prevention: ["Maintain a high-fibre diet", "Stay well hydrated", "Avoid straining during defecation", "Treat constipation promptly"],
  },
  {
    id: "fistula",
    num: "03",
    title: "Fistula in Ano",
    tabLabel: "Fistula",
    href: "/treatments/fistula",
    badge: "Surgery Needed",
    tagline: "An abnormal tunnel between the anal canal and skin, caused by infection or abscess",
    image: "/Pilse-Fissure,Fistula/fistula.jpg",
    theme: {
      tab: "bg-[#0f4f5c]",
      light: "bg-[#e8f6f8]",
      border: "border-[#b8dde4]",
      text: "text-[#0f4f5c]",
      accent: "text-[#29a8b7]",
      iconBg: "bg-[#d4eef2]",
      bar: "bg-[#0f4f5c]",
      cardHighlight: "bg-[#e8f6f8] border-[#29a8b7]/40",
      sectionBg: "bg-white",
    },
    whatIs:
      "Fistula in ano is an abnormal tunnel or tract that forms between the anal canal (inner lining) and the skin near the anus. It usually develops as a consequence of an anal abscess that either ruptured or was incompletely treated, creating a persistent infected channel.",
    types: [] as { name: string; icon: string; description: string }[],
    causes: ["Previous anal abscess — occurs in ~50% of cases", "Cryptoglandular infection (infection of anal glands)", "Chronic fissure in ano leading to abscess", "Crohn's disease or inflammatory bowel disease"],
    symptoms: [
      { label: "Symptoms of Fistula in Ano", items: ["Throbbing, continuous pain around the anal region", "Swelling and tenderness near the anal verge", "Difficulty sitting or walking normally", "Recurrent pus, blood, or discharge from opening", "Frequent urge to pass stool", "Recurrent anal abscesses"] },
    ],
    conservativeNote: "⚠ There is no permanent medical treatment for fistula in ano. Surgery is necessary to prevent recurrent infection and further complications. Left untreated, it can involve the sphincter muscles.",
    conservativeOptions: [] as string[],
    surgicalOptions: [
      { name: "Laser Ablation (DLAFT)", desc: "Diode Laser Ablation of Fistula Tract — laser energy destroys the tract from inside without cutting external tissue. Minimal sphincter damage.", badge: "Gold Standard", highlight: true },
      { name: "Fibrin Glue Injection", desc: "Biological sealant injected to block and seal the fistula tract. Minimally invasive but moderate recurrence rates in some patients.", badge: "", highlight: false },
      { name: "Ksharsutra Therapy", desc: "Ayurvedic medicated thread that gradually cuts through the fistula tract over multiple weeks. Suitable for simple low-lying fistulas.", badge: "Ayurvedic", highlight: false },
      { name: "VAAFT", desc: "Video-Assisted Anal Fistula Treatment — endoscopic approach to visualise and treat the fistula tract from inside. Minimally invasive.", badge: "Advanced", highlight: false },
    ],
    goldStandard: {
      name: "Laser Fistulotomy (DLAFT)",
      note: "Considered one of the best surgical options for fistula in ano",
      benefits: ["Very low recurrence rate (1–2%)", "Faster recovery — return to work in days", "No open wounds, no damage to sphincter", "Day-care — home same day"],
    },
    prevention: [] as string[],
  },
  {
    id: "laser",
    num: "04",
    title: "Laser Surgery",
    tabLabel: "Laser Surgery",
    href: "/treatments/laser-surgery",
    badge: "Latest Technology",
    tagline: "Precise, bloodless daycare procedures — no stitches, go home the same day",
    image: null as string | null,
    theme: {
      tab: "bg-[#5ecfe6]",
      light: "bg-[#e8f6f8]",
      border: "border-[#b8dde4]",
      text: "text-[#1a6570]",
      accent: "text-[#29a8b7]",
      iconBg: "bg-[#d4eef2]",
      bar: "bg-[#29a8b7]",
      cardHighlight: "bg-[#e8f6f8] border-[#5ecfe6]/60",
      sectionBg: "bg-[var(--section-alt)]",
    },
    whatIs:
      "Advanced diode laser technology allows precise, bloodless procedures using focused light energy. Unlike traditional open surgery, laser procedures simultaneously cut, coagulate, and seal tissue — resulting in significantly less pain, bleeding, and recovery time. All our laser procedures are NABH-certified daycare surgeries.",
    types: [
      { name: "Laser Hemorrhoidectomy", icon: "🩸", description: "Laser excision for Grade 3–4 piles and thrombosed hemorrhoids. Minimal bleeding, faster healing vs. open hemorrhoidectomy." },
      { name: "Laser LIS (Fissure)", icon: "⚡", description: "Laser-assisted Lateral Internal Sphincterotomy for chronic fissure. Precise sphincter release, less bleeding, minimal post-op pain." },
      { name: "Laser Fistulotomy", icon: "🔬", description: "DLAFT — laser ablates the fistula tract from inside. No open wounds, no sphincter damage, very low recurrence (1–2%)." },
      { name: "Laser Ablation", icon: "💡", description: "Laser energy shrinks and ablates early-grade hemorrhoids. Minimally invasive, performed under local anaesthesia in OPD." },
    ],
    causes: [] as string[],
    symptoms: [] as { label: string; items: string[] }[],
    conservativeNote: "",
    conservativeOptions: [] as string[],
    surgicalOptions: [] as { name: string; desc: string; badge: string; highlight: boolean }[],
    goldStandard: null,
    prevention: [] as string[],
    laserBenefits: [
      { title: "No Stitches", desc: "Laser seals tissue as it works — no open wounds or sutures" },
      { title: "45-Minute Procedure", desc: "Most laser procedures are completed under 45 minutes" },
      { title: "Same-Day Discharge", desc: "Go home within hours — no overnight hospital stay" },
      { title: "Minimal Blood Loss", desc: "Laser coagulates vessels instantly — virtually bloodless" },
      { title: "Less Post-op Pain", desc: "Significantly less discomfort vs. open surgery" },
      { title: "Back in 2–3 Days", desc: "Return to desk work in 2–3 days, full recovery ~1 week" },
    ],
    comparison: [
      { aspect: "Hospital Stay", traditional: "2–5 days", laser: "Same-day discharge" },
      { aspect: "Recovery Time", traditional: "4–6 weeks", laser: "2–3 days (desk work)" },
      { aspect: "Post-op Pain", traditional: "Significant", laser: "Minimal — oral tablets" },
      { aspect: "Bleeding", traditional: "Moderate to significant", laser: "Minimal to none" },
      { aspect: "Stitches", traditional: "Sutures required", laser: "No stitches needed" },
      { aspect: "Anaesthesia", traditional: "General / spinal", laser: "Local / short spinal" },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function CheckItem({ text, color = "text-[var(--primary)]" }: { text: string; color?: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
      <svg className={`w-4 h-4 ${color} shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      {text}
    </li>
  );
}

// ─── Per-treatment block ──────────────────────────────────────────────────────

function TreatmentBlock({ t }: { t: (typeof treatments)[number] }) {
  const { theme } = t;
  const laser = t as typeof treatments[3];
  const [activePanel, setActivePanel] = useState(0);

  const panelDefs = [
    {
      label: "About",
      visible: true,
      content: (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-3">About this Condition</p>
          <p className="text-gray-700 leading-relaxed text-[15px] mb-5">{t.whatIs}</p>

          {t.types && t.types.length > 0 && (
            <>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 mt-6">Types</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {t.types.map((tp) => (
                  <div key={tp.name} className={`${theme.light} border ${theme.border} rounded-xl p-4`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">{tp.icon}</span>
                      <h5 className={`font-bold ${theme.text} text-sm`}>{tp.name}</h5>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{tp.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {laser.laserBenefits && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
              {laser.laserBenefits.map((b) => (
                <div key={b.title} className={`${theme.light} border ${theme.border} rounded-xl p-3.5`}>
                  <p className={`font-bold ${theme.text} text-sm mb-1`}>{b.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
    {
      label: "Symptoms",
      visible: t.causes.length > 0 || t.symptoms.length > 0,
      content: (
        <div className={`grid md:grid-cols-2 gap-6 p-5 sm:p-6 rounded-2xl ${theme.light} border ${theme.border}`}>
          {t.causes.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Causes</p>
              <ul className="space-y-2">
                {t.causes.map((c) => <CheckItem key={c} text={c} color={theme.accent} />)}
              </ul>
            </div>
          )}
          {t.symptoms.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Symptoms</p>
              {t.symptoms.map((group) => (
                <div key={group.label} className="mb-3 last:mb-0">
                  {t.symptoms.length > 1 && (
                    <p className={`text-xs font-bold ${theme.text} mb-2`}>{group.label}</p>
                  )}
                  <ul className="space-y-1.5">
                    {group.items.map((s) => <CheckItem key={s} text={s} color={theme.accent} />)}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    },
    {
      label: "Treatment",
      visible: (t.conservativeOptions?.length ?? 0) > 0 || !!t.conservativeNote || (t.surgicalOptions?.length ?? 0) > 0 || !!t.goldStandard,
      content: (
        <div className="space-y-5">
          {t.conservativeOptions && t.conservativeOptions.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-3">Conservative Treatment</p>
              {t.conservativeNote && (
                <p className="text-gray-500 text-sm italic mb-3">{t.conservativeNote}</p>
              )}
              <div className={`${theme.light} border ${theme.border} rounded-2xl p-5`}>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {t.conservativeOptions.map((o) => <CheckItem key={o} text={o} color={theme.accent} />)}
                </ul>
              </div>
            </div>
          )}

          {t.conservativeNote && t.conservativeOptions.length === 0 && (
            <div className="flex gap-3 bg-red-50 border border-red-200 rounded-2xl p-5">
              <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-red-700 text-sm font-medium leading-relaxed">{t.conservativeNote}</p>
            </div>
          )}

          {t.surgicalOptions && t.surgicalOptions.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Treatment Options</p>
                <span className="text-xs text-gray-500">Recommended first</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {(t.surgicalOptions as { name: string; desc: string; badge: string; highlight: boolean }[]).map((opt) => (
                  <div
                    key={opt.name}
                    className={`rounded-2xl p-5 border-2 relative transition-shadow hover:shadow-md ${
                      opt.highlight ? `${theme.cardHighlight}` : "bg-white border-gray-200"
                    }`}
                  >
                    {opt.highlight && (
                      <div className={`absolute -top-2.5 left-4 text-[10px] font-black ${theme.tab} text-white px-2.5 py-0.5 rounded-full uppercase tracking-wide`}>
                        Recommended
                      </div>
                    )}
                    {opt.badge && !opt.highlight && (
                      <span className={`inline-block text-[10px] font-bold ${theme.iconBg} ${theme.text} px-2 py-0.5 rounded-full mb-2`}>
                        {opt.badge}
                      </span>
                    )}
                    <h5 className="font-bold text-gray-900 text-sm mb-2">{opt.name}</h5>
                    <p className="text-gray-500 text-xs leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {t.goldStandard && (
            <div className="bg-gradient-to-br from-[var(--primary-light)] to-white border-2 border-[var(--primary)]/30 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] mb-0.5">Gold Standard Treatment</p>
                  <h4 className="text-lg font-black text-gray-900">{t.goldStandard.name}</h4>
                  <p className="text-[var(--primary-dark)] text-xs font-medium mt-0.5">{t.goldStandard.note}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {t.goldStandard.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 bg-white/70 rounded-xl px-3 py-2">
                    <svg className="w-4 h-4 text-[var(--primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-800">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      label: "Prevention",
      visible: !!laser.comparison || (t.prevention?.length ?? 0) > 0,
      content: (
        <div className="space-y-5">
          {laser.comparison && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-4">Laser vs Traditional Surgery</p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden overflow-x-auto no-scrollbar">
                <table className="w-full text-sm min-w-[500px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-5 py-3 font-bold text-gray-700">Aspect</th>
                      <th className="text-left px-5 py-3 font-bold text-gray-400">Traditional Surgery</th>
                      <th className={`text-left px-5 py-3 font-bold ${theme.text}`}>Laser Surgery ✓</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laser.comparison.map((row, i) => (
                      <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-5 py-3 font-semibold text-gray-800">{row.aspect}</td>
                        <td className="px-5 py-3 text-gray-400">{row.traditional}</td>
                        <td className={`px-5 py-3 font-semibold ${theme.accent}`}>{row.laser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {t.prevention && t.prevention.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-3">Prevention Tips</p>
              <div className="flex flex-wrap gap-2">
                {t.prevention.map((p) => (
                  <span key={p} className="inline-flex items-center gap-1.5 bg-[var(--primary-light)] border border-[var(--border)] text-[var(--primary-dark)] text-xs font-medium px-3.5 py-2 rounded-full">
                    <svg className="w-3 h-3 text-[var(--primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
  ].filter((panel) => panel.visible);

  const prevPanel = () => {
    setActivePanel((prev) => (prev === 0 ? panelDefs.length - 1 : prev - 1));
  };

  const nextPanel = () => {
    setActivePanel((prev) => (prev === panelDefs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id={t.id} className="scroll-mt-28">
      <article className="rounded-2xl md:rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Header: image + title */}
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2 relative min-h-[200px] md:min-h-[220px] bg-white flex items-center justify-center p-3 sm:p-4">
            {t.image ? (
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-contain object-center p-2"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            ) : (
              <div className={`absolute inset-0 ${theme.light} flex items-center justify-center`}>
                <div className="text-center px-6">
                  <span className={`inline-flex w-14 h-14 rounded-2xl ${theme.tab} text-white items-center justify-center text-2xl font-bold mb-3`}>
                    {t.num}
                  </span>
                  <p className={`font-bold ${theme.text} text-lg`}>{t.tabLabel}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
            <span
              className={`absolute top-4 left-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-xl ${theme.tab} text-white text-sm font-bold shadow-lg`}
            >
              {t.num}
            </span>
          </div>

          <div className="md:col-span-3 p-5 md:p-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
            <span className={`inline-flex w-fit text-[11px] font-bold uppercase tracking-wider ${theme.text} ${theme.light} border ${theme.border} px-3 py-1 rounded-full mb-3`}>
              {t.badge}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--navy)] leading-tight mb-2">{t.title}</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5">{t.tagline}</p>
            <Link
              href={t.href}
              className={`inline-flex w-fit items-center gap-2 ${theme.tab} text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity`}
            >
              View full treatment page
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="border-y border-slate-100 bg-[var(--section-alt)] px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {panelDefs.map((panel, idx) => (
              <button
                key={panel.label}
                type="button"
                onClick={() => setActivePanel(idx)}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                  idx === activePanel
                    ? `${theme.tab} text-white shadow-sm`
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[var(--primary)]/30 hover:text-[var(--primary)]"
                }`}
              >
                {panel.label}
              </button>
            ))}
            <div className="hidden sm:flex items-center gap-1.5 ml-auto text-xs text-slate-400">
              <button
                type="button"
                onClick={prevPanel}
                className="h-8 w-8 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-white hover:text-[var(--primary)] inline-flex items-center justify-center"
                aria-label="Previous section"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span>
                {activePanel + 1} / {panelDefs.length}
              </span>
              <button
                type="button"
                onClick={nextPanel}
                className="h-8 w-8 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-white hover:text-[var(--primary)] inline-flex items-center justify-center"
                aria-label="Next section"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div className="p-5 md:p-6 min-h-[200px]">
          <div key={activePanel} className="animate-fadeInUp">
            {panelDefs[activePanel]?.content}
          </div>
        </div>
      </article>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section id="treatments" className="bg-white">

      {/* ── Section header + jump nav ── */}
      <div className="pt-8 md:pt-10 pb-5 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[var(--primary)]/30" />
            <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-widest">Conditions We Treat</span>
            <div className="h-px w-8 bg-[var(--primary)]/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight tracking-tight mb-2">Detailed Treatment Information</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-4">Browse each condition below — use tabs to explore causes, symptoms, and treatment options.</p>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {treatments.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`inline-flex items-center gap-2 ${t.theme.light} border ${t.theme.border} ${t.theme.text} font-bold text-xs sm:text-sm px-4 py-2 rounded-full hover:shadow-sm transition-all`}
              >
                <span className={`w-2 h-2 rounded-full ${t.theme.bar}`} />
                {t.tabLabel}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 md:pb-10 space-y-6 md:space-y-8">
        {treatments.map((t) => (
          <TreatmentBlock key={t.id} t={t} />
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="py-8 bg-white border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h3 className="text-lg md:text-xl font-bold text-[var(--navy)] mb-1">Get the Right Treatment Today</h3>
          <p className="text-slate-500 text-sm mb-5">
            NABH-certified laser surgery · Same-day discharge · Insurance accepted · 95%+ success rate
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919096965217"
              className="btn-primary text-sm px-5 py-2.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +91 90969 65217
            </a>
            <Link
              href="/book-appointment"
              className="btn-outline text-sm px-5 py-2.5"
            >
              Book Appointment Online
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
