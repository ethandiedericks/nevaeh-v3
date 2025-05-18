/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata as NextMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type Metadata = NextMetadata & {
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
};

// Use environment variables for configurable values
const GOOGLE_VERIFICATION = process.env.GOOGLE_VERIFICATION || "";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://nevaeh.co.za";
const OG_IMAGE_URL =
  process.env.NEXT_PUBLIC_OG_IMAGE_URL || "/opengraph-image.jpg";
const TWITTER_IMAGE_URL =
  process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || "/opengraph-image.jpg";

export const metadata: Metadata = {
  // Basic metadata
  title: "Nevaeh Solutions | Custom Web & Mobile App Development South Africa",
  description:
    "Nevaeh Solutions (Pty) Ltd provides expert custom software development, mobile app creation, and enterprise-grade web app solutions for businesses across South Africa.",
  keywords: [
    "Nevaeh Solutions",
    "custom software development",
    "web app development",
    "mobile app development",
    "business software solutions",
    "Port Elizabeth developers",
    "Gqeberha software company",
    "South Africa app developers",
    "responsive website development",
    "API development services",
  ],

  // Open Graph metadata for social sharing
  openGraph: {
    title:
      "Nevaeh Solutions | Custom Web & Mobile App Development South Africa",
    description:
      "Nevaeh Solutions provides expert custom software development, mobile app creation, and enterprise-grade web app solutions for businesses across South Africa.",
    url: BASE_URL,
    siteName: "Nevaeh Solutions (Pty) Ltd",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Nevaeh Solutions Logo",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Nevaeh Solutions | Web & Mobile App Experts South Africa",
    description:
      "Custom web app and mobile app development solutions by Nevaeh Solutions (Pty) Ltd in Port Elizabeth, South Africa. We build powerful, scalable digital products for your business.",
    images: [TWITTER_IMAGE_URL],
    creator: "@nevaehsolutions", // Added based on best practices
  },

  // Verification tokens
  verification: {
    google: GOOGLE_VERIFICATION,
  },

  // Canonical URL
  alternates: {
    canonical: BASE_URL,
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicon and icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // Structured data for SEO
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nevaeh Solutions",
      legalName: "Nevaeh Solutions (Pty) Ltd",
      url: "https://nevaeh.co.za",
      logo: "https://nevaeh.co.za/assets/images/Full%20Logo%20Black.webp",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+27812799063",
        contactType: "customer service",
        areaServed: "ZA",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.facebook.com/nevaehsolutions",
        "https://www.instagram.com/nevaehsolutions/",
        "https://www.linkedin.com/company/nevaeh-solutions-pty-ltd/",
        "https://za.pinterest.com/nevaehsolutions/",
      ],
    },

    // Local Business schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Nevaeh Solutions (Pty) Ltd",
      image: "https://nevaeh.co.za/assets/images/Full%20Logo%20Black.webp",
      telephone: "+27812799063",
      url: "https://nevaeh.co.za",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Port Elizabeth",
        addressRegion: "Eastern Cape",
        addressCountry: "ZA",
      },

      geo: {
        "@type": "GeoCoordinates",
        latitude: "-33.929497441583706",
        longitude: "25.47286134368047",
      },
    },
  ],

  // Additional metadata
  applicationName: "Nevaeh Solutions",
  authors: [{ name: "Nevaeh Solutions" }],
  generator: "Next.js",
  publisher: "Nevaeh Solutions (Pty) Ltd",
  category: "Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
