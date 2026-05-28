import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import TreatmentsOverview from "@/components/sections/TreatmentsOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import DoctorSection from "@/components/sections/DoctorSection";
import Testimonials from "@/components/sections/Testimonials";
import InsuranceCTA from "@/components/sections/InsuranceCTA";

export const metadata: Metadata = {
  title: "Piles, Fissure & Fistula Treatment in Wakad Pune | Sunrise Piles Hospital",
  description:
    "Sunrise Piles Hospital – Best piles treatment in Wakad, Pune. Painless laser surgery for Piles, Fissure & Fistula. NABH accredited. 5000+ patients. No cuts, no stitches. Same-day discharge. Call +91 9096965217.",
  alternates: {
    canonical: "https://sunrisepileshospital.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TreatmentsOverview />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <DoctorSection />
      <Testimonials />
      <InsuranceCTA />
    </>
  );
}
