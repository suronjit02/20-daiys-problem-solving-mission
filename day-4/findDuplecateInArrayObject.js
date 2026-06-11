/*  
Problem 20: Find Duplicate Values in Array of Objects  [Medium]
Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
Example:
Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
Hint: Use a frequency map (object) to count occurrences. */

const findDuplicateNames = (arr) => {
  const nameCount = {};
  const duplicates = [];

  arr.forEach((obj) => {
    const name = obj.name;
    nameCount[name] = (nameCount[name] || 0) + 1;
  });

  Object.keys(nameCount).forEach((name) => {
    if (nameCount[name] > 1) {
      duplicates.push(name);
    }
  });

  return duplicates;
};

const people = [
  { name: "Ali" },
  { name: "Sara" },
  { name: "Ali" },
  { name: "Ahmed" },
  { name: "Sara" },
];

console.log(findDuplicateNames(people));
