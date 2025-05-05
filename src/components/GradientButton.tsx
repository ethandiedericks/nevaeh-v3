"use client";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function GradientButton({
  text = "Click Me",
  onClick,
  className = "",
}: GradientButtonProps) {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-6 py-3 text-sm 2xl:text-base font-normal text-white transition-all duration-300 hover:cursor-pointer ${className}`}
      onClick={onClick}
      style={{
        position: "relative",
        borderRadius: "10px",
        border: "none",
        padding: "3px", // This creates space for the border
        background: "linear-gradient(to bottom, #C0C0C0, #006528, #40B16D)",
        boxShadow: "4px 4px 8px 0px rgba(255, 255, 255, 0.3)",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: "8px", // 10px outer - 2px border = 8px inner
          background: "linear-gradient(to bottom, #D9D9D9, #006528)",
          padding: "0.5rem 1.25rem",
        }}
      >
        {text}
      </span>
    </button>
  );
}
