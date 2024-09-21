// lets try to print a pattern using loops

let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log("\n");
}

//output
// *
// **
// ***
// ****
// *****
// n here playing the role of the rows and the controling the stars
