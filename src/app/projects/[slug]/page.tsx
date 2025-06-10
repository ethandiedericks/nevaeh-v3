import { projects } from "@/data/projects";
import type { Metadata } from "next";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found | Nevaeh Solutions",
      description: "The project you're looking for doesn't exist.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${project.title} | Nevaeh Solutions`,
    description: project.intro,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${project.title} | Nevaeh Solutions`,
      description: project.intro,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${resolvedParams.slug}`,
      type: "article",
      images: [
        {
          url: project.imagesLeft?.[0]?.src
            ? `${process.env.NEXT_PUBLIC_BASE_URL}${project.imagesLeft[0].src}`
            : project.imagesRight?.[0]?.src
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${project.imagesRight[0].src}`
              : `${process.env.NEXT_PUBLIC_OG_IMAGE_URL}`,
          width: 1200,
          height: 630,
          alt:
            project.imagesLeft?.[0]?.alt ||
            project.imagesRight?.[0]?.alt ||
            `${project.title} screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Nevaeh Solutions`,
      description: project.intro,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  return <ProjectDetailClient slug={resolvedParams.slug} />;
}
