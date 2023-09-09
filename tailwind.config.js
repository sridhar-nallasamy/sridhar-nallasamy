/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'space-dark-blue': '#1e2022',
      },
      boxShadow: { 'mine-2-10': '0 2px 10px #000' },
    },
  },
  plugins: [],
};
