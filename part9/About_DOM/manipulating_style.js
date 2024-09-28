// Select and style the image element
const image = document.querySelector("img");
image.style.width = "100px"; // Set image width to 100px
image.style.height = "100px"; // Set image height to 100px

// Select and style the first h1 element
const heading = document.querySelector("h1");
heading.style.fontFamily = "cursive"; // Change font family to cursive

// Select and style all anchor (<a>) tags inside elements with the class "box"
const links = document.querySelectorAll(".box a");
for (let link of links) {
  link.style.color = "red"; // Set text color to red
  link.style.fontSize = "20px"; // Set font size to 20px
}

// Select and style all list items (<li>) inside elements with the class "box"
const lists = document.querySelectorAll(".box li");
for (let list of lists) {
  list.style.listStyle = "none"; // Remove default list style (bullets)
}

// Select and style the element with the class "description"
const para = document.querySelector(".description");
para.style.lineHeight = "50px"; // Set line height to 50px for better readability
para.style.color = "blue"; // Change text color to blue
