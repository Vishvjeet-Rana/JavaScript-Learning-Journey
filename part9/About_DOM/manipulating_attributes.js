// 1. get attribute
const image = document.querySelector("img");

const getAttr = image.getAttribute("id");
console.log(getAttr); // mainImg

// 2. set attribute
image.setAttribute("id", "firstImg");
console.log(image.getAttribute("id")); // firstImg

// 3. has attribut
const check = image.hasAttribute("id");
console.log(check); // true

const check2 = image.hasAttribute("class");
console.log(check2); // false

// 4. remove attribute
image.removeAttribute("id");

console.log(image.getAttribute("id")); // null
console.log(image.hasAttribute("id")); // false
