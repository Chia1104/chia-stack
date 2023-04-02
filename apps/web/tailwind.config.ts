import type { Config } from "tailwindcss";
import basedConfig, { animation } from "@chia-stack/tailwind-config";

export default {
  presets: [animation, basedConfig],
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    `node_modules/@chia-stack/react-ui/**/*.{js,ts,jsx,tsx}`,
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
