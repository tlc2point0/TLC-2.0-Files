// // Type conversion: converting between
// //    one data type and another

// // Type coercion: the JS engine
// //    automatically converts
// //    the type of a value
// //    to work out an expression
// console.log(5 + '5');
// console.log(typeof(5 + '5'));

// // Type casting: You tell the
// //    JS engine to convert a
// //    value
// console.log(Number('5') + 5);

// // Blended example
// console.log(Number('5' + 5));


// // String concatenation
// console.log('5'+'5');

// // Type coercion
// console.log('5' + 5);

// Testing strict equality
// console.log(('5'+'5') === ('5' + 5));

let apple; // false apple
// since undefined

apple = 0; // false apple

apple = 1; // true apple

apple = -1; // true apple

apple = 'sad'; // true

apple = ''; // false

apple = ' '; // true

apple = []; // true

apple = {}; // true

apple = '.'; // true

apple = NaN; // false

apple = false; // false

apple = null; // false

if (apple) {
  console.log('Apple is true');
} else {
  console.log('Apple is false');
}

console.log(apple);

// Type casting to a Boolean
console.log(Boolean(apple));

let falseValues = [undefined, 0, '', null, NaN, false];

console.log(`False values: ${falseValues}`);

// Type cast to a number
console.log(Number('something'));
console.log(Number('7823.23'));
console.log(Number(false));
console.log(Number(true));
console.log(Number({}));

// Check the type

console.log(typeof(null));
console.log(typeof(9));
console.log(typeof 33);
console.log(typeof 'false');

// let bang = "big bang theory";
// bang.replace('big', 'gargantuan');
