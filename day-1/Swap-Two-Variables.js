const swapTowVariables = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
};

console.log(swapTowVariables(5, 10));
