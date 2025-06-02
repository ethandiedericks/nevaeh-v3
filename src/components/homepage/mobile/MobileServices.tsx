import Link from "next/link";
import GradientButton from "@/components/GradientButton";
import { LaptopIcon, MobilePhonesIcon, WebIcon } from "@/components/Icons";
import MobileServiceCard from "../cards/MobileServiceCard";
import { Handshake } from "lucide-react";

export const MobileServices = () => {
  const services = [
    {
      icon: <LaptopIcon />,
      title: "Enterprise Web Apps",
      description:
        "Tailored systems using .NET, Angular, and Next.js — built for performance, integrations, and long-term maintainability.",
    },
    {
      icon: <MobilePhonesIcon />,
      title: "Cross-Platform & Native Mobile Apps",
      description:
        "Flutter, React Native, or fully native — we build robust mobile apps designed to evolve with your product roadmap.",
    },
    {
      icon: <WebIcon />,
      title: "Modern Websites",
      description:
        "Clean, conversion-focused websites built with your brand in mind. Fast, responsive, and easy to update.",
    },
    {
      icon: <Handshake />,
      title: "Long-Term Retainer Support",
      description:
        "Retainer-based development partnerships with guaranteed availability, iterative development, and proactive maintenance.",
    },
  ];
  return (
    <div className="md:hidden">
      <div className="container mx-auto">
        <div className="section-spacing">
          {/* text wrapper */}
          <div className="">
            <span className="section-tag">What We Do</span>
            <h1 className="section-title">Solutions Built for Scale</h1>
            <p className="mt-4 text-base text-white font-thin leading-[20px] tracking-[-4%]">
              We design and engineer digital platforms that power growth.
              <br /> Whether it&apos;s a web portal, internal tool, or mobile
              product — we&apos;ve done it across industries.
            </p>
          </div>
          {/* Service Cards */}

          <div className="grid grid-cols-1 gap-4 mt-8">
            {services.map((service, index) => (
              <MobileServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="mt-8 flex justify-center items-center">
            <Link href={"/services"} passHref>
              <GradientButton text="Explore Our Services" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
