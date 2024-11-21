//In JavaScript, Promises are objects used to handle asynchronous operations. They represent a value that might be available now, or in the future, or never.

const response = (data) => {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("successfully data saved");
    } else {
      reject("poor internet connection.");
    }
  });
};

let result = response("Concept of promises in JavaScript");
result
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
