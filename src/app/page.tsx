import { HeroSection } from "@/components/homepage/Hero";
import { StorySection } from "@/components/homepage/Story";

export default function Home() {
  return (
    <div>
      <main className="relative z-10 bg-gradient-to-r from-[#001E05] via-[#0B0C1B]/50 to-[#0B0C1B] ">
        <HeroSection />
        <StorySection />
      </main>
    </div>
  );
}
