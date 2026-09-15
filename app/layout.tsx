import type { Metadata } from "next";

import "./globals.css";

import { Inter, Playfair_Display } from "next/font/google";

import { LayoutProvider } from "./LayoutProvider";


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
  metadataBase: new URL(
    "https://ramki-optima-fyw5.vercel.app"
  ),

  title: {
    default: "Plant Logistics Management Software | OPTIMA",
    template: "%s | OPTIMA",
  },

  description:
    "OPTIMA is a plant logistics and transportation management platform for vehicle induction, fleet tracking, dispatch, compliance, route optimization and delivery operations.",

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
    url: "https://ramki-optima-fyw5.vercel.app",
    siteName: "OPTIMA",

    title:
      "Plant Logistics Management Software | OPTIMA",

    description:
      "Manage plant logistics, vehicle induction, fleet tracking, dispatch, compliance, route optimization and delivery operations with OPTIMA.",

    images: [
      {
        url: "/video-poster.jpg",
        width: 1200,
        height: 630,
        alt:
          "OPTIMA Plant Logistics and Transportation Management Platform",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://ramki-optima-fyw5.vercel.app",
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

      "@id":
        "https://ramki-optima-fyw5.vercel.app/#organization",

      name: "OPTIMA",

      url: "https://ramki-optima-fyw5.vercel.app",

      email: "info@ramkigroup.com",
    },

    {
      "@type": "WebSite",

      "@id":
        "https://ramki-optima-fyw5.vercel.app/#website",

      url: "https://ramki-optima-fyw5.vercel.app",

      name: "OPTIMA",

      publisher: {
        "@id":
          "https://ramki-optima-fyw5.vercel.app/#organization",
      },
    },

    {
      "@type": "SoftwareApplication",

      "@id":
        "https://ramki-optima-fyw5.vercel.app/#software",

      name: "OPTIMA",

      applicationCategory: "BusinessApplication",

      operatingSystem: "Web",

      url: "https://ramki-optima-fyw5.vercel.app",

      description:
        "OPTIMA is a plant logistics and transportation management platform for vehicle induction, fleet tracking, dispatch, compliance, route optimization and delivery operations.",

      publisher: {
        "@id":
          "https://ramki-optima-fyw5.vercel.app/#organization",
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
        {/* =================================================
            JSON-LD STRUCTURED DATA
        ================================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* =================================================
            APPLICATION LAYOUT
        ================================================= */}

        <LayoutProvider>
          

          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}