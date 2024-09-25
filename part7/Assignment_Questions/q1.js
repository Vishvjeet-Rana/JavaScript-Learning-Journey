// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers

const calcAvg = (arr) => {
  let sum = 0;
  for (el of arr) {
    sum += el;
  }
  return sum / arr.length;
};

console.log(calcAvg([67, 98, 44, 12, 56]));
