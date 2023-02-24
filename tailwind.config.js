/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "warm-gray": colors.stone,
        sky: colors.sky,
        teal: colors.teal,
      },
    },
    fontFamily: {
      san: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      sati: ["Satisfy", "cursive"],
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),
    require("flowbite/plugin"),
  ],
};
