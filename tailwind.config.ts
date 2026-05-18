import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2DD3F1",
          DEFAULT: "#2229D2",
          dark: "#1B1F9C",
        },

        brand: {
          darkText: "#2D2D2D",
          accent: "#32CD89",
          muted: "#88929A",
        },
      },
    },
  },

  plugins: [],
};

export default config;