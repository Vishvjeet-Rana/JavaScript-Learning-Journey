// Trim method
let str = "         Vishvjeet Rana ";
let newStr = str.trim();
// but original string str remains the same  "         Vishvjeet Rana "

// trim method returns a new string. Does'nt changes the original string. Strings are immutable.

// for instance in passwords we dont accept the space so we use trim method there.
let password = prompt("enter your password");
let edited_password = password.trim();
console.log(`edited password = ${edited_password}`);
