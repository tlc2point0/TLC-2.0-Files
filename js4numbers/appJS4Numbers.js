// Numbers in JS

// Step 1: Make an output section and
//  place far below

// **********

let x = 10;
let y = 4;
let total;

total = x + y;
total = x - y;
// Shift + Alt + 
//    Down arrow to copy
//    a line
total = y - x;
total = y / x;
total = x / y;

total = 10 / 4;
total = x % y; // modulus
total = 33 % 12; // remainder of 9

total = x * y; // multiplication
total = x ** y;

// Math methods and properties

total = Math.PI; // 3.14159....
// PI is a property of the 
//  Math object. Basically 
//  somewhere in JS, we have an
//  object that looks like this:

/*
const Math = {
  PI: 3.141592653579893....,
  E: 2.718281828....,
  min: function(*args) {
    functiony stuff;
  }
}

*/
total = Math.PI * 2; // PI property
// of Math object

total = Math.E;

// PI and E are "properties" of the
//  Math object since they use
//  the dot operator on Math
//  object and don't use paren-
//  theses afterward (which makes
//  them non-functions)

// Return the whole number
//  just greater than or equal
//  to (if already a whole
//  number) than the following

total = Math.ceil(2.7);
total = Math.ceil(2);
total = Math.ceil(-2.7);
total = Math.ceil();
total = Math.ceil(Infinity);
total = 1/0;

// Floor
// Returns the greatest whole
//  number just less than or equal
//  to (if it is a whole number)
//  the input

total = Math.floor(3.4);
total = Math.floor(3.999999);

total = Math.floor(-12);

// Miscellaneous stuff
total = Math.sqrt(9);
total = Math.sqrt(12);
total = Math.abs(-37);
total = Math.abs(37);
total = Math.pow(x,y); // same
  // ... thing as x ** y
total = Math.pow(3, 4);

total = Math.min(0, -1, 3, Infinity,
  217);

total = Math.max(12, 17, -127, 1);

total = Math.max(0, 3*7);

total = Math.random();
total = Math.random() * 100;
total = (Math.random() * 100) + 1;
total = Math.floor((Math.random() * 100) + 1);

// Getting user input

// let num1 = Number(prompt("What's the first number?"));
// let num2 = Number(prompt("What's the second number?"));
// let num3 = prompt("Type something here");

// console.log(num3);

// total = `You wanted ${num1} and ${num2}.`;





// Comparison operators

// Returns booleans (true or false) depending
//  on the operators used and values being compared

// x = 10, y = 4

total = x > y; // total = true
total = x < y;

total = 10 >27;

total = 0b10

// "Loose" equality ==
// is the value equal?
// if not, can I change the types
// of each value to get the 
// same value?
total = x == y;
total = 10 == '7 + 3';
total = 10 == '10';
total = Number('7 + 3');
total = 7 + 3 == '10';
total = 7 + 3 == '7 + 3';

// Strict equality ===
// is the type and value equal?
total = 10 === 10;
total = 10 === 1;
total = 10 === '10';

// console.log(x >= y);
// console.log(x <= y);

// Not equal to: !=
// a loose not equal to
total = (x != y);
total = (10 != '10');

// Strictly not equal to: !==
// a strict not equal to
total = (x !== y);
total = (10 !== '10');

let binNum = 0b1010111010;
let hexNum = 0xFa87301bc;
let octNum = 0o761327420;







// **********

// OUTPUT

console.log(total);