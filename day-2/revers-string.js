/* Problem 6: Reverse a String  [Easy]
Description: Write a function reverseString(str) that returns the reverse of a given string.
Example:
Input: 'hello'   → Output: 'olleh' Input: 'world'   → Output: 'dlrow'
Hint: Use split(''), reverse(), and join(''). */

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("hello"));
