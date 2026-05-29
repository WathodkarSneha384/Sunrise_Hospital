import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";

const insurers = [
  "PMJAY · Ayushman Bharat",
  "ESI",
  "Star Health",
  "HDFC ERGO",
  "New India Assurance",
  "Bajaj Allianz",
  "Niva Bupa",
  "United India",
  "Care Health",
  "Reliance Health",
  "Shaan Medpay Capitals",
];

export default function InsuranceCTA() {
  const doubled = [...insurers, ...insurers];

  return (
    <>
      <section className="py-6 bg-[var(--section-alt)] overflow-hidden border-y border-slate-200">
        <RevealOnScroll>
          <p className="text-center text-[var(--primary)] font-bold text-[11px] uppercase tracking-widest mb-4">
            Cashless / Reimbursement Partners
          </p>
        </RevealOnScroll>
        <div className="relative marquee-container">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--section-alt)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--section-alt)] to-transparent z-10" />
          <div className="animate-marquee">
            {doubled.map((ins, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-full text-sm font-medium mx-2 whitespace-nowrap shadow-sm"
              >
                <svg className="w-3.5 h-3.5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {ins}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding brand-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <RevealOnScroll>
            <SectionHeader
              eyebrow="Book Today"
              title="Ready to Live Without"
              highlight="Piles Pain?"
              description="Advanced laser treatment · No cuts · No stitches · Go home the same day. Join 5,000+ patients who found permanent relief."
              light
            />
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="flex flex-wrap justify-center gap-3 -mt-4">
              <a href="tel:+919096965217" className="btn-accent">
                Call +91 90969 65217
              </a>
              <a
                href="https://wa.me/919096965217?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                WhatsApp Now
              </a>
            </div>
            <p className="text-white/70 text-xs mt-5">Mon–Sat: 9 AM – 8 PM · Sunday: By Appointment</p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
