import Link from "next/link";

import { MobileFeatureCard } from "../cards/MobileFeatureCard";
import { EarthIcon, RocketIcon, WaypointsIcon } from "@/components/Icons";
import GradientButton from "@/components/GradientButton";

export const MobileHeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background min-h-screen md:hidden">
      {/* Mobile hero content */}
      <div className="relative z-10 px-6 py-8 flex flex-col h-full">
        {/* Headline and subheadline */}
        <div className="mb-8">
          <h1 className="hero-headline text-white text-left">
            Drive Results with Tailored Web & App Development.
          </h1>
          <p className="hero-sub-headline">
            Partner with Software Development experts who build websites and
            mobile apps that solve real business challenges.
          </p>
        </div>

        {/* Feature blocks */}
        <div className="flex flex-col">
          {/* Feature 1 */}
          <MobileFeatureCard
            icon={<WaypointsIcon size={28} className="text-white" />}
            title="Enterprise-Grade Software"
            description="Scalable, secure, and efficient enterprise solutions."
          />

          {/* Feature 2 */}
          <MobileFeatureCard
            icon={<RocketIcon size={28} className="text-white" />}
            title="Guaranteed 14-Day Delivery"
            description="Fast, reliable development without compromises."
          />

          {/* Feature 3 */}
          <MobileFeatureCard
            icon={<EarthIcon size={28} className="text-white" />}
            title="Free professional domain"
            description="Establish credibility, reinforcing your brand's authority and trust"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-6 w-full flex justify-center">
          <Link href="/contact" aria-label="Book your consultation">
            <GradientButton text="Book your consultation" />
          </Link>
        </div>
      </div>
    </div>
  );
};
