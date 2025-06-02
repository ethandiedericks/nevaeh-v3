import React from "react";

interface MobileStoryCardProps {
  benefit: string;
}

export const MobileStoryCard: React.FC<MobileStoryCardProps> = ({
  benefit,
}) => {
  return (
    <article className="gradient-border rounded-[0.9rem] py-7 px-4 border-white">
      <p className="text-[15px] text-white font-thin leading-[15px] tracking-[-4%]">
        {benefit}
      </p>
    </article>
  );
};
