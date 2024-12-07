// 1. lexical scoping
function outer() {
  let name = "its me";
  function inner() {
    console.log(`Name is = ${name}`); // Name is = its me
    console.log(`Count is = ${count}`); // Count is = 55
  }
  let count = 55;
  return inner();
}

outer();

// let result = outer();
// result();

// ******* CONCLUSION ********
// The 'count' variable works fine when we call 'inner' directly within 'outer'.
// If we add an early 'return' statement in 'outer', anything after it (like 'count') becomes unreachable.

// ********* SEPARATOR **********

// 2. Function Currying (important term)
function addition(a) {
  return function inner(b) {
    return a + b;
  };
}

let add = addition(5); // at this line of code "add" has ƒ inner(b) {
//     return a + b;
//   }

console.log(add(5)); // 10
console.log(add(95));
