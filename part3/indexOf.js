let str = "Vishvjeet Rana";
let index = str.indexOf("jeet");
console.log(index); // 5 (actually it will give the first occurence of a 'part' in a string like 'jeet' in Vishvjeet has first occurence at index 5)

let index2 = str.indexOf("R");
console.log(index2);

// METHOD CHAINING - using 2 or more methods on a string
let animal = "        elephant       ";
console.log(animal.toUpperCase().trim());
