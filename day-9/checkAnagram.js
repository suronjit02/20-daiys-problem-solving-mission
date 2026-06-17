/* Problem 42: Check Anagram  [Easy]
Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
Example:
Input: 'listen', 'silent'  → Output: true Input: 'hello', 'world'   → Output: false
Hint: Sort both strings and compare, or use a character frequency map. */

const isAnagram = (str1, str2) => {
  return str1.split("").sort().join() === str2.split("").sort().join();
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
