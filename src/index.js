const cryptoRandomString = require("crypto-random-string");

const vueRegex = /\.vue$/;
const cssRegex = /\.css$/;
const cssClassRegex = /\.([a-z-0-9\\\[\]\/\(\)\.':])*{/gi;
const vueClassRegex = /class: "([a-z-0-9\\\[\]\/\(\)\.': ])*"/gi;

module.exports = {
  obfuscate() {
    const classesMap = new Map();
    return {
      name: "obfuscate",
      apply: "build",
      transform(src, id) {
        if (vueRegex.test(id)) {
          let vueClassNames = new Set(
            src
              .match(vueClassRegex)
              .map((className) => className.slice(8, -1).split(" "))
              .flat()
          );

          console.log(vueClassNames);

          // console.log(vueClassNames);

          vueClassNames.forEach((className) => {
            if (!classesMap.has(className)) {
              classesMap.set(className, cryptoRandomString({ length: 4 }));
            }

            src = src.replace(
              new RegExp(`${className} `, "g"),
              classesMap.get(className) + " "
            );

            src = src.replace(
              new RegExp(`${className}"`, "g"),
              classesMap.get(className) + '"'
            );
            // src = src.replace(
            //   new RegExp(`${className}\\"`, "g"),
            //   classesMap.get(className) + '\\"'
            // );
          });

          console.log(src);
          return {
            code: src,
            map: null,
          };
        }
        if (cssRegex.test(id)) {
          const cssClassNamesMap = new Map();

          let cssClassNames = src
            .match(cssClassRegex)
            .map((className) => className.slice(1, -1));

          cssClassNames.forEach((className) => {
            cssClassNamesMap.set(className, className.replace(/\\/gi, ""));
          });

          // console.log(cssClassNames);
          cssClassNamesMap.forEach((className, value) => {
            if (classesMap.has(className)) {
              src = src.replace(
                new RegExp(`\.${value}{`, "g"),
                "." + classesMap.get(className) + "{"
              );
            }
          });

          return {
            code: src,
            map: null,
          };
        }
      },
    };
  },
};
