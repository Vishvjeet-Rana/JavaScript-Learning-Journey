// Q. get last n elements of an array

let arr = [7, 9, 0, -2];

const lastNelements = function (arr, n) {
  return arr.slice(-n);
};

console.log(lastNelements(arr, 3));
