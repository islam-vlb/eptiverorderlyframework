import type { Config } from "tailwindcss";

/**
 * Design theme: "Gentle Table"
 * warm terracotta + soft cream + deep brown
 * Headings: DM Serif Display · Body: Work Sans
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBF3E7",
        ink: "#3A2A1E",
        panel: "#3A2A1E",
        panelSoft: "#4A3628",
        panelDeep: "#2C2016",
        accent: "#C1662F",
        accentSoft: "#DB9366",
        line: "#EBDCC7",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        theme: "0.375rem",
      },
      boxShadow: {
        glow: "0 18px 44px -22px rgba(58,42,30,0.4)",
        soft: "0 14px 34px -20px rgba(58,42,30,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
