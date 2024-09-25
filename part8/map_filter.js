// The map() method in JavaScript creates a new array by applying a provided function to each element of the original array. It does not modify the original array but instead returns a transformed version based on the function you pass to it.

let arr = [
  {
    name: "john",
    marks: 89,
  },
  {
    name: "smith",
    marks: 98,
  },
  {
    name: "peter",
    marks: 97,
  },
];

const result = arr.map((el) => {
  return el.marks / 2; // this will not modify original array
  //   return (el.marks = el.marks / 2); // this will modify org arr coz we are doing el.marks/2 and then assigning it to marks property of object. And in Js objects are passed by reference.
});

console.log(result); // result = [44.5, 49, 48.5]

const modifyName = arr.map((el) => {
  return (el.name = "No name"); //
});

console.log(modifyName); // modifyName = ['No name', 'No name', 'No name']

console.log(arr);

//----------------  FILTER Method  -------------------

//The filter() method in JavaScript creates a new array with all elements that pass the test implemented by a provided function. This method does not modify the original array but returns a new one containing only the elements that satisfy the given condition.

let num = [6, 8, 90, 65, 45, 2, 455, 23, 889, 954, 68, 37];

const ans = num.filter((el) => {
  return el % 2 !== 0;
});

console.log(ans); // gives odd elements
