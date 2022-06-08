import { cssPseudoSelectorRegex } from "./../utils";
import { escapeClassName, removeCssPsuedoSelector } from "../utils";
import type { TransformResult } from "rollup";

export default function css(
  code: string,
  classMapping: Map<string, string>
): TransformResult {
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

      if (classMapping.has(removeCssPsuedoSelector(nomalClassName))) {
        code = code.replace(
          new RegExp(
            `\.${escapedClassName}(:?(${cssPseudoSelectorRegex})?[\(\\w\d\) ]*){`,
            "g"
          ),
          "." +
            classMapping.get(removeCssPsuedoSelector(nomalClassName)) +
            "$1{"
        );
      }
    });

  return {
    code,
    map: null,
  };
}
