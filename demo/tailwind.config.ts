import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-pressed": "var(--color-primary-pressed)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "neutral-dark": "var(--color-neutral-dark)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        "card-soft": "var(--shadow-card-soft)",
        "card-hover": "var(--shadow-card-hover)",
        glass: "var(--shadow-glass)",
        focus: "var(--shadow-focus-ring)",
      },
      maxWidth: {
        container: "var(--container-max)",
        hero: "var(--container-hero-max)",
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth-inout": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
