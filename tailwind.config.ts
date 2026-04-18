import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        orange: {
          DEFAULT: "#f47621",
          light: "#faa419",
          lightest: "#fec775",
          dim: "#FBEFE5",
        },
        brand: {
          white: "#f8f7f5",
          "dim-white": "#CBCBCB",
          "shadow-black": "#7F7F7F",
          black: "#1b1d1c",
          "dim-black": "#3C3832",
          "section-dark": "#151515",
          "section-light": "#F9F8F6",
          "icon-dark": "#48311E",
          border: "#404040",
          green: "#2c9455",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        lg: "0.625rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
    },
  },
  plugins: [],
};

export default config;
