// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Example: country = ["Australia", "Germany", "United States of America"], output: "United States of America"

const largestStr = function (arr) {
  let str = arr[0];
  for (el of arr) {
    if (el.length > str.length) {
      str = el;
    }
  }

  return str;
};

console.log(largestStr(["Australia", "Germany", "United States of America"]));
