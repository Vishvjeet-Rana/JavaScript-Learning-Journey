let n = 15;

// for odd numbers
const findOdd = function (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};

findOdd(n);

// for even numbers
const findEven = function (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

findEven(n);
