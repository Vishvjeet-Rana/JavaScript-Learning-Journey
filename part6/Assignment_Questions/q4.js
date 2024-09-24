// Write a JavaScript function to count the number of vowels in a string argument.

const countVowels = function (str) {
  let count = 0;
  for (s of str) {
    if (
      s == "a" ||
      s == "e" ||
      s == "i" ||
      s == "o" ||
      s == "u" ||
      s == "A" ||
      s == "E" ||
      s == "I" ||
      s == "O" ||
      s == "U"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("India is a diverse country"));
