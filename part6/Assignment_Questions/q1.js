// Write a JavaScript function that returns array elements larger than a number

const largeArrELements = function (arr, num) {
  let result = [];
  for (el of arr) {
    if (el > num) {
      result.push(el);
    }
  }
  return result;
};

console.log(largeArrELements([76, 23, 35, 87, 12, 333], 55));
