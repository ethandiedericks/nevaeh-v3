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
    <div className="flex flex-col items-left text-left mb-8">
      <div className="mb-2 text-white">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-300 leading-1">{description}</p>
    </div>
  );
};
