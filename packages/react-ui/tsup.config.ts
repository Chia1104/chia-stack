import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  minify: true,
  dts: true,
  format: ["cjs", "esm"],
  target: "es2020",
});
