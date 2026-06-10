/*  
Problem 15: Chunk an Array  [Medium]
Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
Example:
Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
Hint: Use a while loop with slice(). */

const chunkArray = (arr, size) => {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    result.push(arr.slice(i, i + size));
    i += size;
  }
  return result;
};

console.log(chunkArray([1, 2, 3, 4, 5], 2));
