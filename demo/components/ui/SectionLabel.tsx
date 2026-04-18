import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tone?: 'primary' | 'accent' | 'light';
  className?: string;
};

const toneClass = {
  primary: 'text-primary',
  accent: 'text-accent',
  light: 'text-white/80',
};

export function SectionLabel({ children, tone = 'primary', className = '' }: Props) {
  return (
    <span
      className={`inline-block text-micro font-semibold uppercase tracking-[0.08em] ${toneClass[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
