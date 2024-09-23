// calculate sum from 1 to n
const calcSum = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(calcSum(10));

// concatenation of strings in an array
let strArr = ["concat", "strings", "of", "array"];

const concatStr = function (arr) {
  let string = "";
  for (str of arr) {
    string += " " + str;
  }
  return string;
};

console.log(concatStr(strArr));
