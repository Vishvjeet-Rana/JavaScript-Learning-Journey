const highOrderFun = function (func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
};

const greet = function () {
  console.log("hello this is higher order function code!!");
};

highOrderFun(greet, 100);
// Or
highOrderFun(function () {
  console.log("Namastey!!");
}, 10); // we can pass a complete function as argument
