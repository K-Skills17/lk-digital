"use client";

import { useReveal } from "@/hooks/useReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  id?: string;
}

export function RevealSection({
  children,
  className = "",
  as: Tag = "section",
  id,
}: RevealSectionProps) {
  const setRef = useReveal();

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={setRef as any}
      className={`reveal ${className}`}
      id={id}
    >
      {children}
    </Tag>
  );
}
