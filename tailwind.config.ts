import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#176331",
          "primary-light": "#1e7d3e",
          "primary-dark": "#0f4a24",
          accent: "#8abe53",
          "accent-light": "#a0d06a",
          "accent-dark": "#6f9a3f",
        },
        surface: {
          dark: "#0a0f0d",
          "dark-2": "#0f1613",
          "dark-3": "#141f1a",
          DEFAULT: "#1a2820",
          light: "#243830",
        },
        text: {
          primary: "#f0f5f2",
          secondary: "#8fa898",
          muted: "#5a7566",
        },
        border: {
          DEFAULT: "rgba(138, 190, 83, 0.12)",
          hover: "rgba(138, 190, 83, 0.3)",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        pulse: "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
