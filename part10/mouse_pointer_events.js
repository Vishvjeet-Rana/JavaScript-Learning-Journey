// 1. mouse and pointer events
let button = document.querySelector("button");
button.addEventListener("click", () => {
  document.body.style.backgroundColor = "blueviolet";
});

button.ondblclick = () => {
  alert("button was double clicked");
};

button.onclick = calcSum; // remember we shouldn't write () after function name otherwise it will invoke immediately

function calcSum() {
  console.log(10 + 4);
}

button.onmouseenter = () => {
  setTimeout(() => {
    alert("you entered the area of the button");
  }, 1000);
};

button.onmouseout = () => {
  console.log("you are out of area");
};
