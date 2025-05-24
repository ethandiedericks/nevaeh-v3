import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Nevaeh Solutions",
  description:
    "Explore Nevaeh Solutions' comprehensive software development services including web applications, mobile apps, landing pages, and full-scale websites tailored for your business.",
  keywords: [
    "web application development",
    "mobile app development",
    "landing page design",
    "full-scale websites",
    "custom software solutions",
    "responsive web design",
    "progressive web apps",
    "enterprise applications",
    "e-commerce platforms",
    "iOS app development",
    "Android app development",
    "cross-platform mobile solutions",
    "UI/UX design",
    "conversion optimization",
    "SEO-friendly websites",
    "custom business portals",
    "South Africa software development",
    "end-to-end development services",
  ],
  openGraph: {
    title: "Nevaeh Solutions | Comprehensive Software Development Services",
    description:
      "From web applications to mobile apps, discover how our tailored development services can transform your digital presence.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
  },
  twitter: {
    title: "Nevaeh Solutions | Comprehensive Software Development Services",
    description:
      "Explore our full range of software development services designed to help your business thrive in the digital landscape.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
