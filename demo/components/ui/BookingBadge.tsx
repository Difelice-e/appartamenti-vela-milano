import { Star } from '@phosphor-icons/react/dist/ssr';

type Props = {
  rating?: number;
  count?: number;
  label?: string;
  className?: string;
};

export function BookingBadge({ rating = 9.2, count = 678, label = 'Superbo', className = '' }: Props) {
  return (
    <div
      className={`glass-pill inline-flex items-center gap-3 rounded-pill px-4 py-2 ${className}`}
    >
      <div className="flex items-center gap-1.5">
        <Star size={14} weight="fill" className="text-accent" />
        <span className="font-semibold text-[14px] text-ink">{rating.toFixed(1)}</span>
      </div>
      <span className="h-3 w-px bg-ink/15" aria-hidden="true" />
      <span className="text-[13px] text-ink/75">
        {label} <span className="text-ink/55">· {count} recensioni</span>
      </span>
    </div>
  );
}
