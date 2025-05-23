import type { Metadata as NextMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type Metadata = NextMetadata;

const GOOGLE_VERIFICATION = process.env.GOOGLE_VERIFICATION || "";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://nevaeh.co.za";
const OG_IMAGE_URL =
  process.env.NEXT_PUBLIC_OG_IMAGE_URL || "/opengraph-image.jpg";
const TWITTER_IMAGE_URL =
  process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || "/opengraph-image.jpg";

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

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Nevaeh Solutions (Pty) Ltd",
    alternateName: "Nevaeh Solutions",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/Full%20Logo%20Black.webp`,
    image: `${baseUrl}/assets/images/Full%20Logo%20Black.webp`,
    description:
      "Expert custom software development, mobile app creation, and enterprise-grade web app solutions for businesses across South Africa.",
    telephone: "+27812799063",
    email: "info@nevaeh.co.za", // Add your actual email
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Elizabeth (Gqeberha)",
      addressRegion: "Eastern Cape",
      postalCode: "6001", // Add actual postal code
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.929497441583706,
      longitude: 25.47286134368047,
    },
    foundingDate: "2020", // Add actual founding date
    numberOfEmployees: "2-10", // Adjust as needed
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    serviceArea: {
      "@type": "Country",
      name: "South Africa",
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Custom Software Development",
      "API Development",
      "React Development",
      "Next.js Development",
      ".NET Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Application Development",
            description:
              "Custom web applications built for performance and scalability",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Application Development",
            description:
              "Native and cross-platform mobile apps for iOS and Android",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description: "Professional, conversion-focused websites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Development",
            description: "Robust, secure, and scalable APIs built with .NET",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/nevaehsolutions",
      "https://www.instagram.com/nevaehsolutions/",
      "https://www.linkedin.com/company/nevaeh-solutions-pty-ltd/",
      "https://za.pinterest.com/nevaehsolutions/",
    ],
  };

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Nevaeh Solutions (Pty) Ltd",
    image: `${baseUrl}/assets/images/Full%20Logo%20Black.webp`,
    url: baseUrl,
    telephone: "+27812799063",
    email: "info@nevaeh.co.za", // Add your actual email
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address", // Add actual street address
      addressLocality: "Port Elizabeth (Gqeberha)",
      addressRegion: "Eastern Cape",
      postalCode: "6001", // Add actual postal code
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.929497441583706,
      longitude: 25.47286134368047,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0", // Only include if you have actual reviews
      reviewCount: "12", // Only include if you have actual reviews
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Nevaeh Solutions",
    alternateName: "Nevaeh Solutions (Pty) Ltd",
    url: baseUrl,
    description:
      "Expert custom software development, mobile app creation, and enterprise-grade web app solutions for businesses across South Africa.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    mainEntity: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": ["Service", "ProfessionalService"],
    "@id": `${baseUrl}/#service`,
    name: "Custom Software Development Services",
    description:
      "Comprehensive software development services including web applications, mobile apps, websites, and API development for businesses across South Africa.",
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Web Application Development",
          description:
            "Secure, scalable, and tailored web apps built for performance",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "ZAR",
            price: "Contact for quote",
          },
        },
        {
          "@type": "Offer",
          name: "Mobile Application Development",
          description:
            "High-performance native and cross-platform apps for iOS and Android",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "ZAR",
            price: "Contact for quote",
          },
        },
        {
          "@type": "Offer",
          name: "Website Development",
          description: "Professional, conversion-focused websites",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "ZAR",
            price: "Contact for quote",
          },
        },
        {
          "@type": "Offer",
          name: "API Development",
          description: "Robust, secure, and scalable APIs built with .NET",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "ZAR",
            price: "Contact for quote",
          },
        },
      ],
    },
    category: "Software Development",
    serviceType: "Custom Software Development",
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
        name: "Services",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pricing",
        item: `${baseUrl}/pricing`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "About",
        item: `${baseUrl}/about`,
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
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased text-white`}>
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <Script
          id="local-business-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessStructuredData),
          }}
        />
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
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
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast:
                "bg-gradient-to-r from-[#001e05] via-black to-black text-white",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
