import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";

const treatmentCards = [
  {
    title: "Piles (Hemorrhoids)",
    desc: "Laser & stapler surgery for all grades. Same-day discharge.",
    href: "/treatments/piles",
    anchor: "#piles",
    image: "/Pilse-Fissure,Fistula/piles.jpg",
    tag: "Most Common",
  },
  {
    title: "Fissure in Ano",
    desc: "Laser LIS for chronic fissure. Fast healing, minimal pain.",
    href: "/treatments/fissure",
    anchor: "#fissure",
    image: "/Pilse-Fissure,Fistula/fissure.jpg",
    tag: "Highly Treatable",
  },
  {
    title: "Fistula in Ano",
    desc: "DLAFT laser fistulotomy. Very low recurrence rate.",
    href: "/treatments/fistula",
    anchor: "#fistula",
    image: "/Pilse-Fissure,Fistula/fistula.jpg",
    tag: "Laser Surgery",
  },
  {
    title: "Laser Surgery",
    desc: "No stitches. 45-min daycare procedures.",
    href: "/treatments/laser-surgery",
    anchor: "#laser",
    image: "/Assset/img3.jpg",
    tag: "Latest Tech",
  },
];

export default function TreatmentsOverview() {
  return (
    <section id="our-treatments" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Our Specialities"
            title="Advanced Treatment for"
            highlight="Anorectal Conditions"
            description="Expert laser proctology for piles, fissure, and fistula — the same trusted care you'd expect from India's leading specialty hospitals."
          />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 stagger-children">
          {treatmentCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 80}>
              <Link
                href={card.anchor}
                className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[var(--primary-dark)] px-2.5 py-1 rounded-full">
                    {card.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--navy)] text-base mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="text-center mt-6">
          <Link href="/treatments" className="btn-outline text-sm">
            View All Treatments
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
