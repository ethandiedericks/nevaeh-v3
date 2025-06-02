import type { Metadata as NextMetadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import Script from "next/script";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { PostHogProvider } from "@/components/PostHogProvider";
import WhatsAppButton from "@/components/WhatsappButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type Metadata = NextMetadata;

const GOOGLE_VERIFICATION = process.env.GOOGLE_VERIFICATION || "";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.nevaeh.co.za";
const OG_IMAGE_URL =
  process.env.NEXT_PUBLIC_OG_IMAGE_URL || "/opengraph-image.jpg";
const TWITTER_IMAGE_URL =
  process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || "/opengraph-image.jpg";

export const metadata: Metadata = {
  title: "Home | Nevaeh Solutions",
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
    title: "Nevaeh Solutions | Web & Mobile App Experts South Africa",
    description:
      "Nevaeh Solutions provides expert custom software development, mobile app creation, and enterprise-grade web app solutions for businesses across South Africa.",
    url: BASE_URL,
    siteName: "Nevaeh Solutions",
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
  twitter: {
    card: "summary_large_image",
    title: "Nevaeh Solutions | Web & Mobile App Experts South Africa",
    description:
      "Custom web app and mobile app development solutions by Nevaeh Solutions (Pty) Ltd in Port Elizabeth, South Africa. We build powerful, scalable digital products for your business.",
    images: [TWITTER_IMAGE_URL],
    creator: "@nevaehsolutions",
  },
  verification: {
    google: GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: BASE_URL,
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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nevaeh.co.za";

  const mainStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nevaeh Solutions",
    alternateName: "Nevaeh Solutions (Pty) Ltd",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nevaeh Solutions",
    image: `${baseUrl}/assets/images/Full%20Logo%20Black.webp`,
    "@id": `${baseUrl}/#professionalservice`,
    url: baseUrl,
    telephone: "+27812799063",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.facebook.com/nevaehsolutions",
      "https://www.instagram.com/nevaehsolutions/",
      "https://www.linkedin.com/company/nevaeh-solutions-pty-ltd/",
      "https://za.pinterest.com/nevaehsolutions/",
    ],
    priceRange: "$$$",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${baseUrl}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Faq",
        item: `${baseUrl}/faq`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: `${baseUrl}/contact`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Site Map",
        item: `${baseUrl}/navigation`,
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased text-white`}>
        <PostHogProvider>
          <Script
            id="main-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(mainStructuredData),
            }}
          />
          <Script
            id="service-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceStructuredData),
            }}
          />
          <Script
            id="breadcrumb-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbStructuredData),
            }}
          />
          <Navbar />
          <main>{children}</main>
          <CookieConsentBanner />

          <Toaster
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast:
                  "bg-gradient-to-r from-[#001e05] via-black to-black text-white",
              },
            }}
          />
          <WhatsAppButton />
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
