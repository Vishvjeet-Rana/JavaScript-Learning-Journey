let student = {
  name: "Visvhjeet Rana",
  profession: "Developer",
  age: 573475,
  nationality: "Indian",
};

// Accessing properties
console.log(student);
// two ways of accessing
console.log(`Nationality of student is ${student.nationality}`);
console.log(`Name of the student is ${student["name"]}`);

// Arrays as Values
let item = {
  price: 100,
  peices: 2,
  colors: ["orange", "black", "red"],
};

console.log(item.colors);
console.log(item["colors"][2]); // red
console.log(typeof item.price);

// Now suppose we wanna access properties through the variables. For example :-
let keemat = "price";

console.log(item.keemat); // this will not work with variables as keys to get the values
console.log(item[keemat]); // we have to use this accessing property for the purpose. and without inverted commas inside square brackets
