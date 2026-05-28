import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Book Appointment | Sunrise Piles Hospital Wakad Pune",
  description:
    "Book an appointment at Sunrise Piles Hospital, Wakad, Pune. Consult Dr. Satish Jadhav for Piles, Fissure & Fistula treatment. Same-day appointments available. Call +91 9096965217.",
  alternates: { canonical: "https://sunrisepileshospital.com/book-appointment" },
};

export default function BookAppointmentPage() {
  return (
    <div>
      <PageHero
        title="Book an Appointment"
        subtitle="Fill in your details below — we'll open a WhatsApp chat so you can confirm your appointment instantly."
      />

      <section className="page-section bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-5 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-bold text-heading">Why Book with Us?</h2>
              <ul className="space-y-4">
                {[
                  { icon: "⚡", title: "Same-Day Appointments", desc: "We usually have slots available on the same day you call." },
                  { icon: "💬", title: "Instant WhatsApp Confirmation", desc: "Your booking request goes straight to our team via WhatsApp." },
                  { icon: "🏥", title: "Daycare Procedures", desc: "Come in the morning, go home by evening — no overnight stay." },
                  { icon: "💳", title: "Insurance Handled", desc: "Our team will guide you through cashless insurance claims." },
                  { icon: "🔒", title: "Confidential", desc: "Your details and medical information are completely private." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-[var(--navy)] text-sm sm:text-base">{item.title}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-[var(--navy)] text-white rounded-2xl p-5 mt-4 sm:mt-6">
                <p className="font-semibold mb-1 text-sm sm:text-base">Prefer to call directly?</p>
                <a
                  href="tel:+919096965217"
                  className="text-[var(--accent)] text-base sm:text-lg font-bold hover:text-white transition-colors"
                >
                  📞 +91 90969 65217
                </a>
                <p className="text-white/60 text-xs mt-1">Mon–Sat: 9 AM – 8 PM</p>
              </div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
