// let animals = ["cow", "buffalo", "lion", "tiger", "elephant"];

// for (let animal of animals) {
//   console.log(animal);
// }

// for of loop on nested arrays
let animals = [
  ["domestic", "cow", "buffalo"],
  ["jungle", "lion", "tiger", "elephant"],
];

for (let category of animals) {
  console.log(category);

  for (let animal of category) {
    console.log(animal);
  }
}
