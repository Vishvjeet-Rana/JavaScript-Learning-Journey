// 1. selecting object by Element ID

const mainImg = document.getElementById("mainImg");
mainImg.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s";

// 2. selecting object by Class Name
const image = document.getElementsByClassName("oldImg");
image[1].src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s";

const link = document.getElementsByClassName("boxLink");
link[0].innerText = "There is no link";

const para = document.getElementsByClassName("description");
para[0].innerText = "Unfortunately, this got deleted. Please try again later.";

// 3. selecting using Tag name

const heading = document.getElementsByTagName("h1");
heading[0].innerText = "Makdi man";

// This will select first element with class name oldImg
const select = document.querySelector(".oldImg");

// selects the first p tag
const select2 = document.querySelector("p");

//selects all p tags
const select3 = document.querySelectorAll("p");
for (let s of select3) {
  s.innerText = "Where there is a will, there is a way";
}
// select3.innerText = "Where there is a will, there is a way";
