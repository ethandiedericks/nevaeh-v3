import React from "react";

const GradientBorderCard = () => {
  return (
    <div className="relative rounded-[30px] shadow-lg overflow-hidden">
      {/* Inner Top Border (Left → Right) */}
      <div className="absolute inset-x-0 top-0 h-[10px] pointer-events-none z-10">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(to right, #2ca05a, rgba(44,160,90,0))",
          }}
        />
      </div>

      {/* Card Content with frosted glass effect */}
      <div
        className="relative z-0 p-6 text-white text-center rounded-lg"
        style={{
          backdropFilter: "blur(8px) brightness(100%)",
          WebkitBackdropFilter: "blur(8px) brightness(100%)",
          background:
            "linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, rgba(44, 160, 90, 0.1) 50%, rgba(0, 0, 0, 0.1) 100%)",
        }}
      >
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-sm opacity-75">
          This is a frosted glass card with directional inner gradient borders.
          This is a frosted glass card with directional inner gradient borders.
          This is a frosted glass card with directional inner gradient borders.
          This is a frosted glass card with directional inner gradient borders.
        </p>
      </div>

      {/* Inner Bottom Border (Right → Left) */}
      <div className="absolute inset-x-0 bottom-0 h-[10px] pointer-events-none z-10">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(to left, #2ca05a, rgba(44,160,90,0))",
          }}
        />
      </div>
    </div>
  );
};

export default GradientBorderCard;
