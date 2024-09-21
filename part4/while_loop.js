let favMovie = "Ratsasan";

let guess = prompt("Enter the name of fav movie");

while (guess != favMovie && guess != "quit") {
  guess = prompt("Wrong answer. Enter again");
}

if (guess === favMovie) {
  console.log("Congratulations!!");
} else {
  console.log("You quit the game.");
}
