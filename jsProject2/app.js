///////// JavaScript Project 2: Collaborative Learning of Advanced JavaScript Topics

// ////////////////
// ///////////////
// //////////////
// /////////////
// ////////////
// ///////////
// //////////
// /////////

// // Rest and Spread Operators

// // Rest Operator: represents the rest of a set of parameters in a function definition. Must be the last parameter in a set of parameters (but can also be the only parameter).

// function multiplyThese(num1, num2, ...args) {
//   let product = num1 * num2;
//   // Old way to iterate:
//   /*
//   for (i = 0; i < args.length; i++) {
//     product *= args[i];
//   }
//   */

//   // New way to iterate: for (let _ of ___)
//   for (let arg of args) product *= arg;
//   return product;
// }

// console.log(multiplyThese(5,7));

// console.log(multiplyThese(1,3,7,8,32,183,-1,-71));

// // The rest operator must occur at the end of the list of parameters in the function definition. Illegal:

// /*
// function funkyFunc(var1, ...vars, var2) {
//   // won't run
// }
// */

// // Another example:

// function favoriteFoods(food1, ...foods) {
//   console.log("I like ", food1, " and I can't lie.");
//   console.log("I also like ", foods[0]);
//   console.log("I especially like ", foods[1]);
// }

// favoriteFoods("macaroni and cheese", "pizza", "cherries", "cookies");

// // Bonus: the built-in arguments array-like object

// function randomArgs() {
//   console.log(arguments.length + " things were entered.");
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
// }

// randomArgs('me', 'myself', 'and I', 'ok, you too', 'but me especially');

// // Big note: the arguments object cannot be used with arrow functions. Nor can the 'this' keyword seen above.

// // Spread Operator: takes each item in an iterable (like an array or string) and "expands" them in the present context. See examples:

// console.log(Math.min(3,5,1)); // 1. Normal usage of the Math.min function.

// let arr = [3,5,1];

// console.log(Math.min(arr)); // NaN; Math.min can't work with arrays.

// console.log(Math.min([3,5,1])); // exactly the same as the above. Won't work (or at least returns NaN and is not ideal)

// console.log(Math.min(...arr)); // 1. The array has been expanded within Math.min to look like: Math.min(3,5,1) instead of: Math.min([3,5,1])

// let arr1 = [7,6,1,3];
// let arr2 = [7,-3,9,4];

// console.log(Math.max(0, ...arr1, 7, ...arr2));  // 9

// mergeArrays = [...arr1, ...arr2];

// console.log(mergeArrays);   // [7,6,1,3,7,-3,9,4]

// let str = "Goodbye world";

// console.log(str);
// console.log([...str]);
// // Similar to converting to an array as like this:
// console.log(Array.from(str));

// // SUMMARY OF REST AND SPREAD OPERATORS

// // Rest: When ... is at the end of function parameters (when defining the function), it gathers the rest of the parameters up and puts them into an array. This allows for functions to be created which accept any number of arguments.

// // Spread: When ... is used in a function call (when a function is being used, not defined), it takes an array or iterable and expands its contents inside that function call. It allows arrays to be passed into functions that normally require arguments to be listed out when the function is used.

// ////////////////
// ///////////////
// //////////////
// /////////////
// ////////////
// ///////////
// //////////
// /////////

// // CONSTRUCTORS

// Constructors allow you to make your own types of objects in JavaScript

// function Book() {
//   // stuff about books
// }

// // capitalized by convention

// var myBook = new Book(); // myBook is an instance of the Book object

// myBook instanceof Book  // true
// myBook instanceof String  // false

// myBook.constructor === Book   // true

// let s = new String('text here');
// s.constructor === String;   // true

// "text here".constructor === String;   // true

// let o = new Object();
// o.constructor === Object;   // true

// let p = {};
// p.constructor === Object;   // true

// let a = new Array();
// a.constructor === Array;  // true

// [1,2,4].constructor === Array;  // true

// // Custom constructor functions

// function Book (name, year) {
//   this.name = name;
//   this.year = '(' + year + ')';
// }

// // remember, the 'this' keyword refers to the object that contains it (the object it belongs to the lexical scope of)

// let firstBook = new Book("Pro AngularJS", 2014);
// let secondBook = new Book("HTML and CSS", 2012);
// let thirdBook = new Book("JavaScript Patterns", 2010);

// console.log(firstBook.name, firstBook.year);
// console.log(secondBook.name, secondBook.year);
// console.log(thirdBook.name, thirdBook.year);

// // Object.defineProperty method

// function Book(name) {
//   Object.defineProperty(this, "name", {
//     get: function() {
//       return "Book: " = name;
//     },
//     set: function(newName) {
//       name = newName;
//     },
//     configurable: false // prevents deletion of properties like name
//   })
// }

// let myBook = new Book("Single Page Web Applications");
// console.log(myBook.name);

// // can't delete name
// delete myBook.name;
// console.log(myBook.name);

// // but can change the name
// myBook.name = "Testable JavaScript";
// console.log(myBook.name);

// // Preferred: object literals over built-in constructors like Array() or Object()

// let a2 = new Array(3,1,4,5);
// console.log(a2);

// let a3 = [3,1,4,5] // runs faster
// console.log(a3);

// // A better constructor using the 'this' keyword

// function Book(name, year) {
//   console.log(this);
//   this.name = name;
//   this.year = year;
// }

// let myBook = Book("Concepts of Modern Mathematics", 1974);
// console.log(myBook instanceof Book);
// console.log(window.name, window.year);

// var myBook = new Book("JavaScript in Action", 1999);
// console.log(myBook instanceof Book);
// console.log(myBook.name, myBook.year);

// // Always use the new keyword with built-in constructors

// // Otherwise, use scope-safe constructors:

// function Thing(argument) {

//   // if "this" is not an instance of the constructor
//   // it means it was called without new
//   if (!(this instanceof Thing)) {

//     // call the constructor again with new
//     return new Thing(argument);
//   }
// }

// ////////////////
// ///////////////
// //////////////
// /////////////
// ////////////
// ///////////
// //////////
// /////////

// // PROTOTYPES

// function Human(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// let person1 = new Human("Sundar", "Pichai");

// console.log(person1);

// let person2 = new Human("Satya", "Nadella");

// console.log(person2);

// console.log(Human.prototype)

// // Expand the __proto__ property of each in the console. What do you see?

// // Each person's __proto__ property is inherited from the Human prototype - literally, each __proto__ points to the same location in memory as the auto-generated Human prototype property.

// Human.prototype === person1.__proto__   // true

// Human.prototype === person2.__proto__   // true

// person1.__proto__ === person2.__proto__   // true

// // Creating inheritance by modifying the Human prototype directly

// // The following can be placed either inside or outside of the Human definition... doesn't matter (up to order of execution of the program's statements).
// Human.prototype.species = "Homo sapiens";

// console.log(person1.species);

// // Note that we changed the prototype after this object was created. This object's __proto__ always refers to Human's prototype, so any properties made for it carry on to any Human object

// // Modifying prototype values is the best way to conserve memory when creating new objects of similar type. Otherwise, each property and value will be recreated for *each* object instead of pointing to the same location as the prototype object... a huge waste of resources

// // One complication: arrays (and other values passed by reference which may differ between objects of a certain 'type'). Updating a prototyped array property will update it for all other objects of that type.
// Human.prototype.organs = ['brain', 'stomach', 'bones', 'lungs'];

// console.log(person1.organs);
// console.log(person2.organs);

// person1.organs.push("meatbags");

// console.log(person1.organs);

// console.log(person2.organs); // uh oh: "meatbags was also added to person2's organ list"

// // SUMMARY OF PROTOTYPES

// // Use prototypes of custom constructors to create properties and methods which simlar objects share. Be careful of properties or methods which pass by reference unintentionally. Only prototype those properties and methods in a constructor which will not differ between the objects inheriting from it.

// ////////////////
// ///////////////
// //////////////
// /////////////
// ////////////
// ///////////
// //////////
// /////////

// // ES6 CLASSES

// // Basically just a wrapper for constructor objects

// class Animal{
//   constructor(name, sound){
//     this.name = name;
//     this.sound = sound;
//    };
//  speak(){
//   console.log(this.name + `${this.sound}`);
//   };
// }

// let dog = new Animal('Sprinkles', 'barks');
// dog.speak();

// console.log(dog);

// console.log(typeof Animal);   // function

// // Basically the above 'syntantic sugar' is identical to the following:

// function Animal(name, sound) {
//   this.name = name;
//   this.sound = sound;
//   this.prototype.speak = function () {
//     console.log(this.name + `${this.sound}`);
//   }
// }

// // Classes also have static methods that are meant to be called on the class itself instead of any particular instance of the class:

// class Animal{
//   constructor(name, sound){
//   this.name = name;
//   this.sound = sound;
//   }
//   speak(){
//    console.log(this.name + this.sound);
//   }
//   static allSpeak(animals){
//    for(animal of animals){
//     console.log(animal.name + animal.sound);
//    }
//   }
//  }
//  Animal.allSpeak(animal1, animal2, animal3);

//  // Static methods can be made in constructor objects by just neglecting to put the 'this' keyword in front of the definition. The above class declaration is equivalent to the following:

//  function Animal(name, sound) {
//   this.name = name;
//   this.sound = sound;
//   this.prototype.speak = function () {
//     console.log(this.name + `${this.sound}`);
//   };
//   function allSpeak(animals){
//     for(animal of animals){
//      console.log(animal.name + animal.sound);
//     }
//   }
// }

// // Super and Extends

// // Classes can have subclasses which inherit from it. To do so, you need two things: 1) to extend the functionality of the base (parent) class being inherited from, and 2) to call the super function first in the subclass definition:

// class Animal {
//   constructor(name, color){
//    this.name = name;
//    this.color = color;
//   }
//   speak(){
//     console.log(this.name + ' makes a noise.');
//   }
//  }

// // extends below allows for Dog to inherit anything it needs from Animal
// class Dog extends Animal {
//   constructor(name, color, sound = 'noise'){
//     super(name, color); // calls the constructor function from the previous class, setting all of Dog's properties (name and color) in the exact same way as those properties were set for the Animal class
//     this.sound = sound;
//   };
//   speak() {
//     console.log(this.name + this.sound);
//   }
// }

// let doge = new Dog('Barnacles');
// doge.speak(); // Barnacles barks

// ////////////////
// ///////////////
// //////////////
// /////////////
// ////////////
// ///////////
// //////////
// /////////

// // SCOPE

// // A programmatic scope is an area of code where a particular object or variable is usable and visible.

// // JavaScript has three scopes: 1) global scope, 2) function scope, and 3) block scope

// // Global scope: where an object or variable is visible anywhere (in or outside of any other function or code block)

// let global = "I am in global scope."

// // Function scope: where an object or variable is visible only in the function in which it is used

// function func() {
//   let global = "I am in the function scope."
//   console.log(global);
// }

// fn(); // I am in the function scope

// console.log(global); // I am in the global scope

// // Block Scope: when a variable or object is only visible inside the block in which it is defined or used. Useful for separating different blocks of code.

// {
//   let me = "Ramon";
//   console.log(me); // Ramon
// }

// // console.log(me); // ReferenceError: me was block-scoped and only visible there

// // Bigger example:

// const global = 'global';
// const anotherGlobal = 'also global';

// function func() {

//   const global = 'function-scoped';
//   console.log(global); // function-scoped
//   const scoped = 'also function-scoped';

//   function inner() {
//     console.log(scoped); // also function-scoped
//     console.log(anotherGlobal); // also global
//   }

//   inner();

// }

// console.log(global); // global
// console.log(anotherGlobal); // also global
// // console.log(scoped); // ReferenceError

// fn();
// // inner(); // ReferenceError

// // Big note: declare (meaning, define) variables and objects only in the scope in which you intend to use them. Avoid polluting the global scope as this can cause conflicts and takes up memory.

// ////////////////
// ///////////////
// //////////////
// /////////////
// ////////////
// ///////////
// //////////
// /////////

// // HOISTING

// // Functions are moved to the top of the program at compile time by the engine just before the program is run:

// testFunction(); // working

// function testFunction() {
//   console.log('working');
// }

// // The function above can be called even though it is defined afterward.

// // Notes:

// // This is variable declaration:

// var newVar;

// // This, however, is variable assignment:

// newVar = 3;

// // Variable declarations WITH var ONLY are hoisted (NOT with let and const). This is the main reason why we use let and const nowadays instead (more below).

// // Variable assignments are not hoisted in any case, however. This is the result of that behavior:

// console.log(notWorking); // undefined
// var notWorking;
// notWorking = 'yep';
// console.log(notWorking);
// // yep

// // The variable declaration (let notWorking) is moved to the top of the file before being run, above where console.log(notWorking) first logs it. However, it is undefined there.

// // (Much) later, it is assigned the value of 'yep'. This assignment stays in place in the program while running, so it appears correctly in the second console.log(notWorking) statement, which prints 'yep'.

// // Since let and const are never hoisted, they can remove ReferenceErrors and unintentional undeclared behavior like the examples above show.

// // Note that this behavior is replicated even when declaring and assigning in the same line:

// console.log(shape); // undefined
// var shape = "square";
// console.log(shape); // "square"

// // This is how the above statements actually run:

// /*

// var shape;
// console.log(shape); // undefined
// shape = "square";
// console.log(shape); // square

// */

// ////////////////
// ///////////////
// //////////////
// /////////////
// ////////////
// ///////////
// //////////
// /////////

// // CALLBACKS, PROMISES, AND ASYNC/AWAIT

// function printString(string) {
//   setTimeout(
//     () => {
//       console.log(string)
//     }, Math.floor(Math.random() * 1000) + 1
//   )
// }

// // The setTimeout(fn, time) function is built-in, and executes a particular function after a specified (or random!) amount of time in milliseconds.

// function printAll() {
//   printString("A");
//   printString("B");
//   printString("C");
// }

// printAll(); // prints all the letters in a random order each time we call printAll()

// // Each letter gets a random amount of time to execute and does not wait for the previous function call of printString to finish.

// // In order to get them to execute in order, we can use a callback function.

// // Callbacks: these force asynchronous statements or functions to execute in order

// function printString(string, callback) {
//   setTimeout(
//     () => {
//       console.log(string);
//       callback();
//     },
//     Math.floor(Math.random() * 1000) + 1
//   )
// }

// // Notice the callback function is called after console.log(string) executes. Since it appears in the same code block (executed after the random amount of time occurs), it occurs after the console log statement.

// function printAll() {
//   printString("A", () => {
//     printString("B", () => {
//       printString("C", () => {})
//     })
//   })
// }

// // each successive call to printString will now occur after the previous one.

// printAll(); // prints "A", "B", and "C" in order - really, executing their function calls in order only after the console.logs finish
// //

// // Nesting functions inside one another repeatedly gets a little cumbersome. This is why we do something different with promises.

// // Promises in JS

// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         console.log(string);
//         resolve();
//       },
//       Math.floor(Math.random() * 1000) + 1
//     )
//   })
// } // put everything in a Promise which is resturned, and if that promise function is successful, it calls resolve(). The resolve() portion is the part after the .then's below:

// function printAll() {
//   printString("A")
//   .then( () => {
//     return printString("B")
//   })
//   .then( () => {
//     return printString("C")
//   })
// }

// printAll(); // A, B, and C will now appear in order. Each call to printString(letter) will execute in order only after each other one does.

// // the printAll function declaration above is known as a Promise Chain

// // With arrow function syntax, we can make this cleaner:

// function printAll() {
//   printString("A")
//   .then( () => printString("B"))
//   .then( () => printString("C"))
// }

// printAll(); // does the same thing. Arrow functions don't need return statements or curly braces if we only return a single statement (which will be in one line).

// // Async & Await

// // These keywords make writing promises a little prettier. It's the same functionality as promises and the promise chain, but easier to type, and thus the very definition of 'syntactic sugar':

// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         console.log(string);
//         resolve();
//       },
//       Math.floor(Math.random() * 1000) + 1
//     )
//   })
// }

// async function printAll() {
//   await printString("A");
//   await printString("B");
//   await printString("C");
// } // does the same thing as the promise chain version of printAll, executing each printString only after the previous are complete.

// printAll(); // A, B, C in that order

// // To incorporate the output of the previous functions into later function calls, it's easiest to use async/await:

// function addString(previous, current) {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         resolve(previous + ' ' + current)
//       },
//       Math.floor(Math.random() * 1000) + 1
//     )
//   })
// }

// async function addAll() {
//   let toPrint = '';
//   toPrint = await addString(toPrint, "A");
//   toPrint = await addString(toPrint, "B");
//   toPrint = await addString(toPrint, "C");
//   console.log(toPrint);
// }

// addAll(); // prints the string "A B C" altogether after waiting for each call of addString to add to the returned string in turn.
