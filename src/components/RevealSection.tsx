"use client";

import { useReveal } from "@/hooks/useReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
}

export function RevealSection({
  children,
  className = "",
  as: Tag = "section",
}: RevealSectionProps) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
