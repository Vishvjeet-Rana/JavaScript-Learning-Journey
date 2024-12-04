let url = "https://icanhazdadjoke.com/";

async function getJoke() {
  try {
    const config = { headers: { Accept: "text/plain" } };
    let res = await axios.get(url, config);
    console.log(res.data);
  } catch (error) {
    console.error("something went wrong");
  }
}

getJoke();
