// 1. Object.create(proto, [propertiesObject]): Creates a new object with the specified prototype.

const parent = {
  greet() {
    console.log(`Hello i am parent of ${this.name}`);
  },
};

const child = Object.create(parent, {
  name: {
    value: "child's name",
    isGoodChild: true,
    isAdult: true,
    isMarried: false,
  },
});

console.log(child.name);
child.greet();

// 2. Using Object.getPrototypeOf() to get the prototype of an object
const prototypeOfChild = Object.getPrototypeOf(child);
console.log(prototypeOfChild === parent); // true

// 3. Using Object.setPrototypeOf() to set a new prototype
const parent2 = {
  farewell() {
    console.log(`bye bye ${this.name}`);
  },
};

Object.setPrototypeOf(child, parent2);
child.farewell(); // bye bye child's name
// child.greet();
// now greet is not a functon anymore as child's prototype has been replaced to parent2

// Using hasOwnProperty() to check for direct properties
// See carefully it says "Direct" properties

console.log(Object.hasOwnProperty("name"));
console.log(Object.hasOwnProperty("farewell"));
// Output: false (inherited from newParent)
