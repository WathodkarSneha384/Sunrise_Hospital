import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { APPLE_TOUCH_ICON, FAVICON_ICO, FAVICON_PNG } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Sunrise Piles Hospital Pune | Best Piles Fissure Fistula Laser Treatment in Wakad, Pune",
    template: "%s | Sunrise Piles Hospital Pune",
  },
  description:
    "Sunrise Piles Hospital – Advanced Laser Proctology Centre in Wakad, Pune. Expert treatment for Piles, Fissure & Fistula with laser surgery. No stitches. 5000+ patients treated. NABH accredited. Call: +91 9096965217",
  keywords: [
    "piles treatment Pune",
    "laser piles surgery Wakad",
    "fissure treatment Pune",
    "fistula treatment Pune",
    "best piles doctor Pune",
    "Dr Satish Jadhav proctologist",
    "advanced laser proctology Wakad",
    "NABH piles hospital Pune",
    "painless piles treatment",
    "daycare piles surgery Pune",
  ],
  authors: [{ name: "Dr. Satish Jadhav" }],
  creator: "Sunrise Piles Hospital",
  publisher: "Sunrise Piles Hospital",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sunrise Piles Hospital",
    title: "Sunrise Piles Hospital Pune | Best Piles Fissure Fistula Laser Treatment in Wakad, Pune",
    description:
      "Expert Laser Treatment for Piles, Fissure & Fistula. NABH Accredited. 5000+ patients treated. Daycare procedures. No stitches.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunrise Piles Hospital Pune | Best Piles Fissure Fistula Laser Treatment in Wakad, Pune",
    description:
      "Advanced Laser Proctology Centre in Wakad, Pune. 5000+ patients treated. NABH Accredited.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://sunrisepileshospital.com",
  },
  icons: {
    icon: [
      { url: FAVICON_ICO, sizes: "any" },
      { url: FAVICON_PNG, type: "image/png", sizes: "32x32" },
    ],
    shortcut: FAVICON_ICO,
    apple: [{ url: APPLE_TOUCH_ICON, type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-[family-name:var(--font-montserrat)]">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
