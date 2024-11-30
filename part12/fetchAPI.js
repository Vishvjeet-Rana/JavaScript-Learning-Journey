let url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.fact);
    return fetch(url);
  })
  .then((response2) => {
    return response2.json();
  })
  .then((data2) => {
    console.log(data2);
    console.log(data2.fact);
  })

  .catch((error) => {
    console.log(`error = ${error}`);
  });

console.log("This text not belongs to any asynchronous functionality");
