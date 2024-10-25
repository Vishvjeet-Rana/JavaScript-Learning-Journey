let h1 = document.querySelector("h1");

// ************ WAY 1 (NORMAL WAY TO CHANGE THE COLOR)
// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000);

// ******************* WAY WITH THE HELP OF SETTIMEOUT FUNCTION and a normal function

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);
// changeColor("cornflowerblue", 4000);

// ********** we can nest the next color function in callback nesting or also known as callback hell

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("purple", 1000, () => {});
  });
});

// in above callback hell or callback nesting we dont need to write the differ delay everytime
