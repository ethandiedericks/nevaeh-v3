import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing | Nevaeh Solutions | Web & Mobile Development South Africa",
  description:
    "Explore Nevaeh Solutions' transparent pricing for websites, web applications, and mobile app development. Find the perfect service package for your business needs.",
  keywords: [
    "software development pricing",
    "website pricing",
    "mobile app pricing",
    "web application costs",
    "custom website packages",
    "affordable web development",
    "mobile app development costs",
    "South Africa development services",
    "single page website pricing",
    "multi-page website pricing",
    "web app development packages",
    "mobile app development packages",
    "software development rates",
    "transparent pricing",
    "development service options",
    "business website costs",
    "ecommerce website pricing",
    "professional web development",
  ],
  openGraph: {
    title: "Nevaeh Solutions Pricing & Service Options",
    description:
      "Discover our range of web and mobile development services with transparent pricing for businesses of all sizes.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
  },
  twitter: {
    title: "Nevaeh Solutions Pricing & Service Options",
    description:
      "Find the perfect development package for your business with our transparent pricing and flexible service options.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
