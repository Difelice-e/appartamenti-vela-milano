import { ReactNode, ElementType } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  onPhoto?: boolean;
  as?: ElementType;
}

export default function GlassPanel({
  children,
  className = "",
  onPhoto = false,
  as: Tag = "div",
}: GlassPanelProps) {
  return (
    <Tag className={`${onPhoto ? "glass-on-photo" : "glass"} rounded-lg ${className}`}>
      {children}
    </Tag>
  );
}
