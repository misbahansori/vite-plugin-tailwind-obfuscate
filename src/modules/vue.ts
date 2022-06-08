import { escapeClassName, randomClassName } from "../utils";

export default function vue(
  code: string,
  classMap: Map<string, string>,
  config: GeneratorConfig
) {
  const classRegexs = [/class="([a-z-0-9\\\[\]\/\(\)\.': ]*)"/g];
  const rawClassesMap = new Map();
  const rawClasses: string[] = [];

  classRegexs.forEach((regex) => {
    let match: RegExpExecArray;
    while ((match = regex.exec(code)) !== null) {
      rawClasses.push(match[1]);
    }
  });

  const classes = rawClasses.map((c) => c.split(" "));

  const unqiueClasses = new Set(classes.flat());

  unqiueClasses.forEach((className) => {
    let random = randomClassName(config);
    while (classMap.has(random)) {
      random = randomClassName(config);
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
    map: null,
  };
}
