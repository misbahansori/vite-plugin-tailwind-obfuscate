import random from "randomstring";
export function escapeClassName(className: string) {
  return className.replace(/[\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

export const cssPseudoSelector = [
  "active",
  "checked",
  "disabled",
  "empty",
  "enabled",
  "first-child",
  "first-of-type",
  "focus",
  "hover",
  "in-range",
  "invalid",
  "lang",
  "last-child",
  "last-of-type",
  "link",
  "not",
  "nth-child",
  "nth-last-child",
  "nth-last-of-type",
  "nth-of-type",
  "only-of-type",
  "only-child",
  "optional",
  "out-of-range",
  "read-only",
  "read-write",
  "required",
  "root",
  "target",
  "valid",
  "visited",
];

export const cssPseudoSelectorRegex = cssPseudoSelector.join("|");

export function removeCssPsuedoSelector(code: string) {
  return code.replace(
    new RegExp(`:(${cssPseudoSelectorRegex})[\(\\w\d\)]*`, "g"),
    ""
  );
}

export function randomClassName(config: {
  length?: number;
  min?: number;
  max?: number;
}) {
  let length = 5;

  if (config.length) {
    length = config.length;
  } else if (config.min && config.max) {
    length = getRandomInt(config.min, config.max);
  }

  return random.generate({
    length: length,
    charset: "alphabetic",
    capitalization: "lowercase",
  });
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function endsWithAny(suffixes: string[], string: string) {
  return suffixes.some(function (suffix) {
    return string.endsWith(suffix);
  });
}
