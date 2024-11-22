let h1 = document.querySelector("h1");

const colorChange = (color, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve(); // resolve promise after the delay
    }, delay);
  });
};

let async_await_example = async () => {
  await colorChange("red", 1000);
  await colorChange("blue", 1000);
  colorChange("orange", 1000);
  await colorChange("pink", 1000);
  await colorChange("violet", 1000);
  await colorChange("yellow", 1000);

  return "all colors are performed successfully";
};

async_await_example().then((message) => {
  console.log(message);
});
