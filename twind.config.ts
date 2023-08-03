import { Options } from "$fresh/plugins/twindv1.ts";
import { defineConfig } from "twind";

import tailwind from "https://esm.sh/@twind/preset-tailwind@1.1.3";

export default {
  ...defineConfig({
    presets: [tailwind()],
  }),
  selfURL: import.meta.url,
  darkMode: "class",
} as Options;
