// 1. call method
let person1 = {
  firstName: "Barak",
  lastName: "Obama",
};

let person2 = {
  firstName: "Donald",
  lastName: "Trump",
};

function greet(greeting, country) {
  console.log(
    `${greeting} I am ${this.firstName} ${this.lastName} from ${country}`
  );
}

greet.call(person1, "Hello", "America");
greet.call(person2, "Hii", "America");

// 2. apply method - it just take args as an array or array-like objects
greet.apply(person1, ["Namaste Ji,", "America"]);

// 3. bind - it doesn't envoke function immedieately instead it returns a function with specified "this" context
let person3 = {
  firstName: "Lionardo",
  lastName: "De vinci",
};

function greet2(greeting, punctuation) {
  console.log(
    `${greeting}, is this ${this.firstName} ${this.lastName} ${punctuation}`
  );
}

let greetResult = greet2.bind(person3, "Hola");
greetResult("?"); // this is pre-set behaviour
