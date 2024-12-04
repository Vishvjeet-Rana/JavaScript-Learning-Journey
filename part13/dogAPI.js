let url = "https://dog.ceo/api/breeds/image/random";
let url2 = "https://dog.ceo/api/breeds/image/random767";

let btn = document.querySelector("button");
let img = document.querySelector("#result");
btn.addEventListener("click", async () => {
  let link = await getImage();
  if (link) {
    img.setAttribute("src", link);
    img.style.height = "200px";
    img.style.width = "200px";
  } else {
    let para = document.createElement("p");
    document.body.appendChild(para);
    para.innerText = `Wrong API request`;
  }
});

async function getImage() {
  try {
    let image;
    let number = Math.floor(Math.random() * 2);
    if (number === 0) {
      image = await axios.get(url);
    } else {
      image = await axios.get(url2);
    }
    return image.data.message;
  } catch (error) {
    return null;
  }
}
