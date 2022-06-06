import randomString from "randomstring";

const classNamesRegex = /class[: =]*[\\"]*([a-z-0-9\\\[\]\/\(\)\.': ])*["\\]/g;
const cssClassNameRegex = /\.([a-z-0-9\\\[\]\/\(\)\.':])*{/gi;

function escapeClassName(className: string) {
  return className.replace(/[\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

export default function obfuscateTailwind(config: {}) {
  const classMap = new Map();
  const rawClassesMap = new Map();
  return {
    name: "obfuscate-tailwind",
    transform: (code: string, id: string) => {
      if (id.endsWith(".vue") && !id.startsWith("vendor")) {
        const rawClasses = code
          .match(classNamesRegex)
          .map((c) => c.replace(new RegExp(/\\|\"|class[: =\ ]*/, "g"), ""))
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

      if (id.endsWith(".css")) {
        let cssClassNames = code
          .match(cssClassNameRegex)
          .map((className) => className.slice(1, -1));

        cssClassNames.forEach((className) => {
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
    },
  };
}
