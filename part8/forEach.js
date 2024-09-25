// The forEach() method in JavaScript is used to execute a provided function once for each element in an array. It does not return a new array; instead, it modifies the original array or performs operations based on the elements.

let arr = [6, 8, 4, 39, 45];

arr.forEach((el) => {
  console.log(el);
});

console.log("After doubling the elements");

// example 1
arr.forEach((el, idx, arr) => {
  arr[idx] = el * 2;
});

console.log(arr);

// example 2
// forEach() doesn't modify the array itself, but if we modify elements inside the callback:
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index, arr) => {
  arr[index] = num * 2; // Modifying the original array
});

console.log(numbers); // [2, 4, 6, 8, 10]

// CONCLUSION :- So, the forEach() method itself doesn't modify the array, but if you manually alter the array within the callback, those changes will be reflected.
