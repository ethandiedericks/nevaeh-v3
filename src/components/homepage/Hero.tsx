import Link from "next/link";

import { MobileHeroSection } from "./mobile/MobileHero";
import GradientButton from "../GradientButton";
import { FeatureCard } from "./cards/FeatureCard";
import { EarthIcon, RocketIcon, WaypointsIcon } from "../Icons";

export const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero */}
      <MobileHeroSection />

      {/* Desktop/Tablet Hero */}
      <div className="relative bg-gradient-to-r from-[#001E05] via-[#0B0C1B]/50 to-[#0B0C1B]  overflow-hidden bg-background min-h-screen hidden md:block">
        <div className="container mx-auto relative z-10 pt-10 pb-16 px-4">
          <div className="section-spacing">
            <h1 className="hero-headline text-white">
              Drive Results With Tailored
              <br />
              Web & App Development.
            </h1>

            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 justify-center items-center">
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link href="/contact" aria-label="Book your consultation">
                  <GradientButton text="Book your consultation" />
                </Link>
              </div>

              <div className="text-center md:text-left m-0 md:col-span-8">
                <p className="hero-sub-headline">
                  Partner with Software Development experts who build websites
                  and mobile apps that solve real business challenges.
                </p>
              </div>
            </div>
            {/* feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ">
              <FeatureCard
                icon={<WaypointsIcon />}
                title="Enterprise-Grade Software"
                description="Scalable, secure, and efficient enterprise solutions."
              />

              <FeatureCard
                icon={<RocketIcon />}
                title="Guaranteed 14-Day Delivery"
                description="Fast, reliable development without compromises."
              />

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
