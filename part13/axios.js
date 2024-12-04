let url = "https://catfact.ninja/fact";

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  let fact = await getFacts(); // Await the result from getFacts function
  let p = document.querySelector("#output");

  if (fact === "Error encountered") {
    p.innerText = fact; // Display error message if returned from getFacts
    p.style.color = "white";
    p.style.backgroundColor = "darkred";
  } else {
    p.innerText = fact; // Display fact if successful
    p.style.color = "lightgreen";
    p.style.backgroundColor = "darkgreen";
  }
});

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (error) {
    return "Error encountered";
  }
}
