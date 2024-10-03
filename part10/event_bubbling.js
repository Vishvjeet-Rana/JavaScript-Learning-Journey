let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

// In these below examples even if we are clicking ul or li then log of div will be triggered too. Because they are inside the div, this is called "event bubbling". To stop this we use "stopPropagation" method

// div.addEventListener("click", () => {
//   console.log("Event Bubbling occuring in div");
// });

// ul.addEventListener("click", () => {
//   console.log("Event Bubbling occuring in ul");
// });

// for (let li of list) {
//   li.addEventListener("click", () => {
//     console.log("Event Bubbling occuring in li");
//   });
// }

div.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Event Bubbling occuring in div");
});

ul.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Event Bubbling occuring in ul");
});

for (let li of list) {
  li.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Event Bubbling occuring in li");
  });
}
