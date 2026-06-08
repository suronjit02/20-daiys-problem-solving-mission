/*
Problem 1: Swap Two Variables  [Easy]
Description: Write a function that swaps the values of two variables without using a third variable.
Example:
Input: a = 5, b = 10 Output: a = 10, b = 5
Hint: Try using destructuring or arithmetic operators.
*/

const swapTowVariables = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};

console.log(swapTowVariables(5, 10));
