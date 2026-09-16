import type { Metadata } from "next";
import "./globals.css";

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://optima-seo.vercel.app"),

  title: {
    default: "Plant Logistics Management Software | OPTIMA",
    template: "%s | OPTIMA",
  },

  description:
    "OPTIMA is a plant logistics and transportation management platform for vehicle induction, fleet tracking, dispatch, compliance, route optimization and delivery operations.",

     verification: {
    google: "qaRCj5d26bALksXmAjMpfOHTvu4FYxqfIiVcDabpim4",
  },

  keywords: [
    "plant logistics management software",
    "transportation management system",
    "fleet management software",
    "vehicle management system",
    "GPS fleet tracking",
    "vehicle tracking system",
    "logistics management software",
    "route optimization software",
    "plant transportation management",
  ],

  authors: [
    {
      name: "OPTIMA",
    },
  ],

  creator: "OPTIMA",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://optima-seo.vercel.app",
    siteName: "OPTIMA",

    title: "Plant Logistics Management Software | OPTIMA",

    description:
      "Manage plant logistics, vehicle induction, fleet tracking, dispatch, compliance, route optimization and delivery operations with OPTIMA.",

    images: [
      {
        url: "/video-poster.jpg",
        width: 1200,
        height: 630,
        alt: "OPTIMA Plant Logistics and Transportation Management Platform",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://optima-seo.vercel.app",
  },
};

/* =========================================================
   STRUCTURED DATA / JSON-LD
========================================================= */

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://optima-seo.vercel.app/#organization",
      name: "OPTIMA",
      url: "https://optima-seo.vercel.app",
    },

    {
      "@type": "WebSite",
      "@id": "https://optima-seo.vercel.app/#website",
      url: "https://optima-seo.vercel.app",
      name: "OPTIMA",
      publisher: {
        "@id": "https://optima-seo.vercel.app/#organization",
      },
    },

    {
      "@type": "SoftwareApplication",
      "@id": "https://optima-seo.vercel.app/#software",
      name: "OPTIMA",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://optima-seo.vercel.app",
      description:
        "OPTIMA is a plant logistics and transportation management platform for vehicle induction, fleet tracking, dispatch, compliance, route optimization and delivery operations.",
      publisher: {
        "@id": "https://optima-seo.vercel.app/#organization",
      },
    },
  ],
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}