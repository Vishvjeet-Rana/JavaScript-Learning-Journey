let jsonData =
  '{"fact":"Tigers are excellent swimmers and do not avoid water.","length":53}';

// by default json data present in string form

// 1. Converting json data into object
let object = JSON.parse(jsonData);
console.log(object);
console.log(object.fact);

// 2. Converting object into json
let jsonData2 = JSON.stringify(object);
console.log(`"${jsonData2}"`);
