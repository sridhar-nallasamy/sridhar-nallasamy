/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './assets/svg/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        spaceDots: {
          '0%': { transform: 'translateY(0)', opacity: 0 },
          '3%': { opacity: 1 },
          '100%': { transform: 'translateY(-2000px)', opacity: 1 },
        },
      },
      colors: {
        'black-transparent': '#000000b9',
        'space-dark': '#1e2022',
      },
      boxShadow: { 'mine-2-10': '0 2px 10px #000' },
    },
  },
  plugins: [],
};
