import type { Plugin } from "vite";
import css from "./modules/css";
import transformHtmlFile from "./modules/html";
import { endsWithAny } from "./utils";

export default function obfuscate(config: PluginConfig): Plugin[] {
  const classMapping = new Map();
  return [
    {
      name: "obfuscate-tailwind-html",
      apply: config.dev ? "serve" : "build",
      enforce: "pre",
      transform(code, id) {
        if (endsWithAny(["vue", "jsx", "tsx"], id)) {
          return transformHtmlFile(code, classMapping, config);
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
      generateBundle() {
        const classMappingObject = {};

        classMapping.forEach((value, key) => {
          classMappingObject[key] = value;
        });

        this.emitFile({
          type: "asset",
          name: "class-mapping.json",
          source: JSON.stringify(classMappingObject),
        });
      },
    },
  ];
}
