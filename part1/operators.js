// Arithmetic operators
let a = 10;
let b = 78;
console.log(`addition is = ${a + b}`);
console.log(`subtraction is = ${b - a}`);
console.log(`multiplication is = ${a * b}`);
console.log(`division is = ${b / a}`);
console.log(`remainder is = ${b % a}`);
console.log(`exponention or power is = ${b ** 10}`);

// Unary operators (++ , --)
let age = 35;
// In pre-incerement and pre-decrement change the value then use/assign
console.log(`Pre-increment the age ${++age}`);
console.log(`Pre-decrement the age ${--age}`);
// In post-incerement and post-decrement use/assign the value then change
console.log(`Post-increment the age ${age++}`);
console.log(`Post-decrement the age ${age--}`);

// Comparison operators
let personAge = 34;
if (personAge < 18) {
  console.log("person is not eligible for voting");
} else {
  console.log("person can vote");
}
