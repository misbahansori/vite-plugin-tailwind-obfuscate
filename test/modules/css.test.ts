import { describe, expect, it } from "vitest";
import css from "../../src/modules/css";

describe("test css transformer", () => {
  it("should transform .text-gray-400 to .asdfg", () => {
    const code = `.text-gray-400{`;

    const classMap = new Map();
    classMap.set("text-gray-400", "asdfg");
    const result = css(code, classMap);

    expect(result.code).toMatch(/.asdfg{/);
  });

  it("should transform .hover:text-gray-400:hover to .asdfg:hover", () => {
    const code = `.hover:text-gray-400:hover{`;

    const classMap = new Map();
    classMap.set("hover:text-gray-400", "asdfg");
    const result = css(code, classMap);

    expect(result.code).toMatch(/.asdfg:hover{/);
  });
});