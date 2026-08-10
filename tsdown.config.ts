import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: "src/index.ts",
    dts: true,
    clean: true,
  },
  {
    entry: "src/cli.ts",
    dts: true,
    clean: true,
  },
]);
