import React, { ReactNode } from "react";

interface ValuesCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}
const ValuesCard = ({ icon, title, description }: ValuesCardProps) => {
  return (
    <div className="values-card-wrapper flex flex-col h-full">
      <div className="flex flex-col gap-4 flex-1 text-left justify-start">
        <div className="icon-wrapper max-w-fit">{icon}</div>
        <h3 className="text-base font-medium">{title}</h3>
        <p className="flex-1 mb-4 text-sm leading-5 tracking-[-4%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValuesCard;
