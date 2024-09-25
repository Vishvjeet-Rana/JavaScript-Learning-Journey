"use strict";

let length = 4;

function callBack() {
  console.log(this.length);
}

const obj = {
  length: 5,
  method(callback) {
    callBack(); // Uncaught TypeError: Cannot read properties of undefined (reading 'length') while usign "use strict"
    //   callBack(); // 0 while not using the "use strict"
    //   callBack.call(this); // 5
  },
};

obj.method(callBack, 1, 2);
