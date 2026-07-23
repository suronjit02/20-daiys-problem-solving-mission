/* Problem 40: Group Array by Property  [Medium]
Description: Write a function groupBy(arr, key) that groups an array of objects by a given property key.
Example:
groupBy([{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'mango'}], 'type')// {fruit: [...], veg: [...]}
Hint: Use reduce() and build an object where each key maps to an array. */

const groupBy = (arr, key) => {
  return arr.reduce((result, obj) => {
    const groupKey = obj[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(obj);
    return result;
  }, {});
};

console.log(
  groupBy(
    [
      { type: "fruit", name: "apple" },
      { type: "veg", name: "carrot" },
      { type: "fruit", name: "mango" },
    ],
    "type",
  ),
);
// Output: { fruit: [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'mango' }], veg: [{ type: 'veg', name: 'carrot' }] }
