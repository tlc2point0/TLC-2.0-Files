// Single-line comment

/* multiline

comment
*/

// console.log('Hello world!');

let firstName = "Ramon";
let lastName = "Gougis";

// console.log(firstName);
// console.log(lastName);

// console.log('firstName');

let val;

// String methods are FUNCTIONS we can
// use with strings to change them.

// Concatenation

// concatenation operator: +
val = "string1" + "string2";
// output: "string1string2"

// Dot/Method operator: .
// with the concat(...) string function
// Functions for types are called
// methods!
val = "string1".concat("string2");
val = firstName.concat(lastName, "string2");

// Append operator: +=
val += "string4" + "string8";

// Splitting string
val = firstName.split('m');
val = firstName.split('mo');
val = "This is a beautiful day".split(' ');

// Slicing
// console.log(val.length);
// console.log(val.slice(4));
val = "California".slice(4);
val = "California".slice(4, 7); // Alt Shift Down arrow

// Escape characters: \' \" \`
val = "This is my aunt's house's backyard.";
val = "She said, \"Leggo my aunt's Eggo.\".";
val = 'This is my aunt\'s house.';
val = `"This is my aunt's house," she said.`;
val = `This is ${firstName}'s laptop.`;
// template string above = 
// variable interpolation!

// Escape characters (for formatting): \t \n
val = `My todo list:\n\t1) Walk dog\n\t2) Teach class\n\t3) Enjoy the weekend!`;

// Length property
console.log(val.length);

let person = {
  name: "Ramon",
  age: NaN,
  thoughts: function thoughtProcess(age) {
    return Infinity - age;
  }
}

// let newName = new String();
// console.log(newName);

// person is an object
// defined in an object literal
// console.log(person.thoughts());
// console.log(person.age); // property of person
// console.log(person.thoughts(56)); // method of person

// Upper and lower case. Update variable
// with val = first!
val = val.toUpperCase();
val = val.toLowerCase();

// INDEXING

// with brackets [#]:
console.log(val[0]);
console.log(val[9]);
console.log(val[10]);
console.log(val[11]);
val = val[0] + val[9] + val[10] + val[11];

// Character at
let char = val.charAt(2);
console.log(`The [2]-indexed character of \
val is ${char}.`);

console.log(val[val.length - 1]);

// console.log(val[-1]); // doesn't work in JS
// console.log(val[1:3]); // doesn't work in JS

// Indexing characters
val = "Mississippi".indexOf('iss');
val = "Mississippi".lastIndexOf('iss');
let state = "Mississippi";
val = state.split('i');

// OUTPUT

console.log(val);