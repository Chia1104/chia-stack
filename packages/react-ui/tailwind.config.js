const config = require("@chia-stack/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  ...config,
};
