import Link from "next/link";
import Image from "next/image";

import { MobileFeatureCard } from "../cards/MobileFeatureCard";
import GradientButton from "@/components/GradientButton";
import heroDecoration from "@/assets/images/homepage/hero-decoration.png";
import { Handshake, ShieldCheck } from "lucide-react";

export const MobileHeroSection = () => {
  return (
    <div className="relative overflow-hidden md:hidden">
      {/* Mobile hero content */}
      <div className="relative z-10 px-6 flex flex-col h-full">
        {/* Headline and subheadline */}
        <div className="mb-10">
          <h1 className="hero-headline text-white text-left">
            Enterprise-grade software. <br /> Delivered with care.
          </h1>
          <p className="hero-sub-headline">
            We design and develop high-performance web platforms, internal
            tools, and mobile apps tailored for growing companies and enterprise
            teams
          </p>
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-2 gap-8">
          {/* Background Decoration Image */}
          <div className="absolute left-0 w-full z-0 sm:hidden pointer-events-none">
            <Image
              src={heroDecoration}
              alt="Hero Background decoration"
              width={393}
              height={209}
              className="w-full h-auto"
              priority
              fetchPriority="high"
              quality={80}
              sizes="100vw"
            />
          </div>
          <div className="rotate-[-10deg]">
            <MobileFeatureCard
              icon={<ShieldCheck size={40} className="text-white" />}
              title="Personal & Accountable"
              description="Work directly with a senior dev and designer — no handoffs, no fluff.."
            />
          </div>
          <div className="rotate-[10deg]">
            <MobileFeatureCard
              icon={<Handshake size={40} className="text-white" />}
              title="Flexible Retainer Model"
              description="Ongoing support and delivery through predictable monthly retainers."
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="my-10 w-full flex justify-center">
          <Link href="/contact" aria-label="Book your consultation">
            <GradientButton text="Book your consultation" />
          </Link>
        </div>
      </div>
    </div>
  );
};
