import type { Plugin } from "vite";
import css from "./modules/css";
import vue from "./modules/vue";

export default function obfuscate(config: Config): Plugin[] {
  const classMap = new Map();
  return [
    {
      name: "obfuscate-tailwind-html",
      apply: config.dev ? "serve" : "build",
      enforce: "pre",
      transform(code, id) {
        if (id.endsWith(".vue")) {
          return vue(code, classMap);
        }
      },
    },
    {
      name: "obfuscate-tailwind-css",
      apply: config.dev ? "serve" : "build",
      transform(code, id) {
        if (id.endsWith(".css")) {
          return css(code, classMap);
        }
      },
    },
  ];
}
