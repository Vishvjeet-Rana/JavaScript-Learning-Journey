let str = "VishvJeet";

const checkString = function (str, idx) {
  if (str[idx] === str[idx].toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(checkString(str, 0));
