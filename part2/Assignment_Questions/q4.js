// Write a program to check if 2 numbers have the same last digit.
// Eg: 32 and 47852 have the same last digit i.e. 2.

let digit1 = prompt("enter first digit");
let digit2 = prompt("enter second digit");

if (digit1[digit1.length - 1] === digit2[digit2.length - 1]) {
  console.log("Same");
} else {
  console.log("not same");
}
