import Link from "next/link";

import { MobileHeroSection } from "./mobile/MobileHero";
import GradientButton from "../GradientButton";
import { EarthIcon, RocketIcon, WaypointsIcon } from "../Icons";
import NewFeatureCard from "./cards/NewFeatureCard";

export const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero */}
      <MobileHeroSection />

      {/* Desktop/Tablet Hero */}
      <div className="relative overflow-hidden  hidden md:block">
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
              <NewFeatureCard
                icon={<WaypointsIcon size={40} />}
                title="Enterprise-Grade Software"
                description="Scalable, secure, and efficient enterprise solutions."
              />

              <NewFeatureCard
                icon={<RocketIcon size={40} />}
                title="Guaranteed 14-Day Delivery"
                description="Fast, reliable development without compromises."
              />

              <NewFeatureCard
                icon={<EarthIcon size={40} />}
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
