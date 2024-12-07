let car1 = {
  name: "lambo",
  color: "yellow",
  info() {
    console.log(`car name is ${this.name} and color is ${this.color}`);
  },
};

let car2 = {
  name: "ferrari",
  color: "red",
};

let borrowedReturnedFunction = car1.info.bind(car2);
borrowedReturnedFunction();
