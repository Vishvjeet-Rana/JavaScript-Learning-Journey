const image = document.querySelector("img");
image.style.width = "100px";
image.style.height = "100px";

const heading = document.querySelector("h1");
heading.style.fontFamily = "cursive";

const links = document.querySelectorAll(".box a");
for (let link of links) {
  link.style.color = "red";
  link.style.fontSize = "20px";
}

const lists = document.querySelectorAll(".box li");
for (let list of lists) {
  list.style.listStyle = "none";
}

const para = document.querySelector(".description");
para.style.lineHeight = "50px";
para.style.color = "blue";
