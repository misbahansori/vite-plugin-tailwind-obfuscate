import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import obfuscate from "vite-plugin-tailwind-obfuscate";
import inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    obfuscate({
      dev: true,
    }),
    inspect(),
  ],
});
