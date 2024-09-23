// Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
// Example: 7! (factorial of 7) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040
//          5! (factorial of 5) = 1 x 2 x 3 x 4 x 5 = 120
//          3! (factorial of 3) = 1 x 2 x 3 = 6
//          0! is always 1

let num = 7;

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1); // Recursion
};

console.log(factorial(num));
