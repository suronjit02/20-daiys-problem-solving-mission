/* Problem 5: Check Positive, Negative or Zero  [Easy]
Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
Example:
Input: -5  → Output: 'negative' Input: 0   → Output: 'zero'
Hint: Use if-else if-else statements. */

const positiveNegativeZero = (n) => {
  if (n === 0) {
    return "Zero";
  } else if (n > 0) return "Positive";
  else return "Negative";
};

console.log(positiveNegativeZero(0));
