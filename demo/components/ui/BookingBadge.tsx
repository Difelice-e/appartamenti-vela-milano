import { Star } from "@phosphor-icons/react/dist/ssr";

interface BookingBadgeProps {
  className?: string;
  dark?: boolean;
}

export default function BookingBadge({ className = "", dark = false }: BookingBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-pill text-small font-medium
        ${dark
          ? "bg-accent/20 text-accent border border-accent/30"
          : "bg-primary/10 text-primary border border-primary/20"
        } ${className}`}
    >
      <Star weight="fill" size={14} className={dark ? "text-accent" : "text-primary"} />
      <span>9.2 Superbo</span>
      <span className="opacity-60">·</span>
      <span>678 recensioni</span>
    </div>
  );
}
