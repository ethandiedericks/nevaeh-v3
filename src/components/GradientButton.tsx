"use client";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean; // ✅ add this line
}

export default function GradientButton({
  text = "Contact",
  onClick,
  className = "",
  disabled = false, // ✅ default it
}: GradientButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled} // ✅ pass to native <button>
      className={`gradient-button relative inline-flex items-center justify-center px-6 py-3 text-base font-thin tracking-[-4%] text-white transition-all duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"
      } ${className}`}
      onClick={onClick}
    >
      <span className="gradient-button-inner">{text}</span>
    </button>
  );
}
