// DIFFERENCE BETWEEN "EVERY" AND "SUM"-------------------

// Return Value:
//some(): Returns true if "at least one element" passes the test; otherwise, it returns false.
//every(): Returns true if "all elements" pass the test; otherwise, it returns false.

//3. Short-circuit Behavior:
//some(): Stops evaluating as soon as it finds an element "that satisfies" the condition (returns true).
//every(): Stops evaluating as soon as it finds an element "that does not satisfy" the condition (returns false).

let arr = [56, 87, 90, 43, 61, 23, 32, 11, 5, 2];

let ans1 = arr.every((el) => {
  return el % 2 == 0;
});

ans1 === true
  ? console.log("arr has all even elements")
  : console.log("arr hasn't all even elements");

let ans2 = arr.some((el) => {
  return el % 2 !== 0;
});

console.log(ans2);
