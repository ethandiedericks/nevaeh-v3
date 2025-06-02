import Link from "next/link";
import GradientButton from "../GradientButton";
import { LaptopIcon, MobilePhonesIcon, WebIcon } from "../Icons";
import { ServiceCard } from "./cards/ServiceCard";
import { MobileServices } from "./mobile/MobileServices";
import { Handshake } from "lucide-react";

export const ServicesSection = () => {
  return (
    <>
      <MobileServices />
      <section className="hidden md:block">
        <div className="container mx-auto">
          <div className="section-spacing">
            <header className="text-center items-center">
              <span className="section-tag">What We Do</span>
              <h1 className="section-title">Solutions Built for Scale</h1>
              <p className="mt-4">
                We design and engineer digital platforms that power growth.{" "}
                <br />
                Whether it&apos;s a web portal, internal tool, or mobile product
                — we&apos;ve done it across industries.
              </p>
            </header>
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="h-full">
                <ServiceCard
                  icon={<LaptopIcon />}
                  title="Enterprise Web Apps"
                  description="Tailored systems using .NET, Angular, and Next.js — built for performance, integrations, and long-term maintainability."
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  icon={<MobilePhonesIcon />}
                  title="Cross-Platform & Native Mobile Apps"
                  description="Flutter, React Native, or fully native — we build robust mobile apps designed to evolve with your product roadmap."
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  icon={<WebIcon />}
                  title="Modern Websites"
                  description="Clean, conversion-focused websites built with your brand in mind. Fast, responsive, and easy to update."
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  icon={<Handshake />}
                  title="Long-Term Retainer Support"
                  description="Retainer-based development partnerships with guaranteed availability, iterative development, and proactive maintenance."
                />
              </div>
            </div>
            <footer className="my-16 flex justify-center items-center">
              <Link href="/services" passHref>
                <GradientButton text="Explore Our Services" />
              </Link>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};
