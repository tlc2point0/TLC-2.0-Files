// Make the output console.log section far below first

// Creating arrays
let numbers = [43, 56, 33, 23, 44, 36, 5];
let numbers2 = [0, 1, 2, -3, -4, 0.123];
const animals = ['dolphin', 'penguin', 'bear', 'human'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if something is an array
val = Array.isArray(numbers);

// let numbers = [43, 56, 33, 23, 44, 36, 5]

// Get (copy) a single value (indexing an array)
val = numbers[2]; // val = 33
val = numbers[0]; // val = 43
val = numbers[6]; // val = 5
// val = numbers[7]; // undefined


// Inserting values (meaning, it will replace what's currently there)
numbers[4] = 120;

// Find the index of a value
val = numbers.indexOf(23);
val = numbers[3];


// CHANGING THE END OF AN ARRAY

// Add a value on the end
numbers.push(817);
// Remove a value from the end
numbers.pop(); // note that no argument is needed by this function


// CHANGING THE FRONT OF AN ARRAY

// Add a value to the front
numbers.unshift(15);
// Remove a value from the front
numbers.shift(); // no argument needed by this function


// SLICE: COPYING VALUES IN AN ARRAY AND NOT CHANGING THE ARRAY

// Slice values from an array
// Copies them into a new variable or for another usage
val = numbers.slice(1,3); // val = [numbers[1], numbers[2]]


// SPLICE: TAKING VALUES OUT OF AN ARRAY AND COPYING THEM ELSEWHERE

// Splice values (remove values in order from within the list)
// Actually REMOVES the values in question from the numbers array!
// Here we remove the values with indices 1, 2, and 3, and assign them to val
val = numbers.splice(1,3); // val = [numbers[1], numbers[2], numbers[3]]
// Indexes differently from slice: the second number parameter's index 
//    (3) is included


// REVERSE A LIST
numbers.reverse();

// CONCATENATE ARRAYS
val = numbers.concat(numbers2);


// SORTING ARRAYS

val = animals.sort();
val = numbers.concat(numbers2); // doing again to illustrate sorting soon
val = val.sort(); 
// NOTE: sort does not sort in ascending order (smallest to biggest) automatically, 
//    but instead by largest digit (1's in the largest place, e.g. hundreds, 
//    then 2's in the largest place, etc.)
// Technically, it converts all non-undefined elements in the array to strings
//    and then sorts them as if they were strings, character by character.

// To sort an array in ascending order, we must make use of clever trickery
val = val.sort(function(x, y) {
  return x - y;
});

// How this works (a little complicated):
// Array.prototype.sort() takes an optional parameter called "compareFunction".
//
// If a compareFunction is not included, it converts non-undefined values to 
//    strings and sorts by character.
// 
// If compareFunction is included, then:
// 
//    If compareFunction(x, y) returns a negative value for values x and y in 
//      the array, then element x is given a lower index (will come earlier in 
//      the sorted array) than y.
// 
//    If compareFunction(x, y) returns a positive value, then the element x is
//      given a higher index (will come later in the sorted array) than y.

// Same for sorting in descending order (biggest to smallest), just a little different
val = val.sort(function(x, y) {
  return y - x;
});


// FINDING ELEMENTS IN AN ARRAY

// First, a function to set it up
function under20(num) {
  return num < 20;
}
// Returns the first number in the array (as it is currently sorted!) 
//    satisfying the condition in the under45 function
val = numbers.find(under20);


// SIDE NOTE: DON'T USE ARRAY CONSTRUCTORS.

// There is another (redundant) way of making arrays: the Array constructor.
// DON'T DO THIS TO MAKE NEW ARRAYS.
const numbers3 = new Array(22, 45, 33, 76, 54); 
// Seriously, DON'T DO THIS.
// It's good to see it once since it's well-known, but don't use this method since it fails utterly for single-element arrays.
let numbers4 = new Array(3);
// This DOES NOT make an array with the number 3 in it. 
// Meaning, it does NOT make [3], which may have been intended.
// It doesn't even make an array with undefined in it (or in each spot, as many get wrong).
// Instead, it makes an empty array of length 3 with no items!
// Which may look like this: [ , , ] 
// ... or like this in Chrome: [empty x 3]
// ... or like this in Firefox: [<3 empty slots>]
// Again, NOT this, contrary to a lot of literature: [undefined, undefined, undefined]
// However...
const numbers5 = new Array(10, 2);
// ... makes the array [10, 2] of length 2. Crazy, huh?


// **************** //

// Output
console.log(numbers);
// console.log(numbers2);
console.log(val);