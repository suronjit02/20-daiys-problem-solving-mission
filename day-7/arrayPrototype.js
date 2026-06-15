/*  
Problem 35: Implement Array.prototype.map from Scratch  [Medium]
Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
Example:
myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
Hint: Loop through the array, apply the callback to each element, push results to a new array. */

const myMap = (arr, callback) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const newValue = callback(arr[i]);

    result.push(newValue);
  }

  return result;
};

const callback = (x) => {
  return  x * 2;
};

const result = myMap([2, 4, 5, 7, 8], callback);

console.log(result);