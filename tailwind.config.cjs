/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: {
          DEFAULT: "#524F4E",
          50: "#AEABAA",
          100: "#A4A09F",
          200: "#908C8A",
          300: "#7C7776",
          400: "#676362",
          500: "#524F4E",
          600: "#353333",
          700: "#181817",
          800: "#000000",
          900: "#000000",
        },
        premier: {
          DEFAULT: '#292B47',
          '50': '#777BB1',
          '100': '#6A6EA9',
          '200': '#565A95',
          '300': '#474A7B',
          '400': '#383B61',
          '500': '#292B47',
          '600': '#141523',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      },
    },
  },
  plugins: [],
};
