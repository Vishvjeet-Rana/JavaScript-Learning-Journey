let animals = {
  dog: {
    name: "Tommy",
    color: "brown",
    info: {
      duty: "Police dog",
      height: "3ft",
    },
  },

  cat: {
    name: "Bhagad Billa",
    color: "Ornage",
  },

  goat: {
    name: "Ronaldo",
    country: "Portugal",
  },
};

console.log(animals);
console.log(animals.goat);
console.log(animals["cat"].name);

animals.dog.name = "Kala Kutta";

console.log(animals.dog.name); //updated

animals.goat.profession = "Football";

console.log(animals.goat); //added

delete animals.cat.name;

console.log(animals.cat); //deleted

console.log(animals.dog.info);
console.log(animals.dog.info.height);
