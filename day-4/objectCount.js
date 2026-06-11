/* Problem 16: Count Object Properties  [Easy]
Description: Write a function countProperties(obj) that returns the number of properties in an object.
Example:
Input: {a: 1, b: 2, c: 3}  → Output: 3
Hint: Use Object.keys().length. */

const countProperties = (obj) => {
  return Object.keys(obj).length;
};

const object = { a: 1, b: 2, c: 3, d: 4 };
console.log(countProperties(object));
