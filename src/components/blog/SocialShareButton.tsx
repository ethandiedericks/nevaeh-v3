"use client";

import type { LucideIcon } from "lucide-react";

interface SocialShareButtonProps {
  icon: LucideIcon;
  label?: string;
  onClick?: () => void;
}

export default function SocialShareButton({
  icon: Icon,
  label,
  onClick,
}: SocialShareButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label={label || "Share"}
    >
      {label ? (
        <span className="font-bold text-sm">{label}</span>
      ) : (
        <Icon className="w-4 h-4" />
      )}
    </button>
  );
}
