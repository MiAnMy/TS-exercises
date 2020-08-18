import Array_of_Multiples from "../Array_of_Multiples";
test("Array_of_Multiples test", () => {
  expect(Array_of_Multiples(7, 5)).toStrictEqual([7, 14, 21, 28, 35]);
  expect(Array_of_Multiples(12, 10)).toStrictEqual([
    12,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    108,
    120,
  ]);
  expect(Array_of_Multiples(17, 6)).toStrictEqual([17, 34, 51, 68, 85, 102]);
});
