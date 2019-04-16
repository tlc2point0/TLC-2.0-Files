// FUNCTIONS

// A box for your code that you can run over and over again
// Can do different things or return different values based on what values you give it & what values exist when it is used




// FUNCTION DECLARATION: creating/defining/making a function

function myFunction() {
  console.log("This is in myFunction.");
}

// Nothing happens until we call it, meaning we haven't quite used it yet.



// FUNCTION CALLING: using a function.

// We may optionally pass one or more parameters to it in the parentheses after the name to get it to run certain values it expects.

// In myFunction, we have no parameters in the parentheses.

myFunction(); // prints "This is in myFunction."



// FUNCTION PARAMETERS: giving a function some input to do stuff with

// Place these in parentheses when defining your function. They act as placeholder variables for when you call it later.

function groceries(food1, food2, food3) {
  return `We need to get ${food1}, ${food2}, and ${food3} from the store.`;
}



// RETURNING VALUES FROM FUNCTIONS

// Returning a value from a function lets us use it later (e.g., for printing) and is the usual way functions are used.

console.log(groceries('apples', 'pears', 'bananas'));

// Let's pass some variables in, as well

let f1 = 'bread';
let f2 = 'Oatly';

console.log(groceries(f1, 'bananas', f2));



// DEFAULT VALUES

// In the event a user does not pass parameters in when called, you can define default parameter values, like this:

function destination(place = 'Kokomo') {
  return `Do you want to go to ${place}?`;
}

console.log(destination()); // notice we didn't put a parameter in, so it used 'Kokomo'.
console.log(destination('Swaminarayan Akshardham')); // now it uses Swaminarayan Akshardham.





// FUNCTION REFERENCING: looking up a function

// A function is referenced when it is looked up in memory (specifically, when it is called without parentheses, and so not used, but just looked up).

// This allows us to do interesting things, like assigning the function to another name/variable, or placing it in an object.

let steak = groceries;

console.log(groceries);
console.log(steak);
console.log(steak('pears','apples', 'watermelon'));

let tasks = {
  forWhom: "Ramon",
  thing1: "write the lesson",
  thing2: "write or think about an exercise",
  thing3: groceries,
  thing4: destination,
  timeLimitInMinutes: 15
};

console.log(tasks.thing2);
console.log(tasks.thing4());
console.log(tasks['thing1']);
console.log(tasks.thing4('Hong Kong'));
console.log(tasks.timeLimitInMinutes);


// FUNCTION EXPRESSIONS

// Method 1: defining a function as a variable
// Behaves differently with respect to hoisting and scope (we'll speak about it later, hopefully)

const add = function(x = 0, y = 0) {
  return x + y;
};

console.log(add(3,2));


// Method 2: IIFE

// IMMEDIATELY-INVOKED FUNCTION EXPRESSIONS (IIFE)

// defines and uses a function immediately
// great way to contain code within its own independent scope to make things called 'modules'

(function(something){
  console.log('Prints ' + something);
})('this thing');

// Notice it doesn't have a name, it's just used immediately.

// Can be also written like this. Notice the order of closing parentheses at the end:

(function(state = 'Texas'){
  console.log(`${state} is the best.`)
})();//'California');



// PROPERTY METHODS 2

// Now you are able to fully understand object methods! They're just functions we define in an object, and use later through that object.

let todo = {
  taskList: [],
  add: function(task) {
    this.taskList.push(task);
  },
  edit(id, task) {
    this.taskList[id] = task;
  },
  delete(id) {
    this.taskList.splice(id, 1);
  },
  get(){  
    this.taskList.forEach(function(task, id){
      console.log(`Task ${id + 1}: ${task}`);
    })
  }
};

todo.add('get groceries');
todo.add('read a book');
todo.add('practice juggling');
todo.get();



// BONUS FOR PROJECT

// Function that logs your keypresses in the webpage to the console (must select the main page first, then press keys to print them in the console)

// document.onkeypress = function(evt) {
//   evt = evt || window.event; // IE-compatible
//   var charCode = evt.keyCode || evt.which; // either IE, or Netscape/Firefox/Opera-compatible if not IE
//   var charStr = String.fromCharCode(charCode);
//   console.log(charStr);
// };