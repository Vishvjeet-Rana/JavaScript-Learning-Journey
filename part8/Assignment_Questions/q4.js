// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled.
// It was tricky one intially for me.

const doubleAndReturnArgs = (arr, ...args) => {
  return [...arr, ...args.map((el) => el * 2)];
};

console.log(doubleAndReturnArgs([1, 2, 3, 4, 5], 5, 6, 7, 8));
