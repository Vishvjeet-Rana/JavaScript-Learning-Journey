// slice(): Creates a shallow copy of part of an array without affecting the original.

let arr = [1, 2, 3, 4, 5];

let slicedArr = arr.slice(1, 3); // [2, 3] - elements at index 1 and 2
console.log(slicedArr);

let sliceFromStart = arr.slice(2); // [3, 4, 5] - slices from index 2 to the end
console.log(sliceFromStart);

let sliceFromEnd = arr.slice(-3); // [3, 4, 5] - slices the last 3 elements
console.log(sliceFromEnd);

console.log(arr); // [1, 2, 3, 4, 5] - original array remains unchanged

// splice(): Directly alters the original array by removing, adding, or replacing elements

let arr2 = ["red", "green", "blue", "yellow", "pink"];

let removed = arr2.splice(1, 2);
console.log(removed);
console.log(arr2); // modified ['red', 'yellow', 'pink']

let newArr = arr2.splice(2, "orchid", "purple", "violet");
console.log("new array is =", newArr); // as no dltCount or it is assumed 0 so it will return empty array i.e newArr = []
console.log(arr2); // modified ['red', 'yellow', 'orchid', 'purple', 'violet']

let replaced = arr2.splice(3, 1, "darkpurple");
console.log(replaced); //['violet']
console.log(arr2); //modified ['red', 'yellow', 'purple', 'darkpurple', 'pink']
