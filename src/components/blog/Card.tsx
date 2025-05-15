import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`p-3 rounded-[10px] shadow-md gradient-border ${className}`}
    >
      {children}
    </div>
  );
}
