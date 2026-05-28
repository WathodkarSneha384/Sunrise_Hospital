import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Sunrise Piles Hospital Wakad Pune",
  description:
    "Contact Sunrise Piles Hospital, Wakad, Pune. Call +91 9096965217, WhatsApp, or visit us at Mankar Chowk, Wakad. Mon–Sat 9 AM to 8 PM. Book your appointment today.",
  alternates: { canonical: "https://sunrisepileshospital.com/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Book an appointment or get your queries answered. We're here to help you recover."
      />

      <section className="page-section">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-heading">Get in Touch</h2>

              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    title: "Address",
                    content: "Mankar Chowk, Wakad, Pune – 411057, Maharashtra",
                    link: "https://maps.google.com/?q=Sunrise+Piles+Hospital+Wakad+Pune",
                    linkText: "Get Directions →",
                  },
                  {
                    icon: "📞",
                    title: "Phone",
                    content: "+91 90969 65217",
                    link: "tel:+919096965217",
                    linkText: "Call Now →",
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    content: "info@sunrisepileshospital.com",
                    link: "mailto:info@sunrisepileshospital.com",
                    linkText: "Send Email →",
                  },
                  {
                    icon: "🕐",
                    title: "Working Hours",
                    content: "Mon–Sat: 9:00 AM – 8:00 PM\nSunday: By Appointment",
                    link: null,
                    linkText: null,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-brand-light rounded-2xl">
                    <span className="text-2xl sm:text-3xl shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-[var(--navy)]">{item.title}</p>
                      <p className="text-slate-600 text-sm whitespace-pre-line mt-0.5 break-words">
                        {item.content}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[var(--primary)] text-sm font-medium hover:text-[var(--primary-dark)] mt-1 inline-block"
                        >
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919096965217?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hero-btn-whatsapp px-6 py-4 rounded-xl font-semibold w-full justify-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp: +91 90969 65217
              </a>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-56 sm:h-72 min-h-[14rem]">
                <iframe
                  src="https://maps.google.com/maps?q=Sunrise+Piles+Hospital+Mankar+Chowk+Wakad+Pune+411057&output=embed&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sunrise Piles Hospital, Mankar Chowk, Wakad, Pune"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/bdXK12WvjzaNNDNMA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-light hover:bg-[var(--border)] text-[var(--navy)] font-medium py-3 rounded-xl transition-colors text-sm border border-brand"
              >
                📍 Open in Google Maps →
              </a>

              <div className="bg-[var(--navy)] text-white rounded-2xl p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3">Book an Appointment</h3>
                <p className="text-white/75 text-sm mb-5">
                  Call or WhatsApp us to schedule your consultation. Same-day appointments are
                  available.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919096965217"
                    className="flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white py-3 rounded-xl font-semibold transition-colors w-full text-sm sm:text-base"
                  >
                    📞 Call: +91 90969 65217
                  </a>
                  <a
                    href="mailto:info@sunrisepileshospital.com"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-colors w-full border border-white/20 text-sm sm:text-base"
                  >
                    ✉️ Email Us
                  </a>
                </div>
                <p className="text-white/60 text-xs mt-4 text-center">
                  Insurance queries? We accept PMJAY, ESI &amp; most private plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
