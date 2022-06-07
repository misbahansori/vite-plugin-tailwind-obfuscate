import { escapeClassName } from "../utils";

export default function css(code: string, classMap: Map<string, string>) {
  const cssClassNameRegex = /\.([a-z-0-9\\\[\]\/\(\)\.':])*{/gi;

  let cssClassNames = code
    .match(cssClassNameRegex)
    .map((className) => className.slice(1, -1));

  cssClassNames
    .sort((a, b) => b.length - a.length)
    .forEach((className) => {
      const escapedClassName = escapeClassName(className);
      if (classMap.has(className.replace(/\\/gi, ""))) {
        code = code.replace(
          new RegExp(`\.${escapedClassName}{`, "g"),
          "." + classMap.get(className.replace(/\\/gi, "")) + "{"
        );
      }
    });

  return {
    code,
    map: { mappings: cssClassNames },
  };
}
