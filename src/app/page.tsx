import { CTASection } from "@/components/homepage/CTASection";
import { HeroSection } from "@/components/homepage/Hero";
import { ServicesSection } from "@/components/homepage/Services";
import { StorySection } from "@/components/homepage/Story";
import { ValueSection } from "@/components/homepage/ValueSection";

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <ValueSection />
        <CTASection />
      </main>
    </div>
  );
}
