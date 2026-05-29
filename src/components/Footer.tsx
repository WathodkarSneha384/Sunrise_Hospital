import Link from "next/link";
import SiteLogo from "@/components/SiteLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Dr. Jadhav", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const treatmentLinks = [
  { label: "Piles Treatment", href: "/treatments/piles" },
  { label: "Fissure Treatment", href: "/treatments/fissure" },
  { label: "Fistula Treatment", href: "/treatments/fistula" },
  { label: "Laser Surgery", href: "/treatments/laser-surgery" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-white/10">
          <div className="col-span-2 lg:col-span-1">
            <SiteLogo className="h-[68px] sm:h-[76px] w-auto object-contain mb-5" />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              NABH accredited centre for advanced laser treatment of Piles, Fissure &amp; Fistula.
              5,000+ successful procedures in Wakad, Pune.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://wa.me/919096965217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-[var(--primary)] border border-white/15 text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-all"
              >
                WhatsApp
              </a>
              <a
                href="tel:+919096965217"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-[var(--primary)] border border-white/15 text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-all"
              >
                Call Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">Treatments</h4>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/55 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">Contact</h4>
            <address className="not-italic space-y-4 text-sm text-white/55">
              <a
                href="https://maps.app.goo.gl/bdXK12WvjzaNNDNMA"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Mankar Chowk, Wakad, Pune – 411057
              </a>
              <a href="tel:+919096965217" className="block hover:text-white transition-colors font-medium">
                +91 90969 65217
              </a>
              <a href="mailto:info@sunrisepileshospital.com" className="block hover:text-white transition-colors">
                info@sunrisepileshospital.com
              </a>
              <p className="text-white/40">Mon–Sat: 9 AM – 8 PM · Sun: By Appointment</p>
            </address>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Sunrise Piles Hospital. All rights reserved.</p>
          <p>NABH Accredited · Daycare Laser · Insurance Accepted</p>
        </div>
      </div>
    </footer>
  );
}
