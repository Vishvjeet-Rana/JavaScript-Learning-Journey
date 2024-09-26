// Square and sum the array elements using the arrow function and then find the average of the array
const arr = [1, 2, 3, 4, 5, 6];

const result = (arr) => {
  const square = arr.map((el) => el ** 2);
  const sum = square.reduce((acc, el) => acc + el, 0);
  return sum / arr.length;
};

console.log(Math.floor(result(arr)));
