// Find the largest number in an array with only positive numbers.

let arr = [34, 76, 89, 33, 67, 44, 8796];

let max = -1;

for (num of arr) {
  if (num > max) {
    max = num;
  }
}

console.log(max);
