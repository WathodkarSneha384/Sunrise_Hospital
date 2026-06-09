import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ | Piles, Fissure & Fistula Treatment Questions | Sunrise Piles Hospital",
  description:
    "Frequently asked questions about piles, fissure and fistula treatment at Sunrise Piles Hospital, Wakad, Pune. Expert answers from Dr. Satish Jadhav.",
  alternates: { canonical: "https://sunrisepileshospital.com/faq" },
};

const faqs = [
  {
    category: "About Piles",
    items: [
      {
        q: "What are piles (haemorrhoids)?",
        a: "Piles are swollen veins in the rectum and anus. They can be internal (inside the rectum) or external (under the skin around the anus). Symptoms include bleeding, pain, and itching.",
      },
      {
        q: "What causes piles?",
        a: "Common causes include chronic constipation, straining during bowel movements, a low-fibre diet, prolonged sitting on the toilet, pregnancy, obesity, and a family history of piles.",
      },
      {
        q: "Can piles be cured permanently?",
        a: "Yes. Laser piles treatment at Sunrise Piles Hospital has a 95%+ success rate. With proper treatment and lifestyle changes (high-fibre diet, adequate hydration), piles can be permanently resolved.",
      },
    ],
  },
  {
    category: "About Laser Treatment",
    items: [
      {
        q: "Is laser piles surgery painful?",
        a: "No. Laser procedures are performed under local or short general anaesthesia, so you feel no pain during the procedure. Post-operative discomfort is minimal compared to traditional surgery.",
      },
      {
        q: "How long does the laser procedure take?",
        a: "Procedure time varies by condition and grade. Dr. Jadhav will explain what to expect during your consultation, including preparation, the procedure, and recovery guidance.",
      },
      {
        q: "What is the recovery time after laser piles surgery?",
        a: "Most patients return to desk work and light daily activities within 2–3 days. Strenuous activity should be avoided for 1 week. Full recovery is typically within 2–3 weeks.",
      },
      {
        q: "Is there any cut or stitch in laser surgery?",
        a: "No. Laser surgery for piles does not require any surgical incisions or stitches. The laser energy precisely targets and shrinks the haemorrhoidal tissue.",
      },
    ],
  },
  {
    category: "Insurance & Cost",
    items: [
      {
        q: "Is piles treatment covered by insurance?",
        a: "Yes. Sunrise Piles Hospital accepts PMJAY (Ayushman Bharat), ESI, Star Health, HDFC ERGO, New India Assurance, Bajaj Allianz, Niva Bupa, United India, and most major private health insurance plans.",
      },
      {
        q: "What is the cost of laser piles treatment in Pune?",
        a: "The cost depends on the grade of piles and the treatment method used. Please call or WhatsApp us at +91 90969 65217 for a personalised cost estimate. Insurance coverage may significantly reduce your out-of-pocket cost.",
      },
    ],
  },
  {
    category: "Pre & Post Procedure",
    items: [
      {
        q: "How should I prepare for laser piles surgery?",
        a: "You will be given specific pre-operative instructions during your consultation. Generally, you may need to fast for 6–8 hours before the procedure. Bowel preparation may be required.",
      },
      {
        q: "What should I eat after laser piles treatment?",
        a: "A high-fibre diet (vegetables, fruits, whole grains) with plenty of water (8–10 glasses per day) is recommended. Avoid spicy, oily, and processed foods. Stool softeners may be prescribed for the first week.",
      },
      {
        q: "When can I bathe after the procedure?",
        a: "Most patients can take a warm sitz bath (sitting in warm water) within 24 hours of the procedure, which provides comfort and promotes healing.",
      },
    ],
  },
  {
    category: "About the Hospital",
    items: [
      {
        q: "Is Sunrise Piles Hospital NABH accredited?",
        a: "Yes. Sunrise Piles Hospital is NABH (National Accreditation Board for Hospitals) accredited, ensuring the highest standards of patient safety, hygiene, and quality care.",
      },
      {
        q: "Where is Sunrise Piles Hospital located?",
        a: "We are located at Mankar Chowk, Wakad, Pune – 411057, Maharashtra. We are conveniently located near Hinjewadi IT Park and easily accessible from Pimpri-Chinchwad and Baner.",
      },
      {
        q: "What are the hospital timings?",
        a: "We are open Monday to Saturday: 9:00 AM – 8:00 PM. Sunday consultations are available by appointment. Call +91 90969 65217 to book.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Expert answers to common questions about piles, fissure, fistula treatment and our hospital."
      />

      <section className="page-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 md:space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl sm:text-2xl font-bold text-heading mb-4 sm:mb-5 pb-2 border-b-2 border-[var(--border)]">
                {section.category}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-white rounded-2xl shadow border border-slate-100 overflow-hidden"
                  >
                    <summary className="flex justify-between items-start sm:items-center gap-3 px-4 sm:px-6 py-4 cursor-pointer list-none font-semibold text-[var(--navy)] hover:bg-brand-light transition-colors text-sm sm:text-base">
                      <span className="text-left">{faq.q}</span>
                      <span className="shrink-0 text-[var(--primary)] group-open:rotate-180 transition-transform duration-200">
                        ▼
                      </span>
                    </summary>
                    <div className="px-4 sm:px-6 pb-5 pt-1 text-slate-600 leading-relaxed border-t border-slate-100 text-sm sm:text-base">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-3">
            Still Have Questions?
          </h2>
          <p className="text-slate-600 text-sm md:text-base mb-6 md:mb-8">
            Contact Dr. Satish Jadhav&apos;s team directly — we&apos;re happy to answer any questions
            and help you book a consultation.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="tel:+919096965217"
              className="w-full sm:w-auto bg-[var(--primary-dark)] text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-[var(--navy)] transition-colors"
            >
              📞 Call Us
            </a>
            <a
              href="https://wa.me/919096965217"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto hero-btn-whatsapp px-6 sm:px-8 py-3"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
