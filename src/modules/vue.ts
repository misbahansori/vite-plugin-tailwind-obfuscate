import randomString from "randomstring";
import { escapeClassName } from "../utils";

export default function vue(code: string, classMap: Map<string, string>) {
  const classNamesRegex =
    /(class|_normalizeClass)[\[\(: =]*[\\"]*([a-z-0-9\\\[\]\/\(\)\.': ])*["\\]/g;
  const rawClassesMap = new Map();

  const rawClasses = code
    .match(classNamesRegex)
    .map((c) =>
      c.replace(
        new RegExp(/(\\|\"|class|_normalizeClass)[\[\(: =\ ]*/, "g"),
        ""
      )
    )
    .filter((c) => c.length > 1);

  const classes = rawClasses.map((c) => c.split(" "));

  const unqiueClasses = new Set(classes.flat());

  unqiueClasses.forEach((className) => {
    let random = randomString.generate({
      length: 5,
      charset: "alphabetic",
      capitalization: "lowercase",
    });
    while (classMap.has(random)) {
      random = randomString.generate({
        length: 5,
        charset: "alphabetic",
        capitalization: "lowercase",
      });
    }
    classMap.set(className, random);
  });

  rawClasses
    .sort((a, b) => b.length - a.length)
    .forEach((rawClass) => {
      const newRawClass = rawClass
        .split(" ")
        .map((c) => {
          if (classMap.has(c)) {
            return classMap.get(c);
          }
          return c;
        })
        .join(" ");
      rawClassesMap.set(rawClass, newRawClass);
    });

  rawClassesMap.forEach((newRawClass, rawClass) => {
    const regex = new RegExp(escapeClassName(rawClass), "g");
    code = code.replace(regex, newRawClass);
  });

  return {
    code,
    map: { mappings: rawClassesMap },
  };
}
