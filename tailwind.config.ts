import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-comic-rune)'],
      },
      screens: {
        desktop: '1140px',
      },
      colors: {
        primary: '#5AC3F8',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
