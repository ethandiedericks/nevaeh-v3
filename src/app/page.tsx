import { HeroSection } from "@/components/homepage/HeroSection";
import { StorySection } from "@/components/homepage/StorySection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { ValueSection } from "@/components/homepage/ValueSection";
import { CTASection } from "@/components/homepage/CTASection";
import { FaqSection } from "@/components/homepage/FaqSection";

export default function Home() {
  return (
    <div>
      <main className="">
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <ValueSection />
        <FaqSection />
        <CTASection />
      </main>
    </div>
  );
}
