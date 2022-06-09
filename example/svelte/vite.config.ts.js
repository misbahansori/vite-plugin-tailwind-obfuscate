// vite.config.ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import obfuscate from "vite-plugin-tailwind-obfuscate";
import inspect from "vite-plugin-inspect";
var vite_config_default = defineConfig({
  plugins: [
    svelte(),
    obfuscate({
      dev: true
    }),
    inspect()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tIFwiQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZVwiO1xuaW1wb3J0IG9iZnVzY2F0ZSBmcm9tIFwidml0ZS1wbHVnaW4tdGFpbHdpbmQtb2JmdXNjYXRlXCI7XG5pbXBvcnQgaW5zcGVjdCBmcm9tIFwidml0ZS1wbHVnaW4taW5zcGVjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHN2ZWx0ZSgpLFxuICAgIG9iZnVzY2F0ZSh7XG4gICAgICBkZXY6IHRydWUsXG4gICAgfSksXG4gICAgaW5zcGVjdCgpLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsTUFDUixLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
