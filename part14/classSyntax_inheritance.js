// ES6 Class Syntax (Syntactic Sugar)

class Flower {
  constructor(name, clr) {
    this.name = name;
    this.clr = clr;
  }

  color(clr) {
    this.clr = clr;
    console.log(`${this.name} has a ${this.clr} color`);
  }

  isBeautiful() {
    console.log("yes it is");
  }
}

class Rose extends Flower {
  color(clr) {
    console.log(`${this.name} has ${this.clr} color`);
  }
}

const rose = new Rose("Rose", "Red");
rose.color(); // Rose has Red color
rose.isBeautiful(); // yes it is
