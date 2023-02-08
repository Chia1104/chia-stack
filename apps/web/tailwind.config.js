const config = require("@chia-stack/tailwind-config");
const resolveConfig = require("tailwindcss/resolveConfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        primary: "#00e1ff",
        secondary: "#ff00e1",
      },
    },
  },
  plugins: [resolveConfig(config)],
  darkMode: "class",
};
