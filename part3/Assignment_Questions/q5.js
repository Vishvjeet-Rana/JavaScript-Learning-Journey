let arr = [1, 8, 5, 34, 28, 90, 65];

// WAY 1
const IsElementExists = function (arr, el) {
  if (arr.includes(el)) {
    return true;
  } else return false;
};

// WAY 2
// const IsElementExists = function (arr, el) {
//   if (arr.indexOf(el) != -1) return true;
//   else return false;
// };

console.log(IsElementExists(arr, 8));
