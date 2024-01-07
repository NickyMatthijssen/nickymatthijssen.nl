import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/storyblok/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "noto-sans",
        text: "noto-sans",
      },
      colors: {
        theme: {
          100: "var(--colors-theme-100)",
          200: "var(--colors-theme-200)",
          300: "var(--colors-theme-300)",
          400: "var(--colors-theme-400)",
          500: "var(--colors-theme-500)",
          600: "var(--colors-theme-600)",
          700: "var(--colors-theme-700)",
          800: "var(--colors-theme-800)",
          850: "var(--colors-theme-850)",
          900: "var(--colors-theme-900)",
          950: "var(--colors-theme-950)",
          white: "var(--colors-theme-white)",
        },
        brand: {
          1: "var(--colors-brand-1)",
          2: "var(--colors-brand-2)",
          3: "var(--colors-brand-3)",
        },
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1109px",
      },
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontSize: {
      "3xs": "10px",
      "2xs": "12px",
      xs: "13px",
      sm: "14px",
      md: "15px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "32px",
      "4xl": "45px",
      "5xl": "58px",
    },
    backgroundImage: {
      "gradient-linear":
        "linear-gradient(90deg, var(--colors-brand-1), var(--colors-brand-2) 51%, var(--colors-brand-3))",
    },
  },
  plugins: [],
};
export default config;
