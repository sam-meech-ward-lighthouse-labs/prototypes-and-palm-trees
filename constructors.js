var palmTreesPrototype = {
  sway() {
    return `🌬️🌴 ${this.squids ? "🦑" : ""} ${this.coconuts ? "🥥" : ""}`;
  }
};
// Object.prototype.sway = function() {
//   return `🌬️🌴 ${this.squids ? "🦑" : ""} ${this.coconuts ? "🥥" : ""}`;
// }
function newPalmTree(squids = true, coconuts = true) {
  var palmTree = {
    squids,
    coconuts
  }
  palmTree.__proto__ = palmTreesPrototype;
  return palmTree;
}

var tree1 = newPalmTree(false);
var tree2 = newPalmTree(true, false);

console.log(tree1.sway());
console.log(tree2.sway());

// console.log(([]).sway());