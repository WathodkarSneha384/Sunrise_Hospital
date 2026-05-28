"use client";

import { useState, FormEvent } from "react";

const CONDITIONS = [
  "Piles (Haemorrhoids)",
  "Anal Fissure",
  "Anal Fistula",
  "Constipation",
  "Rectal Bleeding",
  "Rectal Prolapse",
  "Not sure — need consultation",
];

const TIME_SLOTS = [
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
  "Any time",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    condition: "",
    timeSlot: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const text = [
      `Hello, I would like to book an appointment at Sunrise Piles Hospital.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Condition:* ${form.condition || "Not specified"}`,
      `*Preferred Time:* ${form.timeSlot || "Any time"}`,
      form.message ? `*Additional Info:* ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919096965217?text=${encoded}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-[var(--navy)] mb-2">
          WhatsApp Opened!
        </h3>
        <p className="text-gray-600 mb-6">
          Your appointment details have been pre-filled in WhatsApp. Just hit
          send and our team will confirm your slot.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[var(--primary)] font-medium hover:text-[var(--primary-dark)] underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6 sm:mb-7">
        <div className="bg-brand-light rounded-xl p-2.5">
          <svg viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[var(--navy)]">Book via WhatsApp</h2>
          <p className="text-gray-500 text-sm">Instant confirmation from our team</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            WhatsApp / Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Condition / Concern
          </label>
          <select
            name="condition"
            value={form.condition}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
          >
            <option value="">Select your condition…</option>
            {CONDITIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Preferred time */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Preferred Time Slot
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => setForm((p) => ({ ...p, timeSlot: slot }))}
                className={`px-3 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left sm:text-center ${
                  form.timeSlot === slot
                    ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow"
                    : "border-gray-200 text-gray-600 hover:border-[var(--primary)] hover:text-[var(--primary-dark)]"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Extra message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Additional Information <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="Briefly describe your symptoms or any questions…"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full hero-btn-whatsapp py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send via WhatsApp
        </button>

        <p className="text-gray-400 text-xs text-center">
          Clicking the button will open WhatsApp with your details pre-filled.
          We typically respond within 15 minutes during working hours.
        </p>
      </form>
    </div>
  );
}
