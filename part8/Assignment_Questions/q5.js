// Write a function called mergeObjects that accepts two objects and returns a new object
// which contains all the keys and values of the first object and second object.

// let obj1 = {
//   name: "Peter",
//   age: 5465734,
// };

// let obj2 = {
//   country: "England",
//   city: "London",
// };

const mergeObjects = (obj1, obj2) => {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
};

console.log(
  mergeObjects(
    {
      name: "Peter",
      age: 5465734,
    },
    {
      country: "England",
      city: "London",
    }
  )
);
