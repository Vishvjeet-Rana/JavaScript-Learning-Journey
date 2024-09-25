const obj = {
  message: "Hello World",
  logMssg() {
    console.log(this.message);
  },
};

setInterval(obj.logMssg(), 2000); // Hello World ------ but not in interval after every 2s. obj.logMssg() is invoked immediately because of the parentheses (). This means the method is executed right away, and the result of this execution (which is undefined since console.log doesn't return a value) is passed to setInterval.This leads to an immediate execution of obj.logMssg() and printing "Hello World" once, but no repeated calls occur because setInterval is not properly set up with a function reference.

setInterval(() => obj.logMssg(), 2000); // this will print Hello World in set time intervals

setTimeout(obj.logMssg(), 2000); // similarly immediately execute the logMssg and print Hello World
setTimeout(() => obj.logMssg(), 2000); // will print after 2s delay
