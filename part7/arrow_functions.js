// Arrow functions in JavaScript provide a shorter and more concise way to write functions.

const warning = () => {
  console.warn("This is a warning. Beware of it.");
};

warning();

// example 2
const power = (a, b) => {
  return (result = a ** b);
};

console.log(power(4, 3));

//------------- IMPLICIT ---------------
// Implicit Return: If the function body is a single expression, you can omit the curly braces and the return keyword.
const sum = (a, b) => a + b;
console.log(sum(10, 23));

//or

const error = () => console.error("This is not a real error. Don't worry.");
error();

//or

const mul = (p, q) => p * q;
console.log(mul(9, 8));

// Arrow functions do not have their own arguments object. If you need the arguments object, use a regular function.
const showArgs = () => {
  console.log(arguments); // This will throw an error in an arrow function
};

showArgs();
