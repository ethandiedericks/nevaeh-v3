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
    <div className="mobile-hero-card-container">
      <div className="mobile-hero-card">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 hero-icon-glow"></div>
            <div className="relative z-10">{icon}</div>
          </div>
          <h3 className="text-sm font-normal text-white mb-2">{title}</h3>
          <p className="text-xs text-[#E2E8F0] leading-5 italic">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
