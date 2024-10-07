let ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    alert(
      `event delegation working ${e.target.nodeName} and ${ul.childElementCount}`
    );
  }
});
