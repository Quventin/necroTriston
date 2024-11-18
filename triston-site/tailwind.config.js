/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          light: '#3A3A3A',
          DEFAULT: '#1E1E1E',
          dark: '#0D0D0D',
          rust: '#B7410E',
          metal: '#A9A9A9',
        },
      },
    },
  },
  plugins: [],
};
