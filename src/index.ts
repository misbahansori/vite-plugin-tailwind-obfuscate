import type { Plugin } from "vite";
import css from "./modules/css";
import transformVueFile from "./modules/vue";

export default function obfuscate(config: PluginConfig): Plugin[] {
  const classMapping = new Map();
  return [
    {
      name: "obfuscate-tailwind-html",
      apply: config.dev ? "serve" : "build",
      enforce: "pre",
      transform(code, id) {
        if (id.endsWith(".vue")) {
          return transformVueFile(code, classMapping, config);
        }
      },
    },
    {
      name: "obfuscate-tailwind-css",
      apply: config.dev ? "serve" : "build",
      transform(code, id) {
        if (id.endsWith(".css")) {
          return css(code, classMapping);
        }
      },
    },
  ];
}
