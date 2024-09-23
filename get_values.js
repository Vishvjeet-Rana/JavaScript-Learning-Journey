let terminal = {
  1: "open",
  2: "close",
  named: "John Doe Terminal",
  null: "not a not",
  undefined: "this is not undefined",
};

// Js changes Object's keys automatically in String. Doesn't matter what is the name of the key.

console.log(terminal["1"]); // The keys we gave as numbers can we accessed with inverted commas or without them inside the sqaure brackets.
console.log(terminal[2]);
console.log(terminal["named"]);

// these below are not null and undefined KEYWORDS but are object's which are automatically converted as strings by js
console.log(terminal[null]);
console.log(terminal[undefined]);

// Point to be noted
// console.log(terminal.2); Uncaught SyntaxError
// console.log(terminal.1); Uncaught SyntaxError
//this is not acceptable in JS. Dot operator not work desirely with object's keys those were given as number (converted to string by js automatically but still will not work)
