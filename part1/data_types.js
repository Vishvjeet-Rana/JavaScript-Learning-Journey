// 1.) 'number' data type
let a = 12;
let b = 13;
let c = 3.4;
let d = -8.52;
console.log(typeof a, typeof b, typeof c, typeof d);
// or there is also an another way
console.log(`type of a = ${typeof a}`); //similar for every varialble
console.log(typeof Number); // function

// 2.) 'boolean' data type
let follow = true;
let unfollow = false;
console.log(follow - unfollow); // it will 1 coz in js true has value 1 and false has value 0 so 1-0=1
console.log(unfollow - follow); // it will give -1

console.log(`type of follow = ${follow}  &  type of unfollow = ${unfollow}`);
console.log(typeof true);
console.log(typeof Boolean); //it will show 'function'

// 3.) 'string' data type
let name = "Vishvjeet Rana";
let profession = "student";
console.log(typeof name); // string
console.log(typeof profession); // string
console.log(typeof String); //function
console.log(name - profession); // NaN = Not a Number so can't perform these operations
console.log(typeof NaN); // number
