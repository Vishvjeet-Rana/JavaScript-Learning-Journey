let factoryFun = function (request) {
  if (request === "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request === "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request!!");
  }
};

let request = "even";
let checkNumber = factoryFun(request);
checkNumber(56);
