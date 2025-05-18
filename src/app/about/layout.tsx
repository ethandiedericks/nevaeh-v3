// src/app/about/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About | Nevaeh Solutions | Mobile & Web Development Experts in South Africa",
  description:
    "Nevaeh Solutions (Pty) Ltd is a leading South African software development company specializing in mobile apps, web applications, responsive websites, and custom API solutions. Get expert development services tailored to your business needs.",
  keywords: [
    "Nevaeh Solutions",
    "mobile app development",
    "web application",
    "website development",
    "API development",
    "South Africa developers",
    "custom software solutions",
    "responsive web design",
    "landing page creation",
    "software company South Africa",
  ],
  openGraph: {
    title: "Nevaeh Solutions | Custom Software Development in South Africa",
    description:
      "Discover Nevaeh Solutions' mission, values, and approach to software development, delivering innovative web and mobile solutions.",
    url: "https://yourdomain.com/about",
  },
  twitter: {
    title: "Nevaeh Solutions | Custom Software Development in South Africa",
    description:
      "Explore our mission, expertise, and approach to custom software development at Nevaeh Solutions (Pty) Ltd.",
  },
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
