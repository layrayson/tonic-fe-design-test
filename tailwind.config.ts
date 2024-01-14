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
        "6px": "6px",
        "22px": "22px",
        "30px": "30px",
        "50px": "50px",
        "56px": "56px",
        "60px": "60px",
        "68px": "68px",
        "72px": "72px",
        "84px": "84px",
        "100px": "100px",
        "117px": "117px",
        "120px": "120px",
        "124px": "124px",
        "144px": "144px",
        "150px": "150px",
        "158px": "158px",
        "184px": "184px",
        "185px": "185px",
        "187px": "187px",
        "201px": "201px",
        "210px": "210px",
        "219px": "219px",
        "247px": "247px",
        "370px": "370px",

        "1400px": "1400px",
      },
      lineHeight: {
        72: "72px",
      },
      backgroundImage: {
        "hero-arc": "url('/assets/images/hero_bg_arc.svg')",
        "start-now-arc": "url('/assets/images/start_now_bg_arc.svg')",
      },
      boxShadow: {
        mini: "0px 4px 32px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
