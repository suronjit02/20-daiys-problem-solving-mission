/*
Problem 3: Find the Largest of Three Numbers  [Easy]
Description: Write a function largest(a, b, c) that returns the largest of three numbers.
Example:
Input: 3, 7, 5  → Output: 7
Hint: Use Math.max() or if-else conditions.
*/

const findLargest = (a, b, c) => {
  /*
  if (a > b && c) return a;
  if (b > a && c) return b;
  if (c > a && b) return c;
  */

  return Math.max(a, b, c);
};

console.log(findLargest(4, 5, 3));
