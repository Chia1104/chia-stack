import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  sourcemap: true,
  minify: true,
  dts: true,
  format: ["cjs", "esm"],
  external: ["react"],
});
