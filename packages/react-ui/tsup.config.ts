import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  minify: true,
  dts: true,
  format: ["cjs", "esm"],
  external: ["react", "@chia-stack/usehook"],
});
