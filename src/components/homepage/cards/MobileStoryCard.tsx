import React from "react";

interface MobileStoryCardProps {
  benefit: string;
}

export const MobileStoryCard: React.FC<MobileStoryCardProps> = ({
  benefit,
}) => {
  return (
    <div className="border rounded-[0.9rem] py-7 px-4 border-white">
      <div className=""> {benefit} </div>
    </div>
  );
};
