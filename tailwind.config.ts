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
        grow: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        grow: "grow 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
