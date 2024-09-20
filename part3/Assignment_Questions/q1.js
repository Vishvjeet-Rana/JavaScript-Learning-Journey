// Q. Get first n elements of an array

let arr = [7, 9, 0, -2];

const first_n_elements = function (arr, n) {
  return arr.splice(0, n);
};

console.log(first_n_elements(arr, 3));
// console.log(arr);
