import { describe, expect, it } from "vitest";
import transformHtmlFiles from "../../src/modules/html";

describe("test vue transformer", () => {
  it("should transform regular class", () => {
    const code = `<div class="foo bar baz">`;

    const classMapping = new Map();
    const result = transformHtmlFiles(code, classMapping, {});

    expect(result.code).toMatch(/<div class=\"\w{5} \w{5} \w{5}\">/);
  });

  it("should transform tennary operator", () => {
    const code = `
      :class="
        invoice.status === 'Successful'
          ? 'bg-green-400'
          : 'bg-indigo-400'
      "
    `;

    const classMapping = new Map();
    classMapping.set("bg-green-400", "asdf");
    classMapping.set("bg-indigo-400", "qwer");
    const result = transformHtmlFiles(code, classMapping, {});

    expect(result.code).toEqual(`
      :class="
        invoice.status === 'Successful'
          ? 'asdf'
          : 'qwer'
      "
    `);
  });

  it("should transform tennary operator 2", () => {
    const code = `
      :class="
        invoice.status === 'Successful'
          ? 'border-green-400/10 bg-green-700/20 text-green-400'
          : 'border-indigo-400/10 bg-indigo-700/20 text-indigo-400'
      "
    `;

    const classMapping = new Map([
      ["border-green-400/10", "asdf"],
      ["bg-green-700/20", "qwer"],
      ["text-green-400", "zxcv"],
      ["border-indigo-400/10", "poiu"],
      ["bg-indigo-700/20", "lkjh"],
      ["text-indigo-400", "mnbv"],
    ]);

    const result = transformHtmlFiles(code, classMapping, {});

    expect(result.code).toEqual(`
      :class="
        invoice.status === 'Successful'
          ? 'asdf qwer zxcv'
          : 'poiu lkjh mnbv'
      "
    `);
  });
});
