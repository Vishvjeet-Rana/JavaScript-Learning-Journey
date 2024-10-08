let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // way 1
  //   let user = document.querySelector("#user");
  //     let pass = document.querySelector("#pass");

  // way2
  let user = this.elements[0];
  let pass = this.elements[1];

  console.log(`user name = ${user.value} and password is = ${pass.value}`);
});

// change and input events.
let nameInput = document.querySelector("#user");
let passInput = document.querySelector("#pass");

nameInput.addEventListener("change", () => {
  console.log(nameInput.value);
});

passInput.addEventListener("input", () => {
  console.log(passInput.value);
});
