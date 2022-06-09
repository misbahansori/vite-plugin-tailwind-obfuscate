import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@honkhonk/vite-plugin-svgr";
import obfuscate from "vite-plugin-tailwind-obfuscate";
import inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    obfuscate({
      dev: true,
    }),
    inspect(),
  ],
});
