import Link from "next/link";

import { MobileFeatureCard } from "../cards/MobileFeatureCard";
import { RocketIcon, WaypointsIcon } from "@/components/Icons";
import GradientButton from "@/components/GradientButton";

export const MobileHeroSection = () => {
  return (
    <div className="relative overflow-hidden md:hidden">
      {/* Mobile hero content */}
      <div className="relative z-10 px-6 py-8 flex flex-col h-full">
        {/* Headline and subheadline */}
        <div className="mb-10">
          <h1 className="hero-headline text-white text-left">
            Drive Results with Tailored Web & App Development.
          </h1>
          <p className="hero-sub-headline">
            Partner with Software Development experts who build websites and
            mobile apps that solve real business challenges.
          </p>
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="rotate-[-10deg]">
            <MobileFeatureCard
              icon={<WaypointsIcon size={40} className="text-white" />}
              title="Enterprise-Grade Software"
              description="Scalable, secure, and efficient enterprise solutions."
            />
          </div>
          <div className="rotate-[10deg]">
            {/* Feature 2 */}
            <MobileFeatureCard
              icon={<RocketIcon size={40} className="text-white" />}
              title="Guaranteed 14-Day Delivery"
              description="Fast, reliable development without compromises."
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 w-full flex justify-center">
          <Link href="/contact" aria-label="Book your consultation">
            <GradientButton text="Book your consultation" />
          </Link>
        </div>
      </div>
    </div>
  );
};
