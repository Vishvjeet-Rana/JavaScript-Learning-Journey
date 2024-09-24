// FUNCTION SCOPE & LEXICAL SCOPE
const outerFun = function () {
  let x = 2;
  let y = 5;

  const innnerFun = function () {
    let a = 23;
    console.log(x + y); // this is allowed we can use outer fun's variables inside the inner fun.
  };

  // this is not allowed we can't use the items of inner fun outside it.
  //console.log(a); //scopes.js:10 Uncaught ReferenceError: a is not defined at outerFun

  //let x = 2;
  //let y = 5; // this thing also allowed we can declare vriables after their usage. Called as "Hoisting".

  innnerFun();
};

outerFun();
innnerFun(); //Uncaught ReferenceError: innnerFun is not defined coz innnerfun have function scope
