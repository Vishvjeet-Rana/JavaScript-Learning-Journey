let cars = ["audi", "ferrari", "bmw", "tata"];

// shift removes the element from front of the array and returns it
let removed_ele = cars.shift();
console.log(removed_ele); //audi

console.log(cars); //['ferrari', 'bmw', 'tata']

// unshift adds the element at the front of the array
cars.unshift("Rolls Royce");
cars.unshift("Fortuner", "toyota"); // we can give multiple elements
console.log(cars);
// o/p --> ['Fortuner', 'toyota', 'Rolls Royce', 'ferrari', 'bmw', 'tata']
