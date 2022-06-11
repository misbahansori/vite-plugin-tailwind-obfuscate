import { escapeClassName, randomClassName } from "../utils";

export default function transformHtmlFiles(
  code: string,
  classMapping: Map<string, string>,
  config: GeneratorConfig
) {
  const classRegexs = [
    // Catch regular class names
    /class="([a-z-0-9\\\[\]\/\(\)\.': ]*)"/g,

    // React class names
    /className: "([a-z-0-9\\\[\]\/\(\)\.': ]*)"/g,

    // Catch class names using tenary operator
    /:class="[^"]*\?(?: *)?'([a-z-0-9\\\[\]\/\(\)\.: ]*)'(?: *)?[^"]*:(?: *)?'([a-z-0-9\\\[\]\/\(\)\.: ]*)'[^"]*/g,
  ];

  const rawClasses = getRawClasses(classRegexs, code);

  const unqiueClasses = new Set(
    rawClasses
      .map((c) => c.split(" "))
      .flat()
      .filter((c) => c.length > 0)
      .sort((a, b) => b.length - a.length)
  );

  unqiueClasses.forEach((className) => {
    let random = randomClassName(config);
    const classMappingList = Array.from(classMapping.values());

    while (classMappingList.includes(random)) {
      random = randomClassName(config);
    }

    if (!classMapping.has(className)) {
      classMapping.set(className, random);
    }
  });

  const rawClassesMap = new Map();

  rawClasses.forEach((classNames) => {
    const randomClassNames = classNames
      .split(" ")
      .map((className) => {
        if (classMapping.has(className)) {
          return classMapping.get(className);
        }
      })
      .join(" ");

    rawClassesMap.set(classNames, randomClassNames);
  });

  rawClasses
    .sort((a, b) => b.length - a.length)
    .forEach((classNames) => {
      const regex = new RegExp(escapeClassName(classNames), "g");
      code = code.replace(regex, rawClassesMap.get(classNames));
    });

  return {
    code,
    map: null,
  };
}

function getRawClasses(classRegexs: RegExp[], code: string) {
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

  return rawClasses;
}
