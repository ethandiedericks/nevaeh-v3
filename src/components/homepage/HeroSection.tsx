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
              Enterprise-grade software. <br /> Delivered with care.
            </h1>

            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 justify-center items-center">
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link href="/contact" aria-label="Book a Free Strategy Call">
                  <GradientButton text="Book a Free Strategy Call" />
                </Link>
              </div>

              <div className="text-center md:text-left m-0 md:col-span-8">
                <p className="hero-sub-headline">
                  We design and develop high-performance web platforms, internal
                  tools, and mobile apps tailored for growing companies and
                  enterprise teams.
                </p>
              </div>
            </div>
            {/* feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ">
              <div className="new-hero-card-container">
                <div className="left-hero-card h-full">
                  <div className="flex flex-col p-4 items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 hero-icon-glow"></div>
                      <div className="relative z-10">
                        <WaypointsIcon size={40} />
                      </div>
                    </div>
                    <h2 className="text-xl font-normal tracking-[-4%] leading-[20px] mt-6">
                      Deep Tech Expertise
                    </h2>
                    <p className="text-base text-center font-thin tracking-[-4%] leading-[20px] mt-2">
                      We build scalable systems across .NET, Angular, and
                      Next.js — tailored to your stack.
                    </p>
                  </div>
                </div>
              </div>

              <NewFeatureCard
                icon={<RocketIcon size={40} />}
                title="Personal & Accountable"
                description="Work directly with a senior dev and designer — no handoffs, no fluff.."
              />

              <NewFeatureCard
                icon={<EarthIcon size={40} />}
                title="Flexible Retainer Model"
                description="Ongoing support and delivery through predictable monthly retainers."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
