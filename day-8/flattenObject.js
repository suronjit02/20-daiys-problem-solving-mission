/* Problem 39: Flatten Object (Deep)  [Medium]
Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
Example:
Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
Hint: Use recursion; build the key by joining parent keys with dots. */

const flattenObject = (obj, parentKey = "", result = {}) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

console.log(flattenObject({ a: { b: { c: 1 } } })); // { 'a.b.c': 1 }
console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })); // { 'a': 1, 'b.c': 2, 'b.d.e': 3 }
