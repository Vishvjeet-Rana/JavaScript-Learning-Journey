// This will be a file related to the prototypical behaviour of JavaScript.
// This simply means that js never give up always tries to find something more ralated to any object. Until it finds the null.

// *********** This example demonstrates Inheritance with Constructor Functions. ************

function sayHello(name, age) {
  this.name = name;
  this.age = age;
}

sayHello.prototype.incrementAge = function () {
  this.age++;
  return this.age;
};

sayHello.prototype.print = function () {
  console.log(`My name is ${this.name} and age is ${this.age}`);
  console.log(`${this.name}'s incremented age is ${this.incrementAge()}`);
};

const person1 = new sayHello("John", 67);
const person2 = new sayHello("Smith", 56);

person1.print();
person2.print();

console.log(
  `[[[[[[[[[[[[[[[[[[[[[ Just for clarification]]]]]]]]]]]]]]]]]]]]]`
);

person1.print();
person2.print();
