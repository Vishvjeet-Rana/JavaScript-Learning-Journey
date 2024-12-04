let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(`fact is = ${data.fact}`);
    console.log(`length of the fact is = "${data.length}"`);
  } catch (error) {
    console.log(`error is = ${error}`);
  }
}

getFacts();
