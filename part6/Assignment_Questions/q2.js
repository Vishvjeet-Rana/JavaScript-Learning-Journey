// Write a JavaScript function to extract unique characters from a string. Example: str = "abcdabcdefgggh", ans = "abcdefgh"

const uniqueChars = function (str) {
  let newStr = "";
  for (char of str) {
    if (!newStr.includes(char)) {
      newStr += char;
    }
  }

  return newStr;
};

console.log(uniqueChars("aabbhjghghjhjfhg"));
