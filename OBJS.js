var jackHammer = {
  loudNoiseThatInteruptsLecture: true,
  juicy: false,
  breakThings() {
    return "🤼‍♂️";
  }
};

var orange = {
  rhymesWith: "door hinge",
  juicy: true,
  tastes() {
    return `Good and ${this.juicy ? "is" : "isn't"} juicy`;
  }
};

var dragonFruit = {
  tastes() {
    return "Good but not better than orange";
  }
};

// console.log(jackHammer.breakThings());
// console.log(orange.tastes());

jackHammer.__proto__ = orange;
orange.__proto__ = dragonFruit;

console.log(orange.tastes());
console.log(jackHammer.tastes());