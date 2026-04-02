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
        sage: {
          50: '#f0f5ed',
          100: '#dce8d5',
          200: '#b9d1ab',
          300: '#9bbd87',
          400: '#87A878',
          500: '#6e9460',
          600: '#577748',
          700: '#415a36',
          800: '#2c3d24',
          900: '#162012',
        },
        cream: {
          50: '#FFFDF5',
          100: '#FFF8E7',
          200: '#FFF3D4',
          300: '#FFEEC1',
        },
        wood: {
          300: '#B8943A',
          400: '#A07E1E',
          500: '#8B6914',
          600: '#6E530F',
          700: '#523D0B',
        },
        charcoal: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#999999',
          400: '#666666',
          500: '#444444',
          600: '#333333',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#111111',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
