import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          pressed: 'var(--color-primary-pressed)',
        },
        secondary: 'var(--color-secondary)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        ink: 'var(--color-neutral-dark)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['var(--fs-display-xl)', { lineHeight: 'var(--lh-display-xl)', letterSpacing: 'var(--ls-display-xl)' }],
        'display-l': ['var(--fs-display-l)', { lineHeight: 'var(--lh-display-l)', letterSpacing: 'var(--ls-display-l)' }],
        h1: ['var(--fs-h1)', { lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }],
        h2: ['var(--fs-h2)', { lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }],
        h3: ['var(--fs-h3)', { lineHeight: 'var(--lh-h3)' }],
        'body-l': ['var(--fs-body-l)', { lineHeight: 'var(--lh-body)' }],
        body: ['var(--fs-body)', { lineHeight: 'var(--lh-body)' }],
        small: ['var(--fs-small)', { lineHeight: 'var(--lh-small)' }],
        micro: ['var(--fs-micro)', { lineHeight: 'var(--lh-micro)', letterSpacing: 'var(--ls-micro-upper)' }],
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        'card-soft': 'var(--shadow-card-soft)',
        'card-hover': 'var(--shadow-card-hover)',
        glass: 'var(--shadow-glass)',
        focus: 'var(--shadow-focus-ring)',
      },
      transitionTimingFunction: {
        'soft-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth-inout': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      maxWidth: {
        container: 'var(--container-max)',
        'container-hero': 'var(--container-hero-max)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
