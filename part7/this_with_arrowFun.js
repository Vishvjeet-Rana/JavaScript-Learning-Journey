const student = {
  name: "Jonn smith",
  marks: 5654,
  age: 60950698,
  prop: this, //global scope

  //regular function
  getName: function () {
    console.log(this); // "this" in regular funs looks for calling function's scope. and for this "this" calling function is regular function and its scope is "student" object. that's why it will print student object.
    console.log(this.name); // Jonn smith
  },

  getMarks: () => {
    console.log(this); // for "this" in arrow functions "this" will look for parent's scope. And for this "this" its parent is student object, and its scope is global so it will print window object.
    console.log(this.marks); // undefined
  },

  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // parent is regular functio so it will print student object
    }, 2000);
  },

  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // parent is setTimeout and it is a function of window object. so its scope bacomes global and it will print window object
    }, 2000);
  },
};

// student.getName();
// student.getMarks();
student.getInfo1();
