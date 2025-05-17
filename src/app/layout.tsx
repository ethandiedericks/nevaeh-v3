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

const GOOGLE_VERIFICATION = process.env.GOOGLE_VERIFICATION || "";

export const metadata: Metadata = {
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
  openGraph: {
    title:
      "Nevaeh Solutions | Custom Web & Mobile App Development South Africa",
    description:
      "Nevaeh Solutions (Pty) Ltd provides expert custom software development, mobile app creation, and enterprise-grade web app solutions for businesses across South Africa.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Nevaeh Solutions (Pty) Ltd",
    images: [
      {
        url: process.env.NEXT_PUBLIC_OG_IMAGE_URL || "/opengraph-image.jpg",
        height: 630,
        alt: "Nevaeh Solutions Logo",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nevaeh Solutions | Web & Mobile App Experts South Africa",
    description:
      "Custom web app and mobile app development solutions by Nevaeh Solutions (Pty) Ltd in Port Elizabeth, South Africa. We build powerful, scalable digital products for your business.",
    images: [
      process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || "/opengraph-image.jpg",
    ],
  },
  verification: {
    google: GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nevaeh Solutions (Pty) Ltd",
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
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={` ${inter.variable} scheme-dark antialiased text-white `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
