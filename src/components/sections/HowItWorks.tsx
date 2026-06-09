import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    title: "Book Consultation",
    description: "Call, WhatsApp, or book online. Same-day appointments available.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Expert Diagnosis",
    description: "Dr. Jadhav examines you and explains condition, options, cost, and insurance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Laser Procedure",
    description: "Advanced laser procedure. Virtually painless, no stitches.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Recovery & Follow-up",
    description: "Personalised aftercare and support. Back to normal in 2–3 days.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Simple Process"
            title="Your Journey to"
            highlight="Recovery"
            description="From your first call to full recovery — here is what to expect."
          />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative stagger-children">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)]/25 to-transparent" />

          {steps.map((step, i) => (
            <RevealOnScroll key={step.title} delay={i * 80}>
              <div className="relative text-center lg:text-left bg-[var(--section-alt)] rounded-xl p-6 border border-slate-200 hover:shadow-md hover:border-[var(--primary)]/20 transition-all duration-300">
                <div className="relative inline-flex w-14 h-14 rounded-xl bg-[var(--primary)] text-white items-center justify-center mb-5 shadow-lg shadow-[var(--primary-dark)]/25">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--navy)] mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="text-center mt-6">
          <a href="tel:+919096965217" className="btn-primary">
            Call Now to Book
          </a>
          <p className="text-slate-400 text-xs mt-3">Same-day appointments · Insurance accepted</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
