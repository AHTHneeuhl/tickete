import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "grey-10": "#EDEEF0",
      "grey-primary": "#1C2024",
      "grey-secondary": "#60646C",
      "brand-default": "#000000",
      "bg-grey-default": "#F9F9FB",
      "border-grey": "#D3D4DB",
      "border-grey-default": "#B9BBC6",
      "border-grey-selected": "#1C2024",
      "grey-default-subtle": "#D3D4DB",
      "grey-disabled": "#8B8D98",
      "grey-100": "#F9F9FB",
      "green-900": "#299764",
      "green-500": "#B4DFC4",
      "green-200": "#E9F9EE",
      "green-100": "#F2FCF5",
      "surface-default": "#FFFFFF",
      "indigo-900": "#3A5CCC",
      "grey-05": "#FCFCFD",
      "divider-default": "#DDDDE3",
    },
    fontFamily: {
      serif: ["Roboto Serif", "serif"],
    },
  },
  plugins: [],
};
export default config;
