//The setInterval function in JavaScript is used to repeatedly execute a function or a block of code at specified time intervals. It continues to run the code at the given interval until it is stopped using clearInterval().

console.log("This is first statement");

const id = setInterval(
  () => console.log("We are inside the setInterval function"),
  1000
);

console.log("This is last log statement");

clearInterval(id); // it stops the func
