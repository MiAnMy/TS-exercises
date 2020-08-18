import countTrue from "../How_Much_is_True";

describe("Count the number of true elements in array", () => {
  test("For array [true, false, false, true, false]", () => {
    expect(countTrue([true, false, false, true, false])).toBe(2);
  });

  test("For array [false, false, false, false]", () => {
    expect(countTrue([false, false, false, false])).toBe(0);
  });

  test("For array []", () => {
    expect(countTrue([])).toBe(0);
  });
});
