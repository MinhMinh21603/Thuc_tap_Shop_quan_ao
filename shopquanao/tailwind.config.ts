import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundPink: '#EE2761',
        backgroundDropdown: '#061838',
        hoverColor: '#061838',
        grayColor: '#606060',
      },
      width: {
        searchBar: "550px",
      }
    },
  },
  plugins: [],
};
export default config;

