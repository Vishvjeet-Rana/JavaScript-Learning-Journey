// A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
// For a given string, print if it is golden or not.

let string = prompt("enter the string");

if ((string[0] === "A" || string[0] === "a") && string.length > 5) {
  console.log("golden string");
} else {
  console.log("plastic string");
}
