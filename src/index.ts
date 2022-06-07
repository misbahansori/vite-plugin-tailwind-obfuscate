import css from "./modules/css";
import vue from "./modules/vue";

export default function obfuscateTailwind(config: {}) {
  const classMap = new Map();
  return {
    name: "obfuscate-tailwind",
    apply: "build",
    transform: (code: string, id: string) => {
      if (id.endsWith(".vue") && !id.startsWith("vendor")) {
        return vue(code, classMap);
      }

      if (id.endsWith(".css")) {
        return css(code, classMap);
      }
    },
  };
}
