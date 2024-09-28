// add classes
const images = document.querySelectorAll("img");
for (let image of images) {
  image.classList.add("border");
}

const heading = document.querySelector("h1");
heading.classList.add("green");

// add class example 2
const para = document.querySelector(".description");
para.classList.add("line-height");

// contains class ?
let check = para.classList.contains("shadow");
console.log(check); // false

let check2 = para.classList.contains("line-height");
console.log(check2); // true

// replace class
para.classList.replace("line-height", "line-height2");
// now line height will be assigned as written in line-height2

console.log(para.classList); // description, line-height2

const links = document.querySelectorAll(".box a");
for (let link of links) {
  link.classList.add("links-color-font");
}

console.log(links.length);

// remove class
para.classList.remove("line-height2");

// toggle classes
heading.classList.toggle("links-color-font");

heading.classList.toggle("green");
