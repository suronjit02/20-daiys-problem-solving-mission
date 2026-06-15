/* Problem 33: Deep Clone an Object  [Medium]
Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
Example:
const a = {x: {y: 1}};const b = deepClone(a); b.x.y = 99;// a.x.y is still 1
Hint: Use recursion and check for object/array types.
 */

const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map(deepClone);
  } else {
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
};

const a = { x: { y: 1 } };
const b = deepClone(a);
b.x.y = 99;
console.log(a.x.y); // 1
