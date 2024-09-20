let students = [];
students = ["Vishvjeet Rana", "John Doe", "Donald Trump"];

// Arrays are mutable

students[1] = "Elon Musk";

console.log(students);

// if we are giving a big index to store a value then the space b/w will also be counted and indices would given to it.
students[10] = "Naernder Modi";
console.log(students); // o/p --> ['Vishvjeet Rana', 'Elon Musk', 'Donald Trump', empty × 7, 'Naernder Modi']
