const heading = document.querySelector("h1");

// innnerText use
heading.innerText = "This is Peter Parker";

//suppose we want to make it bold
heading.innerText = "<b>This is Peter Parker</b>"; // it will not work

// we have to use innerHTML for this
// ------this will have the highest priority--------
heading.innerHTML = `<u>${heading.innerText}</u>`;

// this will also not gonna work coz it only shows what we wrote in html or trying to change through js
heading.textContent = "<u>hagkjdbgakjdbgjkadbv</u>";
