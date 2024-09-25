//The setTimeout function in JavaScript is used to execute a function or a piece of code after a specified delay (in milliseconds). It runs the function once, after the given delay, without blocking the execution of the rest of the code.

console.log("This is before setTimeout function");

setTimeout(() => {
  console.log("Inside the SetTimeout function");
}, 3000);

console.log("After the first setTimeout function");

const func = (a, b) => a + b;

setTimeout(() => console.log(func(10, 10)), 3000);

console.log("The last statement");
