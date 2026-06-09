/* Problem 7: Count Vowels in a String  [Easy]
Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
Example:
Input: 'hello'   → Output: 2 Input: 'javascript' → Output: 3
Hint: Use a loop or match() with a regular expression. */

const countVowel = (str) => {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
};

console.log(countVowel("hello"));