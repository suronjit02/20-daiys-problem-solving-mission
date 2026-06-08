const positiveNegativeZero = (n) => {
  if (n === 0) {
    return "Zero";
  } else if (n > 0) return "Positive";
  else return "Negative";
};

console.log(positiveNegativeZero(0));
