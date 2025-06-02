import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}
const NewFeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="new-hero-card-container">
      <div className="new-hero-card h-full">
        <div className="flex flex-col p-4 items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 hero-icon-glow"></div>
            <div className="relative z-10">{icon}</div>
          </div>
          <h2 className="text-xl font-normal tracking-[-4%] leading-[20px] mt-6">
            {title}
          </h2>
          <p className="text-base text-center font-thin tracking-[-4%] leading-[20px] mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewFeatureCard;
