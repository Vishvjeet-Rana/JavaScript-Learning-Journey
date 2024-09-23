// Write a JS program to find the sum of digits in a number.
// Example: if number = 287152, sum = 25

let num = 287152;

let number = num.toString();

let sum = 0;
for (n of number) {
  sum += parseInt(n);
}
console.log(sum);
