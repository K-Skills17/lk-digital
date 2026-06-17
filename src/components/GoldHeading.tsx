"use client";

import { useReveal } from "@/hooks/useReveal";

interface GoldHeadingProps {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

export function GoldHeading({
  as: Tag = "h2",
  children,
  className = "",
}: GoldHeadingProps) {
  const ref = useReveal(0.3);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={`font-heading font-bold gold-line ${className}`}
    >
      {children}
    </Tag>
  );
}
