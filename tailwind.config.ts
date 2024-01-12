import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#65E4A3",
      gray: "#777777",
      white: "#FFFFFF",
      "gray-blue": "#8FB6D5",
      "light-blue": "#0DBBFC",
      "dark-blue": "#0A2640",
      "light-grey": "#F1F1F1",
    },
    extend: {
      spacing: {
        "50px": "50px",
        "60px": "60px",
        "100px": "100px",
        "187px": "187px",
        "201px": "201px",
        "247px": "247px",
      },
      lineHeight: {
        72: "72px",
      },
      backgroundImage: {
        "hero-arc": "url('/assets/images/hero_bg_arc.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
