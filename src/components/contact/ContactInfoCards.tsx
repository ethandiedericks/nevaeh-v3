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
    <div className="w-full top-bottom-gradient-card p-6 md:p-10">
      {/* Mobile view (side by side): flex-row on small screens */}
      <div className="flex flex-row md:flex-col items-center md:justify-between gap-10 md:gap-6">
        {/* Icon and title section */}
        <div className="flex flex-col items-left md:items-center gap-2">
          <div className="border border-white p-2 rounded-[7px] max-w-fit">
            <Icon />
          </div>
          <span>{title}</span>
        </div>

        {/* Content section */}
        <div className="flex flex-col items-start md:items-center">
          <span>{line1}</span>
          <span>{line2}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
