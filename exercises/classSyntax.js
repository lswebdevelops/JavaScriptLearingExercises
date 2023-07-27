// the class syntax
// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }

class User {
    constructor(name){
         this.name = name;
     };
    sayHi(){ 
        console.log(this.name);
     };
  }
  
  // class is a function
  console.log(typeof User); // function
  
  // ...or, more precisely, the constructor method
  console.log(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
  console.log(User.prototype.sayHi); // the code of the sayHi method
  
  // there are exactly two methods in the prototype
  console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

  // when we could instead use without a class: 
  // rewriting class User in pure functions

// 1. Create constructor function
function User2(name) {
    this.name = name;
  }
  // a function prototype has "constructor" property by default,
  // so we don't need to create it
  
  // 2. Add the method to prototype
  User2.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  // Usage:
  let user2 = new User("John");
  user2.sayHi();