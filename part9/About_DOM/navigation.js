// children
const box = document.querySelector(".box");
console.log(box.childElementCount); //2
console.log(box.childNodes);
console.log(box.children); // h4 ul
console.log(box.lastChild);
console.log(box.firstChild);
console.log(box.hasChildNodes()); // true

const h4 = document.querySelector("h4");
console.log(h4.children); // an html collection of length 0 because it doesn't have any children

// previous children
const imgs = document.querySelector(".images");
console.log(imgs.previousElementSibling); // complete paragraph element

console.log(imgs.nextElementSibling); // link for js file (script tag)

console.log(imgs.children); // all three imgs

// parent
const olgImages = document.getElementsByClassName("oldImg");
console.log(olgImages.length);

for (let img of olgImages) {
  console.log(img.parentElement);
}
