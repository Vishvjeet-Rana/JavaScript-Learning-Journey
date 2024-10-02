let btn = document.querySelector("button");
let arrrowBtn = document.querySelector(".arrowButton");

btn.addEventListener("click", function () {
  console.dir(this.innerText);
  this.style.backgroundColor = "yellow";
});

function makeChanges() {
  this.style.backgroundColor = "orchid";
  this.style.fontWeight = "900";
}

document.querySelector("p").addEventListener("click", makeChanges);

document.querySelector("h2").addEventListener("click", makeChanges);

// const myObj = {
//   id: 8574,
//   addEventListener: () => {
//     arrrowBtn.addEventListener("click", () => {
//       console.log(this); // global scope prints window object
//       console.log(this.id); // undefined
//     });
//   },
// };

const myObj = {
  id: 8574,
  addEventListener: function () {
    arrrowBtn.addEventListener("click", () => {
      console.log(this); // this will print object
      console.log(this.id); // 8574 id
    });
  },
};

myObj.addEventListener();
