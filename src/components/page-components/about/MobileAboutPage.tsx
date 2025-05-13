import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileAboutImage from "@/assets/images/about/nevaeh-solutions-desktop-about-image.png";
import MobileAboutImage2 from "@/assets/images/about/nevaeh-solutions-desktop-about-image-2.png";
import GradientButton from "@/components/GradientButton";
import { UserIcon, ZapIcon } from "@/components/Icons";
import { FastForward, Lightbulb } from "lucide-react";

const MobileAboutPage = () => {
  const values = [
    {
      icon: <ZapIcon />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give your business a competitive advantage.",
    },
    {
      icon: <UserIcon />,
      title: "Client Partnership",
      description:
        "Your success is our success. We work closely with you to understand your vision and bring it to life.",
    },
    {
      icon: <FastForward />,
      title: "Rapid Delivery",
      description:
        "Our agile approach ensures quick iterations and faster time-to-market without compromising quality.",
    },
    {
      icon: <Lightbulb />,
      title: "Creative Solutions",
      description:
        "We think outside the box to solve complex challenges with innovative, scalable solutions.",
    },
  ];

  const approach = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by understanding your vision, goals, and requirements through in-depth consultation.",
    },
    {
      title: "Design & Development",
      description:
        "Our iterative development process ensures transparency and continuous improvement.",
    },
    {
      title: "Launch & Support",
      description:
        "We ensure smooth deployment and provide ongoing support for your success.",
    },
  ];
  return (
    <div className="min-h-screen md:hidden">
      <div className="max-w-6xl mx-auto pt-8 px-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 gap-[30px]">
          <div className="flex items-end justify-end ">
            <Image
              src={MobileAboutImage}
              alt="Nevaeh Solutions Services Image"
              width={500}
              height={334}
              className="object-cover rounded-[30px]"
            />
          </div>
          <div className="flex flex-col gap-[25px] w-full justify-center">
            <h1 className="text-[32px] leading-[100%]">
              Building Tomorrow&apos;s Digital Solutions Today
            </h1>
            <p className="text-[#E2E8F0] text-base tracking-tight leading-4">
              As a dynamic new software development company, we combine fresh
              perspectives with technical expertise to deliver innovative
              solutions that drive your business forward.
            </p>
          </div>
          <Link
            href={"/contact"}
            aria-label="Contact Nevaeh Solutions"
            className="flex items-center justify-center"
          >
            <GradientButton text="Book your consultation" />
          </Link>
          <div className="flex flex-col gap-[25px] w-full justify-center">
            <h1 className="text-[32px] leading-[100%]">Our Vision</h1>
            <p className="text-[#E2E8F0] text-base tracking-tight leading-4">
              We envision a future where businesses of all sizes can harness the
              power of cutting-edge technology to achieve their goals. Our
              mission is to make this vision a reality through innovative
              software solutions and exceptional service.
            </p>
          </div>
          {values.map((value, index) => (
            <div key={index} className="flex flex-col gap-[15px]">
              <div className="flex flex-row gap-4">
                <span className="font-bold">{value.icon}</span>
                <span className="text-base font-bold">{value.title}</span>
              </div>
              <div className="values-card-wrapper h-full flex-1">
                <p className="text-sm tracking-[-4%] leading-5">
                  {" "}
                  {value.description}
                </p>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center ">
            <Image
              src={MobileAboutImage2}
              alt="Nevaeh Solutions Services Image"
              width={500}
              height={334}
              className="object-cover rounded-[30px]"
            />
          </div>
          <div className="flex flex-col gap-[25px] w-full justify-center">
            <h1 className="text-[32px] leading-[100%]">
              Expert Solutions, Personal Attention
            </h1>
            <p className="text-[#E2E8F0] text-base tracking-tight leading-4">
              As developers with comprehensive expertise, we provide dedicated
              attention to each project while delivering professional,
              full-stack solutions. Working with us means you get undivided
              attention, clear communication, and a team who are fully invested
              in your project&apos;s success.
            </p>
          </div>
          {approach.map((approach, index) => (
            <div key={index} className="top-bottom-gradient-card p-4">
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-bold">{approach.title}</h3>
                <p className="text-sm font-normal text-white tracking-[-4%] leading-5">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAboutPage;
