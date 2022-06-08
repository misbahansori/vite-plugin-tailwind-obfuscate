import { describe, expect, it } from "vitest";
import vue from "../../src/modules/vue";

describe("test vue transformer", () => {
  it("should transform <div class=", () => {
    const code = `<div class="foo bar baz">`;

    const classMapping = new Map();
    const result = vue(code, classMapping, {});

    expect(result.code).toMatch(/<div class=\"\w{5} \w{5} \w{5}\">/);
  });
});
