//Q.1  a "good string" is a string whose lenght is greater than 3 and first letter is v

let string = prompt("enter the string");
if (string.length > 3 && (string[0] === "v" || string[0] === "V")) {
  alert("This is a good string!!!");
} else {
  alert("not a good string!!!");
}
