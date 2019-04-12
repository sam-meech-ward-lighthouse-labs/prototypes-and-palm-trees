function CompassCard(nanoParticles = 'very tiny', balance = 0.00) {
  // const obj = {};

  // this = obj;

  // this.__proto__ = CompassCard.prototype

  this.nanoParticles = nanoParticles;
  this.balance = balance;

  // return this;
}

CompassCard.prototype.grantAccess = function() {
  if (this.balance >= 2.3) {
    this.balance-=2.3;
    return "🚜"
  } else {
    return "🤷‍♂️";
  }
};

const card1 = new CompassCard();
console.log(card1.grantAccess());

const card2 = new CompassCard('very tiny', 10);
console.log(card2.grantAccess());