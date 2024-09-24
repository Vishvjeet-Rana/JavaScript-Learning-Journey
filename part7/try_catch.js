//In JavaScript, the try...catch statement is used to handle errors or exceptions that might occur in code. It allows you to "try" a block of code and "catch" any errors that occur, preventing the program from crashing.

try {
  console.log(a); // throw error because a is not defined
} catch {
  console.error("something wrong happened");
}

try {
  let result = 20 / 2;
  console.log(result); // this will execute successfully

  console.log(x); // error thrown by this
} catch {
  console.error("error is thrown by x because it is not defined");
}
