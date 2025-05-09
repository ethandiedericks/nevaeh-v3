import { LucideIcon } from "lucide-react";
import React from "react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  line1: string;
  line2: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  line1,
  line2,
}) => {
  return (
    <div className="w-full table-gradient-0 mb-12 p-10">
      <div className="flex flex-col items-center justify-between gap-4 md:gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="border border-white p-2 rounded-[7px]">
            <Icon />
          </div>
          <span>{title}</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{line1}</span>
          <span>{line2}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
