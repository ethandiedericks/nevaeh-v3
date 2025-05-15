import React, { ReactNode } from "react";
import { TickIcon } from "../Icons";

interface MobileServicesCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  key_features: string[];
}

const MobileServicesCard = ({
  icon,
  title,
  description,
  key_features,
}: MobileServicesCardProps) => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 flex-1">
        <div className="inline-flex items-center gap-4">
          <div className="icon-wrapper">{icon}</div>
          <h1 className="text-[1.25rem] font-normal">{title}</h1>
        </div>
        <p className="flex-1 mb-4 text-sm">{description}</p>
      </div>
      <div className="mobile-services-card flex flex-col h-full">
        <div className="flex flex-col gap-4 flex-1">
          <div>
            <ul className="list-none space-y-2">
              {key_features.map((feature, index) => (
                <li key={index} className="">
                  <TickIcon className="mr-2 inline-flex" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServicesCard;
