import Link from "next/link";

import { MobileHeroSection } from "./mobile/MobileHero";
import GradientButton from "../GradientButton";
import NewFeatureCard from "./cards/NewFeatureCard";
import { Cpu, Handshake, ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero */}
      <MobileHeroSection />

      {/* Desktop/Tablet Hero */}
      <section className="relative overflow-hidden hidden md:block">
        <div className="container mx-auto relative z-10 pt-10 pb-16 px-4">
          <div className="section-spacing">
            <header>
              <h1 className="hero-headline text-white">
                Enterprise-grade software. <br /> Delivered with care.
              </h1>
            </header>
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 justify-center items-center">
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link href="/contact" aria-label="Book a Free Strategy Call">
                  <GradientButton text="Book a Free Strategy Call" />
                </Link>
              </div>
              <div className="md:col-span-8">
                <p className="hero-sub-headline text-center md:text-left">
                  We design and develop high-performance web platforms, internal
                  tools, and mobile apps tailored for growing companies and
                  enterprise teams.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <article className="new-hero-card-container">
                <div className="left-hero-card h-full">
                  <div className="flex flex-col p-4 items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 hero-icon-glow"></div>
                      <div className="relative z-10">
                        <Cpu size={40} />
                      </div>
                    </div>
                    <header>
                      <h2 className="text-xl font-normal tracking-[-4%] leading-[20px] mt-6">
                        Deep Tech Expertise
                      </h2>
                    </header>
                    <p className="text-base text-center font-thin tracking-[-4%] leading-[20px] mt-2">
                      We build scalable systems across .NET, Angular, and
                      Next.js — tailored to your stack.
                    </p>
                  </div>
                </div>
              </article>
              <NewFeatureCard
                icon={<ShieldCheck size={40} />}
                title="Personal & Accountable"
                description="Work directly with a senior dev and designer — no handoffs, no fluff."
              />
              <NewFeatureCard
                icon={<Handshake size={40} />}
                title="Flexible Retainer Model"
                description="Ongoing support and delivery through predictable monthly retainers."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
