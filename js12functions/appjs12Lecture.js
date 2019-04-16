// FUNCTIONS

// A box for your code so that you can use it later

// Can use it again and again and do different things or return different values based on both when it is used and what we throw in

// We throw in parameters into functions to get them to do different things


// FUNCTION DECLARATION: creating/making/defining a function

function myFirstFunction () {
  console.log("This is myFirstFunction!");
}

// FUNCTION CALLING: using the function

// Also called 'invoking' the function

myFirstFunction();

// function p (string) {
//   console.log(string);
// }

// p("This is printed");
// p();

// function print(string) {
//   p(string);
// }

// print("this printed")


// FUNCTION PARAMETERS

// parameters change what happens inside of functions
// you can set a function to accept parameters upon declaration/making it
// says things should go in certain places when you call the function

// function groceries(food1, food2, food3) {
//   return `We need to get ${food1}, ${food2}, and ${food3}.`;
// }

// groceries;

groceries('bananas', 'pears', 'ice cream');

console.log(groceries('a', 'b', 'c'));

"We need to get foods.";

console.log(groceries());

// DEFAULT ARGUMENTS

// saying what a parameter should be in a function if nothing is described for that parameter's position

var myLeastFavoriteFood = 'oatmeal';

function groceries(food1='steak', food2 = 'crackers', food3 = 'sushi') {
  let myFavoriteFood = 'pizza';
  return `We need to get ${food1}, ${food2}, ${myFavoriteFood},and ${food3} - but definitely NOT ${myLeastFavoriteFood}.`;
}

console.log(groceries(1,2,3));

// console.log(myFavoriteFood);


// RETURNING VALUES FROM FUNCTIONS

console.log(groceries(1,2,4));

let f1 = 'bread';
let f2 = 'Oatly';

let result = groceries(f1, 'bananas', f2);

console.log(result);


// FUNCTION REFERENCING

// A function is referenced when it is looked up in memory
// Basically don't use the calling parentheses

let steak = groceries;
console.log(groceries);
console.log(steak);
console.log(steak('pears','apples','rump of a vegetarian'));


// OBJECT METHODS

// You know how to make functions now! Now you can fully understand object methods.

// let tasks = {
//   forWhom: "Ramon",
//   thing2: ""
// };

// Object methods are just functions we define in an object and use later through that object (calling the method as normal)

let todo = {
  taskList: [],
  add: function(task) {
    this.taskList.push(task);
  },
  get: function() {
    this.taskList.forEach(function(task, id){
      console.log(`Task ${id + 1}: ${task}`);
    })
  },
  delete(id) {
    this.taskList.splice(id - 1, 1);
  },
  edit(id, task) {
    this.taskList[id - 1] = task;
  },
  swap(id1, id2) {
    let t1 = this.taskList[id1 - 1];
    let t2 = this.taskList[id2 - 1];
    this.edit(id1, t2);
    this.edit(id2, t1);
  }
};

todo.add("Go shopping");
todo.add("Go hiking");
todo.add("Go scuba diving");
todo.add("Go to sleep");
todo.get();
todo.delete(4);
todo.get();
todo.edit(2, "Go eat");
todo.get();
todo.taskList[2] = "Go eat more";
todo.get();
todo.swap(1,2);
todo.get();


// FUNCTION EXPRESSIONS

// Whenever a function is applied to something?

// Method 1: assigning a function (reference!) to a variable

let cheese = function() {
  console.log("I like cheese")
}

cheese();


// Method 2: Using a function immediately after you define it - and only once

// IMMEDIATELY-INVOKED FUNCTION EXPRESSION

// Invoking means calling the function

// Here, we invoke immediately after defining

(function() {
  console.log("An IIFE");
})();

// The set of parentheses at the very end call the function!

// Useful for making modules, i.e. functionsn that are isolated. These are common when making different sessions, say for different users in a program

// Another way to call an IIFE

(function() {
  console.log("The second IIFE");
}());

// Another example of IIFEs: using parameters

(function(task) {
  todo.add(task);
  console.log("Task added!");
})("Go skiing");

(function(user) {
  todo.add(user.needs);
  console.log("Task added!");
}({name: "Ramon", needs:"Do laundry"}));

todo.get();