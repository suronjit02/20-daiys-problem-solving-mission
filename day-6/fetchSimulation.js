/* Problem 29: Async/Await Fetch Simulation  [Medium]
Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
Example:
await getUserData(1);// returns {id:1, name:'Test User'}
Hint: Use async/await with a Promise that wraps setTimeout. */

const getUserData = async (id) => {
  const userData = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Test User" });
    }, 500);
  });
  return userData;
};

getUserData(1).then((data) => console.log(data));
