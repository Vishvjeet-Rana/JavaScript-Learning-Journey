let input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  //Triggered when a key is pressed down.
  console.log(`key = ${event.key}`);
  console.log(`key = ${event.code}`);

  console.log(event);
});

// input.addEventListener("keyup", (event) => {
//   //  Triggered when a key is released.
//   console.log(event);
// });
