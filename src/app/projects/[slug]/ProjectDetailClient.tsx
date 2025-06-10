"use client";

import React from "react";
import Image from "next/image";
import { useMemo } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import GradientButton from "@/components/GradientButton";
import { TickIcon } from "@/components/Icons";

interface ProjectDetailClientProps {
  slug: string;
}

const ProjectDetailClient = ({ slug }: ProjectDetailClientProps) => {
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project) {
    return <div className="text-white p-8">Project not found.</div>;
  }

  const {
    category,
    title,
    intro,
    body,
    benefits,
    conclusion,
    imagesLeft = [],
    imagesRight = [],
  } = project;

  return (
    <div className="min-h-screen text-white ">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-16 space-y-20">
        {/* Main Layout Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Header + Intro Section */}
            <div className="space-y-6">
              <div className="text-sm uppercase text-primary gradient-border inline-block px-4 py-1">
                {category}
              </div>
              <h2 className="text-4xl md:text-5xl font-medium">{title}</h2>
              <p className="text-base tracking-[-4%] text-gray-300 max-w-3xl">
                {intro}
              </p>
            </div>
            {imagesLeft.length > 0 && (
              <Image
                src={imagesLeft[0].src}
                alt={imagesLeft[0].alt || "Main desktop image"}
                width={800}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            )}
            <div className="space-y-4 ">
              <p className="text-base tracking-[-4%] text-gray-300 whitespace-pre-wrap">
                {body}
              </p>
            </div>
            {/* Benefits List */}
            {benefits && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <div className="relative w-5 h-5 flex-shrink-0">
                        {/* Glow behind the tick */}
                        <div className="absolute inset-0 rounded-full bg-[#2282c4] blur-md z-0" />
                        <span className="relative z-10">
                          <TickIcon className="w-5 h-5 text-white" />
                        </span>
                      </div>
                      <p className="text-gray-300">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {conclusion && (
              <p className="text-gray-300 text-base tracking-[-4%]">
                {conclusion}
              </p>
            )}
            {/* CTA */}

            <Link href={"/contact"}>
              <GradientButton text="Book your consultation" />
            </Link>
          </div>

          {/* Right Column - Mockup + Screens */}
          <div className="hidden md:flex md:flex-col md:gap-6 md:w-full">
            {imagesRight.length > 0 && (
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={imagesRight[0].src}
                  alt={imagesRight[0].alt || "Mockup image"}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}

            {imagesRight.slice(1).map((img, idx) => (
              <div key={idx} className="w-full flex justify-center">
                <Image
                  src={img.src}
                  alt={img.alt || `Screen image ${idx + 2}`}
                  width={517} // Fixed width
                  height={0} // Let height auto-adjust with aspect ratio
                  className="h-auto rounded-xl shadow-md object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailClient;
