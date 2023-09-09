import { expect, describe, test } from "bun:test";
import { pipe } from "../src/index.js";

describe("pipe", () => {
  test("basic", () => {
    const value = pipe(1)
      .pipe((x) => x + 2)
      .pipe((x) => x * 2).value;

    expect(value).toBe(6);
  });
});
