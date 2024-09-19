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
let age = prompt("enter you age");
if (age >= 18) {
  console.log("you can drive");
} else {
  console.log("you can't drive");
}

//nested if-else statements
let marks = 89;

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

// Switch statements
let color = "orchid";

switch (color) {
  case "red":
    console.log("the color of blood");
    break;
  case "pink":
    console.log("the color of lotus");
    break;
  case "black":
    console.log("color of dark king");
    break;
  case "orchid":
    console.log("you are fan of game of thrones");
    break;
  case "red":
    console.log("the color of blood");
    break;
  default:
    console.log("thre are no colors (sad emoji)");
}
