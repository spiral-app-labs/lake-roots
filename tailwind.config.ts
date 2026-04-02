import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sage: { DEFAULT: "#87A878", light: "#a8c49b", dark: "#5e7d52" },
        cream: { DEFAULT: "#FFF8E7", dark: "#f5edda" },
        wood: { DEFAULT: "#8B6914", light: "#a8842a", dark: "#6b5010" },
        charcoal: { DEFAULT: "#2C2C2C", light: "#444444" },
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
