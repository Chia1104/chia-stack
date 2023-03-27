const config = require("@chia-stack/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [config],
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        primary: "#00e1ff",
        secondary: "#ff00e1",
      },
    },
  },
};
