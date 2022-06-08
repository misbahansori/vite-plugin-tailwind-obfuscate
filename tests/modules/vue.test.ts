import { describe, expect, it } from "vitest";
import vue from "../../src/modules/vue";

describe("test vue transformer", () => {
  it("should transform vue code", () => {
    const code = `<div class="foo bar baz">`;

    const classMap = new Map();
    const result = vue(code, classMap);

    expect(result.code).toMatch(/<div class=\"\w{5} \w{5} \w{5}\">/);
  });

  it("should transform vue code", () => {
    const code = `const _hoisted_18 = { class: "flex items-center gap-x-2.5" }`;

    const classMap = new Map();
    const result = vue(code, classMap);

    expect(result.code).toMatch(
      /const _hoisted_18 = { class: "\w{5} \w{5} \w{5}" }/
    );
  });

  it("should transform vue code", () => {
    const code = `class: "h-8 w-8 rounded-full object-cover"`;

    const classMap = new Map();
    const result = vue(code, classMap);

    expect(result.code).toMatch(/class: \"\w{5} \w{5} \w{5} \w{5}\"/);
  });

  it("should transform vue code", () => {
    const code = `class: _normalizeClass(["flex items-center justify-center rounded-full p-2", {`;

    const classMap = new Map();
    const result = vue(code, classMap);

    expect(result.code).toMatch(
      /class: _normalizeClass\(\[\"\w{5} \w{5} \w{5} \w{5} \w{5}\", \{/
    );
  });

  it.skip("should transform vue code", () => {
    const code = `class: _normalizeClass(["flex items-center justify-center rounded-full p-2", {
                          'bg-indigo-400':
                            transaction.type === 'Send transaction',
                          'bg-green-400': transaction.type === 'Receive fund',
                        }])`;

    const classMap = new Map();
    const result = vue(code, classMap);

    console.log(result.code);

    expect(result.code).toMatch(
      /class: _normalizeClass\(\[\"\w{5} \w{5} \w{5} \w{5} \w{5}\", \{ \n '\w{5}'/
    );
  });
});
