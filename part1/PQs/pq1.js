// Find the average
let hindi = 67;
let english = 86;
let physics = 98;

let arr = [];
arr.push(hindi, english, physics);

const average = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(average(arr));
