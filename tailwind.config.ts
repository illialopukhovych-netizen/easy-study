import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#09101d',
          900: '#0f172a',
          800: '#111827',
        },
        brand: {
          50: '#f3f1ff',
          100: '#e8e3ff',
          200: '#d7ccff',
          300: '#bcaeff',
          400: '#9a87ff',
          500: '#7d65f5',
          600: '#6145df',
          700: '#4b35b2',
          800: '#3d2d8d',
          900: '#31276d',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
