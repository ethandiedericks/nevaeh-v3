import React from "react";
import { ProjectsProps } from "../../interfaces/projects";
import Image from "next/image";
import GradientButton from "../GradientButton";
import Link from "next/link";

const ProjectsCard = ({
  category,
  imageUrl,
  title,
  description,
  projectUrl,
}: ProjectsProps) => {
  return (
    <article className="flex flex-col justify-between h-full text-white rounded-lg shadow-lg overflow-hidden">
      <header className="flex flex-col items-center gap-2 p-4">
        <span className="text-base font-thin text-primary px-4 py-2 gradient-border">
          {category}
        </span>

        <div className="relative w-full h-[158px] rounded-md overflow-hidden mt-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <h2 className="text-2xl font-normal text-center mt-4">{title}</h2>
      </header>

      <section className="flex-1 px-2 text-center">
        <p className="text-base leading-6 text-muted-foreground px-4">
          {description}
        </p>
      </section>

      <footer className="mt-6 flex justify-center pb-6">
        <Link href={projectUrl} aria-label={`View project: ${title}`}>
          <GradientButton text="View Project" />
        </Link>
      </footer>
    </article>
  );
};

export default ProjectsCard;
