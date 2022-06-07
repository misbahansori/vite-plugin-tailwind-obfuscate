import { describe, expect, it } from "vitest";
import vue from "../../src/modules/vue";

describe("test vue transformer", () => {
  it("should transform vue code", () => {
    const code = `<div class="foo bar baz">`;

    const classMap = new Map();
    const result = vue(code, classMap);

    expect(result.code).toMatch(/<div class=\".* .* .*\">/);
  });
});
