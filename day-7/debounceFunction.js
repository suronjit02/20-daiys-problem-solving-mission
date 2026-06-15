/*
Problem 31: Debounce Function  [Medium]
Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
Example:
const debouncedSearch = debounce(search, 300);
// Fires only once after user stops typing for 300ms
Hint: Use clearTimeout and setTimeout.
*/

const debounce = (fn, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const writeDone = () => {
  console.log("Done");
};

const debouncedFn = debounce(writeDone, 2000);

debouncedFn();
debouncedFn();
debouncedFn();
