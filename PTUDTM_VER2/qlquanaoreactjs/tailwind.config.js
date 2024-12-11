/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.jsx",
    "./node_modules/tw-elements-react/dist/js/**/*.ts",
    "./node_modules/tw-elements-react/dist/js/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
