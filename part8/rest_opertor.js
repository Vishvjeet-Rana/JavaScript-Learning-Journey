let arr = [1, 2, 3, 4, 5];

const rest1 = (...args) => {
  for (let arg of args) {
    console.log(`you gave us ${arg}`);
  }
};

rest1(arr);

// array destructuring
let array = [3, 4, 5, 6, 7];
const [first, ...rest] = [...array];
console.log("first =", first);
console.log("rest =", rest);

// OR

let arr2 = [8, 5, 6, 7, 4, 3, 1, 2];
const [one, two, ...three] = [...arr2];
console.log(`one = ${one}, two = ${two}, three = ${three}`);

// Object destructuring
const obj = {
  name: "Peter",
  age: 586754,
  gender: "male",
  country: "Romania",
};

const { name, age, ...rest2 } = { ...obj };
console.log(`name = ${name}, age = ${age} and rest = ${JSON.stringify(rest2)}`);

// console.log(`name = ${name}, age = ${age} and rest = ${rest}`); this will not work explanation given below

// Why ${rest} Doesn't Work as Expected:
// The problem arises because JavaScript's template literals (${}) convert non-primitive types (like objects and arrays) into their string representation, which results in [object Object] when you try to interpolate an object directly in a template literal. This is because rest is an object, and when you try to print it within ${}, it gets converted into a string using the default .toString() method, which produces [object Object].

let array1 = [1, 2, 3, 6, 78, 8, 9];
let array2 = [4, 5, 7, 11];

// for finding the max element
const max = (...args) => {
  return args.reduce((max, el) => {
    if (max > el) {
      return max;
    } else {
      return el;
    }
  });
};

console.log(max(...array1, ...array2));
