/* Problem 41: Two Sum  [Easy]
Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
Example:
Input: [2, 7, 11, 15], target = 9 Output: [0, 1]  (because 2 + 7 = 9)
Hint: Use a hash map to store visited values and their indices. */

const twoSum = (arr, target) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // newArr.push(i);

    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        newArr.push(i, j);
      }
    }
  }

  return newArr;
};

console.log(twoSum([2, 7, 11, 15], 13));
