const animation = require("./animation");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9200ff",
          light: "#b200ff",
          dark: "#6e00cc",
          transparent: "rgba(146,0,255,0.75)",
        },
        secondary: {
          DEFAULT: "#007aff",
          light: "#339cff",
          dark: "#0062cc",
          transparent: "rgba(0,122,255,0.75)",
        },
        success: {
          DEFAULT: "#4caf50",
          light: "#80e27e",
          dark: "#087f23",
          transparent: "rgba(76,175,80,0.75)",
        },
        info: {
          DEFAULT: "#2196f3",
          light: "#6ec6ff",
          dark: "#0069c0",
          transparent: "rgba(33,150,243,0.75)",
        },
        warning: {
          DEFAULT: "#ff9800",
          light: "#ffc947",
          dark: "#c66900",
          transparent: "rgba(255,152,0,0.75)",
        },
        danger: {
          DEFAULT: "#f44336",
          light: "#ff7961",
          dark: "#ba000d",
          transparent: "rgba(244,67,54,0.75)",
        },
        light: {
          DEFAULT: "#fafafa",
          light: "#ffffff",
          dark: "#c7c7c7",
          transparent: "rgba(250,250,250,0.75)",
        },
        dark: {
          DEFAULT: "#212121",
          light: "#484848",
          dark: "#000000",
          transparent: "rgba(33,33,33,0.75)",
        },
        code: {
          DEFAULT: "#24292e",
          light: "#484848",
          dark: "#000000",
          transparent: "rgba(36,41,46,0.75)",
        },
        cyan: {
          DEFAULT: "#00bcd4",
          light: "#62efff",
          dark: "#008ba3",
          transparent: "rgba(0,188,212,0.75)",
        },
        teal: {
          DEFAULT: "#009688",
          light: "#52c7b8",
          dark: "#00675b",
          transparent: "rgba(0,150,136,0.75)",
        },
        purple: {
          DEFAULT: "#9c27b0",
          light: "#d05ce3",
          dark: "#6a0080",
          transparent: "rgba(156,39,176,0.75)",
        },
        /** @TODO: Add more colors */
        cyberpunk: {
          DEFAULT: "#F2E307",
          light: "#F2E307",
          dark: "#F2E307",
          transparent: "rgba(242,227,7,0.75)",
        },
        /** @TODO: Add more colors */
        typographyLight: {
          DEFAULT: "#000000",
          h1: "#000000",
          h2: "#212121",
          h3: "#212121",
          h4: "#212121",
          h5: "#212121",
          h6: "#212121",
          p: "#212121",
          a: "#007aff",
          strong: "#000000",
          li: "#212121",
          blockquote: "#212121",
          code: "#24292e",
          figcaption: "#212121",
          table: "#212121",
          thead: "#212121",
          tbody: "#212121",
          tfoot: "#212121",
          tr: "#212121",
          th: "#212121",
          td: "#212121",
        },
        /** @TODO: Add more colors */
        typographyDark: {
          DEFAULT: "#ffffff",
          h1: "#ffffff",
          h2: "#ffffff",
          h3: "#ffffff",
          h4: "#ffffff",
          h5: "#ffffff",
          h6: "#ffffff",
          p: "#ffffff",
          a: "#007aff",
          strong: "#ffffff",
          li: "#ffffff",
          blockquote: "#ffffff",
          code: "#ffffff",
          figcaption: "#ffffff",
          table: "#ffffff",
          thead: "#ffffff",
          tbody: "#ffffff",
          tfoot: "#ffffff",
          tr: "#ffffff",
          th: "#ffffff",
          td: "#ffffff",
        },
      },
    },
  },
  darkMode: "class",
};

module.exports.animation = animation;
