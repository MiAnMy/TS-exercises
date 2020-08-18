// Oddish vs. Evenish
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd,
// and a number is Evenish if the sum of all of its digits is even.
// If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

const oddishOrEvenish = (value: number): string => {
  const sum: number = Array.from(String(value), Number).reduce(
    (pValue, cValue): number => pValue + cValue
  );

  return sum % 2 ? "Oddish" : "Evenish";
};

console.log(oddishOrEvenish(43)); // ➞ "Oddish"

console.log(oddishOrEvenish(373)); // ➞ "Oddish"

console.log(oddishOrEvenish(4433)); // ➞ "Evenish"

console.log(oddishOrEvenish(123)); // ➞ "Evenish"
