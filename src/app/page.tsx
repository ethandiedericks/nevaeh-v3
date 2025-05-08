import { CTASection } from "@/components/homepage/CTASection";
import { HeroSection } from "@/components/homepage/HeroSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { StorySection } from "@/components/homepage/StorySection";
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
