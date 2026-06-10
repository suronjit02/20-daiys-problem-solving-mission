/* Problem 12: Find Maximum Value in Array  [Easy]
Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
Example:
Input: [3, 1, 7, 2, 9]  → Output: 9
Hint: Loop through and track the largest value found. */

const maxValueInArray = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maxValueInArray([3, 15, 7, 2, 9]));
