/* Problem 37: Retry a Promise  [Medium]
Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
Example:
await retry(unstableFetch, 3);// Tries up to 3 times before failing
Hint: Use a loop with try/catch; only throw after all retries are exhausted. */

const retry = async (fn, times) => {
  let lastError;

  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
};

let count = 0;

const unstableFetch = async () => {
  count++;

  console.log(`Attempt ${count}`);

  if (count < 3) {
    throw new Error("Failed");
  }

  return "Success";
};

// test case
retry(unstableFetch, 3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
