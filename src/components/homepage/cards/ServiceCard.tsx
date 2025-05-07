import React, { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="h-full">
      <div className="relative h-full flex flex-col justify-between rounded-[0.938rem] border overflow-hidden p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          <div className="inline-flex gap-4 items-center align-middle">
            <span className="border rounded-[0.438rem] p-2 ">{icon}</span>
            <h2>{title}</h2>
          </div>
          <div className="flex-1">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
