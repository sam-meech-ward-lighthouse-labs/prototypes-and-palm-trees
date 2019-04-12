1. how does property lookup work in javascript?
2. somewhat comfortable with constructor functions.
3. why `​.prototype`?

# Prototypes

* when you google javascript methods, there is a `.prototype` in between the thing and the method.


## Object creation in JS

Object Litterals:

```js
var turtle = {
  legs: "flippers",
  swim() {
    return `kick your ${this.legs}`;
  }
};
```

Classes:

```js
class Turtle {
  constructor() {
    this.legs = "flippers";
  }
  swim() {
    return `kick your ${this.legs}`;
  }
}

const turtle = new Turtle();
```

Constructor functions:

```js
function Turtle() {
  this.legs = "flippers";
}
Turtle.prototype.swim = function() {
  return `kick your ${this.legs}`;
}

const turtle = new Turtle();
```

Every object in JavaScript has a [[Prototype]] that is another object.

The easiest way to set an object's [[Prototype]] is to set that object's `.__proto__` property.

It's just objects linked to other objects.

Every function in JavaScript has a property called `.prototype`. That is an empty object. This is not the function's [[Prototype]].

## Links from class

* https://web.compass.lighthouselabs.ca/days/today
* https://www.google.com/search?q=map+array+javascript&oq=map+array+javascript&aqs=chrome..69i57.3376j0j1&sourceid=chrome&ie=UTF-8
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* https://www.google.com/search?newwindow=1&ei=CcWwXL-SJoPm-gTHpr3oCA&q=atwoods+law+coding+horror&oq=atwoods+law+coding+horror&gs_l=psy-ab.3...3562.4389..4677...0.0..0.65.377.7......0....1..gws-wiz.......0i71.2MGyiEv7l-s
* https://blog.codinghorror.com/the-principle-of-least-power/
* https://www.google.com/search?q=Object+show+non+enumerable+properties&oq=Object+show+non+enumerable+properties&aqs=chrome..69i57.10430j0j1&sourceid=chrome&ie=UTF-8
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
