import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#1C1F2E",
          2: "#161925",
        },
        green: {
          1: "#2eb82e",
        },
        sky: {
          1: "#C9DDFF",
          2: "#ECF0FF",
          3: "#F5FCFF",
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
        },
        blue: {
          1: '#0E78F9',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
