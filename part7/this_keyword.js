// "this" keyword refers to the object that is executing the current piece of code

const Person = {
  name: "John",
  age: 4545,
  this: this, // will print window object
  eng: 98,
  hindi: 99,
  phy: 100,
  getAvg() {
    //console.log((eng + phy + hindi) / 3); // this will show error that eng phy hindi are not defined
    console.log((this.eng + this.hindi + this.phy) / 3);
    console.log(this); // it will print Person object coz now "this" is referring to the Person object
  },
};

// console.log(Person.this);

Person.getAvg();
console.log(this); // here it will print window object

// --------------------------point 2--------------------------------------------
// Constructor Context: When a function is used as a constructor (called with new), this refers to the newly created object.
function Item(name) {
  this.name = name;
}

const item1 = new Item("Alice in Borderland");
console.log(item1.name);

// --------------------------point 3--------------------------------------------
// Explicit Binding: You can explicitly set the value of this using call(), apply(), or bind().
function greet() {
  console.log(this.country);
}

const obj = { country: "India" };
greet.call(obj);
