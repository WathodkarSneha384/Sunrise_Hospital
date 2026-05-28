import Link from "next/link";
import Image from "next/image";
import DoctorImage from "@/components/DoctorImage";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";

const credentials = [
  { label: "MD", sub: "Medical Doctor" },
  { label: "FPC", sub: "Fellowship Proctology" },
  { label: "CCKS", sub: "Colorectal Surgery" },
  { label: "NABH", sub: "Certified Hospital" },
];

const achievements = [
  { value: "10+", label: "Years Experience" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "95%+", label: "Success Rate" },
  { value: "4.9★", label: "Google Rating" },
];

const specialties = [
  "Advanced Laser Piles Surgery",
  "VAAFT for Anal Fistula",
  "Laser Fissurectomy",
  "Diode Laser Proctology",
  "Daycare Procedures",
  "Anorectal Disorders",
];

const teamMembers = [
  { name: "Dr. Sarika Deokate", qualification: "MD Anaesthesia", role: "Anaesthesiologist", color: "from-blue-400 to-blue-600", initials: "SD", image: "/images/Dr-Sarika-Deokate.jpg" },
  { name: "Dr. Balaji Kadam", qualification: "MD Anaesthesia", role: "Anaesthesiologist", color: "from-teal-400 to-teal-600", initials: "BK", image: null },
  { name: "Dr. Akshay Chipare", qualification: "MD Medicine", role: "General Physician", color: "from-green-500 to-green-700", initials: "AC", image: "/images/Dr Akshay Chipare.jpg" },
  { name: "Dr. Suraj Gadiwal", qualification: "MBBS", role: "Medical Officer", color: "from-purple-400 to-purple-600", initials: "SG", image: "/images/Dr Suraj.jpg" },
];

export default function DoctorSection() {
  return (
    <section className="section-padding section-alt" id="doctor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Expert Care"
            title="Meet Your"
            highlight="Specialist"
            description="Experienced, compassionate, and dedicated to your recovery."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-6">
          <div className="h-1.5 bg-[var(--primary)]" />

          <div className="lg:grid lg:grid-cols-12">

            {/* Left profile panel — wider */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 md:p-8 lg:p-10 bg-[var(--primary-light)] lg:border-r border-b lg:border-b-0 border-slate-200">
              <div className="relative mb-5">
                <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <DoctorImage size={192} className="w-full h-full object-cover object-top" />
                </div>
                {/* Available badge */}
                <div className="absolute -bottom-2 -right-2 bg-[var(--primary)] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Available
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[var(--navy)] text-center">Dr. Satish Jadhav</h3>
              <p className="text-[var(--primary)] font-bold text-sm md:text-base text-center mt-1">MD · FPC · CCKS</p>
              <p className="text-slate-500 text-sm md:text-base text-center mt-1">Senior Proctologist &amp; Laser Surgeon</p>

              {/* Rating */}
              <div className="flex flex-col items-center mt-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-500 text-xs mt-1">4.9 / 5 — 200+ Google Reviews</p>
              </div>

              {/* Credential badges */}
              <div className="grid grid-cols-2 gap-2.5 mt-6 w-full max-w-sm">
                {credentials.map(c => (
                  <div key={c.label} className="bg-white rounded-xl p-3 text-center border border-slate-200 shadow-sm">
                    <p className="text-base font-black text-[var(--primary)]">{c.label}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 bg-[var(--primary-light)] border border-[var(--primary)]/30 rounded-full px-3 py-1.5 text-sm font-semibold text-[var(--primary)] mb-5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified Specialist
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                Dr. Satish Jadhav is a leading proctologist with over{" "}
                <strong className="text-[var(--navy)]">10 years of specialised experience</strong> in advanced laser proctology. He has successfully treated 5,000+ patients for piles, fissure, and fistula using state-of-the-art diode laser technology at Sunrise Piles Hospital, Wakad Pune.
                <br /><br />
                His expertise in <strong className="text-[var(--navy)]">VAAFT (Video-Assisted Anal Fistula Treatment)</strong> and daycare laser surgery has made Sunrise Piles Hospital one of the most trusted anorectal centres in Pune with a <strong className="text-[var(--navy)]">95%+ success rate</strong>.
              </p>

              {/* Achievement stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                {achievements.map(a => (
                  <div key={a.label} className="bg-[var(--primary-light)] border border-slate-200 rounded-xl p-3 text-center">
                    <p className="text-xl font-black text-[var(--primary)]">{a.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{a.label}</p>
                  </div>
                ))}
              </div>

              {/* Specialties */}
              <div>
                <p className="text-[var(--primary)] text-xs font-bold uppercase tracking-widest mb-3">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {specialties.map(s => (
                    <span key={s} className="text-xs bg-[var(--primary-light)] border border-[var(--primary)]/20 text-[var(--navy)] px-3 py-1.5 rounded-full font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                <Link
                  href="/about"
                  className="btn-primary text-sm px-6 py-2.5"
                >
                  Full Profile
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+919096965217"
                  className="inline-flex items-center gap-2 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Consult Now
                </a>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>

        {/* Supporting team */}
        <div>
          <h3 className="text-xl font-black text-[var(--navy)] mb-6 text-center">Our Support Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="group bg-white rounded-2xl p-5 text-center border border-slate-200 hover:border-[var(--primary)]/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-0.5 bg-[var(--primary)] -mx-5 -mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-20 h-20 rounded-2xl mx-auto mb-4 overflow-hidden group-hover:scale-105 transition-transform shadow-sm">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {member.initials}
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-[var(--navy)] text-sm">{member.name}</h4>
                <p className="text-[var(--primary)] text-xs font-semibold mt-0.5">{member.qualification}</p>
                <p className="text-slate-400 text-xs mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
