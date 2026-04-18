interface SectionLabelProps {
  children: string;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <p
      className={`label-micro mb-4 ${light ? "text-accent" : "text-primary"} ${className}`}
    >
      {children}
    </p>
  );
}
