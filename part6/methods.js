let Calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

// The properties as functions(or more basically methods) inside an objects can be written without colons ':', such as below
// This will too work perfectly.
// let Calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   sub(a, b) {
//     return a - b;
//   },
//   mul(a, b) {
//     return a * b;
//   },
// };

console.log(Calculator.add(9, 10));
console.log(Calculator.mul(4, 8));
console.log(Calculator.sub(100, 76));
