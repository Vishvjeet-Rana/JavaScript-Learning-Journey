let n = 15;

const findOdd = function (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};

findOdd(n);
