import { escapeClassName, randomClassName } from "../utils";

export default function vue(
  code: string,
  classMapping: Map<string, string>,
  config: GeneratorConfig
) {
  const classRegexs = [
    // Catch regular class names
    /class="([a-z-0-9\\\[\]\/\(\)\.': ]*)"/g,

    // Catch class names using tenary operator
    /:class="[^"]*\?(?: *)?'([a-z-0-9\\\[\]\/\(\)\.: ]*)'(?: *)?[^"]*:(?: *)?'([a-z-0-9\\\[\]\/\(\)\.: ]*)'[^"]*/g,
  ];

  const rawClasses: string[] = [];

  classRegexs.forEach((regex) => {
    let match: RegExpExecArray;
    while ((match = regex.exec(code)) !== null) {
      if (match[1]) {
        rawClasses.push(match[1]);
      }
      if (match[2]) {
        rawClasses.push(match[2]);
      }
    }
  });

  rawClasses.forEach((rawClass) => console.log(rawClass));

  const unqiueClasses = new Set(rawClasses.map((c) => c.split(" ")).flat());

  unqiueClasses.forEach((className) => {
    let random = randomClassName(config);

    while ([...classMapping.values()].includes(random)) {
      random = randomClassName(config);
    }

    if (!classMapping.has(className)) {
      classMapping.set(className, random);
    }
  });

  const rawClassesMap = new Map();

  rawClasses
    .sort((a, b) => b.length - a.length)
    .forEach((rawClass) => {
      const newRawClass = rawClass
        .split(" ")
        .map((c) => {
          if (classMapping.has(c)) {
            return classMapping.get(c);
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
