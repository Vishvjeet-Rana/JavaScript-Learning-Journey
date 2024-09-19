// 'if' statement
// example 1
let name = "hello";
console.log("before the if statement");
if (name) {
  console.log(`name is ${name}`);
}
console.log("after the if statement");

// 'else' statement
//example 2
// let age = prompt("enter you age");
// if (age >= 18) {
//   console.log("you can drive");
// } else {
//   console.log("you can't drive");
// }

//nested if-else statements
let marks = 890;

if (marks >= 33) {
  console.log("Passed");
  if (marks >= 80 && marks <= 90) {
    console.log("merit");
  } else if (marks >= 90) {
    console.log("high merit");
  }
} else {
  console.log("better luck next time!!");
}
