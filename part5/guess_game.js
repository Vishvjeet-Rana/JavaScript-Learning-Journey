const max = prompt("Enter the max range number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
  if (guess === "quit") {
    console.log("User quit the game. Noob!!");
    break;
  }

  // Convert guess to a number
  guess = Number(guess);

  if (guess === random) {
    alert("Hurray!! You guessed the right number");
    break;
  } else if (guess < random) {
    guess = prompt("Guess is too small. Try again!!");
  } else {
    guess = prompt("Guess is too large. Try again!!");
  }
}
