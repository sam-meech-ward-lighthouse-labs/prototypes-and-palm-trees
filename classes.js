class RecycleBin {
  constructor() {
    this.cans = true;
  }

  recycle() {
    return "🤖";
  }
}

console.log(typeof RecycleBin);
console.log(Object.getOwnPropertyNames(RecycleBin.prototype));
console.log(RecycleBin.prototype.recycle);