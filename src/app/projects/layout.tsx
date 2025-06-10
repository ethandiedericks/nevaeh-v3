import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Nevaeh Solutions",
  description:
    "Browse recent software development projects by Nevaeh Solutions, including mobile apps, business websites, and full-stack web applications tailored to client needs.",
  keywords: [
    "software development portfolio",
    "web app projects",
    "mobile app case studies",
    "custom website development",
    "landing page design",
    "React and Next.js projects",
    "Flutter mobile apps",
    "UI/UX design showcase",
    "Nevaeh Solutions work",
    "South Africa developers",
    "full-stack development examples",
  ],
  openGraph: {
    title: "Our Work | Nevaeh Solutions",
    description:
      "Explore recent projects we've completed for clients across industries — from websites to custom mobile apps.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_OG_IMAGE_URL}`,
        width: 1200,
        height: 630,
        alt: "Nevaeh Solutions Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Nevaeh Solutions",
    description:
      "Explore real-world examples of our work — business websites, mobile applications, and more.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
