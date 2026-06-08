/* 
Problem 2: Check Even or Odd  [Easy]
Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
Example:
Input: 4  → Output: true Input: 7  → Output: false
Hint: Use the modulus (%) operator.
*/

const evenOrOdd = (n) => {
  if (n % 2 === 0) {
    return true;
  } else return false;
};

console.log(evenOrOdd(200));
