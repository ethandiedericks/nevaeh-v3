interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const MobileFeatureCard: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="mobile-hero-card-container">
      <div className="mobile-hero-card">
        <div className="flex flex-col gap-2 items-center text-center">
          <figure className="relative mb-4">
            <div className="absolute inset-0 hero-icon-glow"></div>
            <div className="relative z-10">{icon}</div>
          </figure>
          <header>
            <h2 className="text-base font-normal leading-5 tracking-[-4%]">
              {title}
            </h2>
          </header>
          <p className="text-xs text-[#E2E8F0] leading-4 italic tracking-[-4%]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
