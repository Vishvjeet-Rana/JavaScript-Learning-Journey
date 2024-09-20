let str1 = "Hello";
let str2 = "";
let str3 = " ";

const isStringBlank = function (str) {
  if (str.length === 0) console.log("string is blank");
  else console.log("string is NOT blank");
};

console.log(isStringBlank(str1));
console.log(isStringBlank(str2));
console.log(isStringBlank(str3));
