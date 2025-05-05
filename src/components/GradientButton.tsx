"use client";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function GradientButton({
  text = "Contact",
  onClick,
  className = "",
}: GradientButtonProps) {
  return (
    <button
      className={`gradient-button relative inline-flex items-center justify-center px-6 py-3 text-sm 2xl:text-base font-normal text-white transition-all duration-300 hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span className="gradient-button-inner">{text}</span>
    </button>
  );
}
