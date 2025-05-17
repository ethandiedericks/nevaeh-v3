import React, { ReactNode } from "react";
import { CheckIcon } from "../Icons";

interface ServicesCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  key_features: string[];
}

const ServicesCard = ({
  icon,
  title,
  description,
  key_features,
}: ServicesCardProps) => {
  return (
    <div className="top-gradient-card flex flex-col h-full">
      <div className="flex flex-col gap-4 flex-1">
        <div className="inline-flex items-center gap-4">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 icon-glow"></div>
            {/* Icon with a higher z-index to appear above the glow */}
            <div className="rounded-[0.438rem] p-2 gradient-border relative z-10">
              {icon}
            </div>
          </div>
          <h1 className="text-2xl font-thin">{title}</h1>
        </div>
        <p className="flex-1">{description}</p>
        <div>
          <h2 className="font-medium text-base leading-7">Key Features</h2>
          <ul className="list-none space-y-2 mt-4">
            {key_features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="mr-2 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
