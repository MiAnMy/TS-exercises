//1. Create a function which returns the number of true values there are in an array.
const countTrue = (array: Array<boolean>): number => {
  if (array.length === 0) return 0;
  array = array.filter((bool: boolean) => bool === true);
  return array.length;
};

export default countTrue;

// console.log(countTrue([true, false, false, true, false])); // ➞ 2

// console.log(countTrue([false, false, false, false])); // ➞ 0

// console.log(countTrue([])); // ➞ 0
