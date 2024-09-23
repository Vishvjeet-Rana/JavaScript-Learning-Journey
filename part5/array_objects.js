let arr = [
  {
    name: "a",
    grade: 100,
  },
  {
    name: "b",
    grade: 200,
  },
  {
    name: "c",
    grade: 300,
  },
];

console.log(arr);

console.log(arr[0].name);
console.log(arr[2].grade);
console.log(arr[1]);

arr[1].country = "Australia";
console.log(arr[1]); // added

// for deleting and updating operations are same as before
