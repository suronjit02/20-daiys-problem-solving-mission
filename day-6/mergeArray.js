/* Problem 27: Merge Arrays with Spread  [Easy]
Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
Example:
Input: [1,2], [3,4], [5] Output: [1,2,3,4,5]
Hint: Use rest parameters and spread inside reduce or flat. */

const mergeArrays = (...arrays) => {
  return arrays.reduce((newArr, curr) => [...newArr, ...curr], []);
};
console.log(mergeArrays([1, 2], [3, 4], [5], [34,3]));
