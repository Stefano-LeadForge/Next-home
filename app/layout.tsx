import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import StaticNav from "@/components/StaticNav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "NextHome — Luxury Real Estate",
  description: "La tua agenzia immobiliare di fiducia",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RealEstateAgent", "Organization"],
      "@id": "https://nexthomemilano.it/#organization",
      "name": "NextHome Milano",
      "url": "https://nexthomemilano.it",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexthomemilano.it/logo.png",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Paolo da Cannobio, 9",
        "addressLocality": "Milano",
        "postalCode": "20122",
        "addressCountry": "IT",
      },
      "telephone": "+39 02 89744815",
      "email": "info@nexthomemilano.it",
      "sameAs": [
        "https://www.instagram.com/nexthome_milano/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nexthomemilano.it/#website",
      "name": "NextHome Milano",
      "url": "https://nexthomemilano.it",
      "publisher": {
        "@id": "https://nexthomemilano.it/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <StaticNav />
        <SmoothScrolling>
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
