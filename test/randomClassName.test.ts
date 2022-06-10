import { describe, it, expect } from "vitest";
import { randomClassName } from "../src/utils";

describe("randomClassName", () => {
  it("should return a random class name with lengt of 5", () => {
    const result = randomClassName({ length: 5 });
    expect(result.length).toBe(5);
  });
  it("should return a random class name with lengt of 4", () => {
    const result = randomClassName({ length: 4 });
    expect(result.length).toBe(4);
  });
  it("should return a random class name with lengt of 6", () => {
    const result = randomClassName({ length: 6 });
    expect(result.length).toBe(6);
  });
  it("should return a random class name with random length", () => {
    const result = randomClassName({ min: 6, max: 7 });
    expect(result.length).toBeGreaterThanOrEqual(6);
    expect(result.length).toBeLessThanOrEqual(7);
  });
  it("should return a random class name with random length", () => {
    const result = randomClassName({ min: 1, max: 2 });
    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result.length).toBeLessThanOrEqual(2);
  });
});
