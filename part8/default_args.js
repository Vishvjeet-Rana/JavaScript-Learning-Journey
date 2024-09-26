function args(a, b = 6) {
  return a + b;
}

console.log(args(1)); // this will automatically assigned to "a"

// but reverse of it will give error coz values are assigned in order. for example :-
function args2(a = 3, b) {
  return a + b;
}

console.log(args2(1)); // output = NaN
// because this 1 will be assigned to a (as i said in order) and b remains undefined. so o/p is NaN

// arguments possed in function call have the high priority than args in function definition
// for example
function args3(a = 8, b = 2) {
  //   (a = 10), (b = 100); The variables defined inside the functions has the HIGHEST priority.
  return a + b;
}

console.log(args3(10, 2)); // output 12
