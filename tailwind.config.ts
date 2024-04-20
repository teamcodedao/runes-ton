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
        desktop: '1440px',
      },
      colors: {
        primary: '#5AC3F8',
      },
      dropShadow: {
        text: '2px 1px 2px rgba(30, 166, 234, 0.80)',
        'white-text': '2px 1px 2px white',
        'xl-text': '2px 1px 6px rgba(30, 166, 234, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
