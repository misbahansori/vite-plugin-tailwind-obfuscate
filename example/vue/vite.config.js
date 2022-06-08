import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import obfuscate from "vite-plugin-tailwind-obfuscate";
import inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    obfuscate({
      dev: true,
    }),
    inspect(),
  ],
});
