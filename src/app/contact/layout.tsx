import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Nevaeh Solutions | Mobile & Web Development Experts in South Africa",
  description:
    "Contact Nevaeh Solutions (Pty) Ltd for expert software development services, including websites, mobile apps, web apps, and API solutions. Let's bring your project to life!",
  keywords: [
    "software development services",
    "web development",
    "mobile app development",
    "API development",
    "custom website development",
    "full-stack development",
    "frontend development",
    "backend development",
    "ecommerce website development",
    "business software solutions",
    "Next.js development",
    "React development",
    "Flutter app development",
    "UI/UX design",
    "custom software solutions",
    "enterprise software development",
    "SEO-friendly websites",
    "South Africa software company",
  ],
  openGraph: {
    title: "Contact Nevaeh Solutions (Pty) Ltd",
    description:
      "Get in touch to discuss your software development needs, from websites to mobile apps and APIs.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
  },
  twitter: {
    title: "Contact Nevaeh Solutions (Pty) Ltd",
    description:
      "Reach out to Nevaeh Solutions for expert software solutions, including web and mobile development.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
