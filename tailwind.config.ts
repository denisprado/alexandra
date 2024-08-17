import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#CC6666",
      secondary: "#B58887",
      background: "#FCF5F0",
    },
    extend: {
      keyframes: {
        growh: {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "100%", opacity: "100%" },
        },
        growo: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        grow1: "growh 1s ease-in forwards",

        growo: "growo 1s ease-in forwards",
        growo2: "growo 2s ease-in forwards",
      },
    },
  },
  plugins: [],
};
export default config;
