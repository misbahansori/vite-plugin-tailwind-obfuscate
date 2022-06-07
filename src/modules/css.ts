import { cssPseudoSelectorRegex } from "./../utils";
import { escapeClassName, removeCssPsuedoSelector } from "../utils";

export default function css(code: string, classMap: Map<string, string>) {
  const cssClassNameRegex = /\.([a-z-0-9\\\[\]\/\(\)\.':])*{/gi;

  let cssClassNames = code
    .match(cssClassNameRegex)
    .map((className) => className.slice(1, -1));

  cssClassNames
    .sort((a, b) => b.length - a.length)
    .forEach((className) => {
      const escapedClassName = removeCssPsuedoSelector(
        escapeClassName(className)
      );
      const nomalClassName = className.replace(/\\/gi, "");

      if (classMap.has(removeCssPsuedoSelector(nomalClassName))) {
        console.log(
          `\.${escapedClassName}(:?(${cssPseudoSelectorRegex})?[\(\\w\d\) ]*){`
        );
        code = code.replace(
          new RegExp(
            `\.${escapedClassName}(:?(${cssPseudoSelectorRegex})?[\(\\w\d\) ]*){`,
            "g"
          ),
          "." + classMap.get(removeCssPsuedoSelector(nomalClassName)) + "$1{"
        );
      }
    });

  return {
    code,
    map: { mappings: cssClassNames },
  };
}
