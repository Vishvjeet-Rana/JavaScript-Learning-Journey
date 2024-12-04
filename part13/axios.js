let url = "https://catfact.ninja/fact";

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  let fact = await getFacts();
  let p = document.querySelector("#output");
  p.innerText = fact;
  p.style.color = "green";
});

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (error) {
    return "Error encountered";
  }
}
