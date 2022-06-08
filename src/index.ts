import type { Plugin } from "vite";
import css from "./modules/css";
import vue from "./modules/vue";

export default function obfuscate(config: {}): Plugin {
  const classMap = new Map();
  return {
    name: "obfuscate-tailwind",
    apply: "build",
    transform(code, id) {
      if (id.endsWith(".vue") && !id.startsWith("vendor")) {
        return vue(code, classMap);
      }
      if (id.endsWith(".css")) {
        return css(code, classMap);
      }
    },
  } as Plugin;
}
