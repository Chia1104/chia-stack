import type { Config } from "tailwindcss";
import baseConfig, { animation } from "@chiastack/tailwind-config";

export default {
  presets: [animation, baseConfig],
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    `node_modules/@chiastack/react-ui/**/*.{js,ts,jsx,tsx,mjs}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00e1ff",
        secondary: "#ff00e1",
      },
    },
  },
} satisfies Config;
