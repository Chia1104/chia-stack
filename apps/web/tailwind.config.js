const config = require("@chia-stack/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  ...config,
  theme: {
    extend: {
      colors: {
        primary: "#00e1ff",
        secondary: "#ff00e1",
        ...config.theme.extend.colors,
      },
    },
  },
  // plugins: [config],
};
