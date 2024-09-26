// Spread Operator we use for iterables (like array,strings,and objects) to expand them , merge them, copying them.

// 1. Copying arrays
const arr = [1, 2, 3, 4, 5];
const newArr = [...arr];
console.log(newArr); // [1, 2, 3, 4, 5]

// 2. merging arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const merge = [...num1, ...num2];
console.log(merge); // [1, 2, 3, 4, 5, 6]

// 3. passign numbers as function arguments
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // here all numbers passed but there are only a,b,c 3 args so first 3 values from numbers arrays will be assigned to them. output => 1+2+3 = a+b+c = 6

// 4. merging objects
const obj1 = { name: "bob", age: 465 };
const obj2 = { gender: "male" };
const mergeObjs = { ...obj1, ...obj2 };
console.log(mergeObjs); // {name: 'bob', age: 465, gender: 'male'}
