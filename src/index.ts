import type { Plugin } from "vite";
import transformCSSFiles from "./modules/css";
import transformHtmlFiles from "./modules/html";
import { endsWithAny } from "./utils";

export default function obfuscate(config: PluginConfig = {}): Plugin[] {
  const classMapping = new Map();

  const plugins: Plugin[] = [
    {
      name: "obfuscate-tailwind-html",
      apply: config.dev ? "serve" : "build",
      enforce: "pre",
      transform(code, id) {
        if (endsWithAny(["vue", "jsx", "tsx"], id)) {
          return transformHtmlFiles(code, classMapping, config);
        }
      },
    },
    {
      name: "obfuscate-tailwind-css",
      apply: config.dev ? "serve" : "build",
      transform(code, id) {
        if (id.endsWith(".css")) {
          return transformCSSFiles(code, classMapping);
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

  if (config.dev) {
    plugins.forEach((plugin) => {
      delete plugin.apply;
    });
  }

  return plugins;
}
