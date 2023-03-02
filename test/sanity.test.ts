import { describe } from "vitest";

/* I generally keep this sanity test file around just to integrate-test Vitest.
That way I know it's me that messed up tests lol */

describe("Passing sanity test", (it) => {
  it("Should just pass", ({ expect }) => {
    expect(1).toEqual(1);
  });
});
