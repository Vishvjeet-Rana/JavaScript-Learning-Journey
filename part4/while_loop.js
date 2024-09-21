let favMovie = "Ratsasan";

let guess = prompt("Enter the name of fav movie");

while (guess != favMovie && guess != "quit") {
  guess = prompt("Wrong answer. Enter again");
}

if (guess === "quit") {
  console.log("You quit the game.");
}

if (guess === favMovie) {
  console.log("Congratulations!!");
}
