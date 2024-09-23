let heroes = [
  ["ironman", "thor", "spiderman"],
  ["shaktiman", "krish", "mighty raju"],
];

for (let i = 0; i < heroes.length; i++) {
  console.log(`i = ${i}, ${heroes[i]}`);

  for (let j = 0; j < heroes[i].length; j++) {
    console.log(`j = ${j}, ${heroes[i][j]}`);
  }
}
