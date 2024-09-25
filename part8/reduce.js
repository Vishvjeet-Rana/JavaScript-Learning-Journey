let arr = [6, 8, 5, 4, 12, 10, 9, 3];

let res = arr.reduce((accumulator, el) => {
  return accumulator * el;
});

console.log(res); // its gives multiplication result of all elements in array arr

// example 2
// Find max in an array

let arr2 = [45, 76, 34, 12, 100, 56, 43];

let ans = arr2.reduce((res, el) => {
  if (res < el) {
    return el;
  } else {
    return res;
  }
});

console.log(ans);

// example 3
// check if all numbers in an array are multiples of 10 or not

let arr3 = [10, 560, 70790, 430]; // answer = true
let arr4 = [560, , 100, 47, 70790]; // answer = false

let answer = arr4.every((el) => {
  return el % 10 === 0;
});

console.log(answer);
