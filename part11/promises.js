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

// response("Concept of promises in JavaScript");
