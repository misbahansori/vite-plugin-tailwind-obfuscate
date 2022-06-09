import { cssPseudoSelectorRegex } from "./../utils";
import { escapeClassName, removeCssPsuedoSelector } from "../utils";

export default function css(code: string, classMapping: Map<string, string>) {
  const cssClassNameRegex = /\.([a-z-0-9\\\[\]\/\(\)\.':])*{/gi;

  let cssClassNames = code.match(cssClassNameRegex);

  if (!cssClassNames) return;

  cssClassNames = cssClassNames.map((className) => className.slice(1, -1));

  cssClassNames
    .sort((a, b) => b.length - a.length)
    .forEach((className) => {
      const escapedClassName = escapeClassName(
        removeCssPsuedoSelector(className)
      );

      const nomalClassName = removeCssPsuedoSelector(
        className.replace(/\\/gi, "")
      );

      if (classMapping.has(nomalClassName)) {
        const regex = new RegExp(
          `\.${escapedClassName}(:?(${cssPseudoSelectorRegex})?[\(\\w\d\) ]*){`,
          "g"
        );
        code = code.replace(
          regex,
          "." + classMapping.get(nomalClassName) + "$1{"
        );
      }
    });

  return {
    code,
    map: null,
  };
}
