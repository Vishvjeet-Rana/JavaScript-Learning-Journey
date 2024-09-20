// concat method

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = arr1.concat(arr2);
console.log(newArr); //[1, 2, 3, 4, 5, 6]

let newArr2 = arr2.concat(arr1);
console.log(newArr2); //[4, 5, 6, 1, 2, 3]

// reverse method

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr3 = arr3.reverse();
console.log(newArr3); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
