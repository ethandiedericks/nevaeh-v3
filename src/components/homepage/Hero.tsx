import Image from "next/image";
import Link from "next/link";

import GradientButton from "../GradientButton";
import { FeatureCard } from "./FeatureCard";
import { MobileHeroSection } from "./MobileHero";
import { EarthIcon, RocketIcon, WaypointsIcon } from "../Icons";

export const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero */}
      <MobileHeroSection />

      {/* Desktop/Tablet Hero */}
      <div className="relative overflow-hidden bg-background min-h-screen hidden md:block">
        {/* Background with token graphics */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/homepage/nevaeh-solutions-hero-background-image.png"
            alt="Nevaeh Solutions Hero Desktop Background"
            width={1440}
            height={673}
            priority
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-background opacity-50"></div>
        </div>

        {/* Hero content */}
        <div className="container mx-auto relative z-10 pt-10 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main headline */}
            <h1 className="hero-headline text-white">
              Drive Results With Tailored
              <br />
              Web & App Development.
            </h1>

            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 justify-center items-center">
              {/* Center CTA button */}
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link href="/contact">
                  <GradientButton text="Book your consultation" />
                </Link>
              </div>

              {/* Description */}
              <div className="text-center md:text-left m-0 md:col-span-8">
                <p className="hero-sub-headline text-[#D1D5DB]">
                  Partner with Software Development experts who build websites
                  and mobile apps that solve real business challenges.
                </p>
              </div>
            </div>

            {/* Feature blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Feature 1 */}
              <FeatureCard
                icon={<WaypointsIcon />}
                title="Enterprise-Grade Software"
                description="Scalable, secure, and efficient enterprise solutions."
              />

              {/* Feature 2 */}
              <FeatureCard
                icon={<RocketIcon />}
                title="Guaranteed 14-Day Delivery"
                description="Fast, reliable development without compromises."
              />

              {/* Feature 3 */}
              <FeatureCard
                icon={<EarthIcon />}
                title="Free professional domain"
                description="Establish credibility, reinforcing your brand's authority and trust"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
