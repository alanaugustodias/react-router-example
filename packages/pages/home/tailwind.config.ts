import type { Config } from "tailwindcss";

import GlobalConfig from "@gca-web-app/styles/tailwind.config";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [GlobalConfig],
} satisfies Config;
