import ProjectsCard from "@/components/cards/ProjectsCard";
import React from "react";

const projects = [
  {
    id: "it-support-ec",
    category: "Website Development",
    imageUrl: "/projects/itsupport.avif",
    title: "IT Support EC (Pty) Ltd",
    description:
      "Nevaeh Solutions crafted a modern, responsive website for IT Support EC, a provider of IT services, cybersecurity, and support in the Eastern Cape. The site ensures accessibility, ease of navigation, and reflects the company's professionalism.",
  },
  {
    id: "liam-graham-psychometry",
    category: "Website Development",
    imageUrl: "/projects/liamgrahampsychometry.avif",
    title: "Liam Graham Psychometry",
    description:
      "The Liam Graham Psychometry website, built by Nevaeh Solutions, is a modern, responsive platform for a psychometrist offering cognitive evaluations, ADHD screening, school readiness, and career guidance. It reflects professionalism and personalized care with a clean, user-friendly design.",
  },
  {
    id: "john-b-scott-attorneys",
    category: "Mobile App Development",
    imageUrl: "/projects/johnscott.png",
    title: "John B. Scott Attorneys",
    description:
      "The John B. Scott Attorneys app is a specialized tool that automates the consultation process for Road Accident Fund claims, allowing clients to efficiently submit claims without lengthy paperwork. Built to reflect the firm's commitment to accessible legal services, the app offers a seamless, intuitive experience",
  },
];

const ProjectsClient = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto">
      <section className="pt-10 px-4">
        <header className="flex flex-col gap-[25px] items-center justify-center">
          <h2 className="max-w-2xl text-5xl text-center">
            View Our Most Recent Projects
          </h2>
          <p className="max-w-4xl text-center text-base leading-5 tracking-[-4%]">
            Explore our latest work at Nevaeh Solutions, where innovation meets
            impact. From modern website revamps to tailored IT solutions, our
            recent projects showcase our expertise in delivering user-focused,
            high-quality digital experiences that drive results. Dive in to see
            how we bring our clients&apos; visions to life!
          </p>
        </header>
      </section>
      <section className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-10">
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              category={project.category}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              projectUrl={`/projects/${project.id}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsClient;
