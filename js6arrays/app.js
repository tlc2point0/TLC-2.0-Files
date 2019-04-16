// JavaScript 6: Arrays lecture

// Creating arrays
let numbers = [0, 1, 0.1, 173, 37,
-15, 2];
// let numbers2 = [3, -1, 7];
// const animals = ['dolphin', 
// 'elephant', 'pig', 'dog'];
// const mixed = [22, 'Hello', 
// false, true, NaN, [1,2,-7]];

// // Retrieving values from an array

// console.log(numbers);
// console.log(numbers2);
// console.log(animals);
// console.log(mixed);
// console.log(mixed[2]);
// console.log(numbers[0]);

// let matrix = [[0, 0, 1],
//               [1, 2, -1],
//               [0, 1, 7]];

// // Makes an array with 3 arrays
// // inside

// // [ [0, 0, 1] , [1, 2, -1], [0, 1, 7]];

// console.log(matrix);

// console.log(matrix[1]); // returns [1,2,1]

// // Prints the third element
// //  of the second array
// //  inside the matrix array
// //  (matrix is an array of arrays)
// console.log(matrix[1][2]);

// // Get the length of an array
// console.log(numbers.length);
// console.log(numbers);

// console.log(numbers[6]);
// console.log(numbers[7]);


// // Arrays are mutable,
// //  meaning they can be changed
// console.log(numbers[5]);
// numbers[5] = -13; // was -15, now -13
// console.log(numbers)
// console.log(numbers[5]);

// // Constant arrays can be changed....
// animals[1] = 'cat';
// console.log(animals);

// // Constant values cannot be changed!
// // const value = 33;
// // value = 7;

// // Index of a value in an array
// console.log(numbers[4]);
// console.log(numbers.indexOf(37));

// console.log(animals.indexOf('dog'));
// console.log(animals[3]);

// numbers = [1, 3, 7, 13, -1, 3, 4];
// console.log(numbers.indexOf(3));



// Changing the end of an array

// Adding values to the end of an array

// PUSH

// console.log(numbers);
// // numbers.push(7);
// // console.log(numbers);
// // console.log(numbers.push(88));
// // console.log(numbers.length);
// numbers.push(33, 7, 17, 0, -1, "a");
// console.log(numbers);

// // POP

// numbers.pop();
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);


// Add or take away values from the front of an array

// SHIFT

console.log(numbers);
numbers.shift();
console.log(numbers);

// UNSHIFT

numbers.unshift("I see you");
console.log(numbers);


// Reversing a list

numbers.reverse();
console.log(numbers);


// Arrays without variable names

console.log([1, 2, 4].reverse());

console.log([1, 7, 14].pop()); // prints 14

// Concatenating arrays














// // Changing the end of an array
// console.log(numbers);
// numbers.push(3892);
// console.log(numbers);
// console.log(numbers.push(6.78)); // returns the new length of the array
// console.log(numbers.length);
// console.log(numbers);
// console.log(numbers.pop()); // returns the value from the end
// console.log(numbers); // the array has one less value!


// // Changing the front of the array
// numbers.unshift(13); // add a value to the front
// console.log(numbers);
// // console.log("hi") + console.log('bye');
// // console.log('hi', 'bye');
// console.log(numbers.unshift(77)); // in the console.log, prints the new length of the array
// console.log(numbers);
// numbers.shift(); // takes 77 off the front 
// console.log(numbers); 
// console.log(numbers.shift());
// console.log(numbers);


// // Copying values in an array

// // Slice: copies the values
// let val = numbers.slice(1,4);
// console.log('val: ', val);
// console.log('numbers: ', numbers);

// // Splice: removes the values
// // includes the 4th index element!
// val = numbers.splice(1,4);
// console.log('val: ', val);
// console.log('numbers:', numbers);

// console.log(numbers.slice(1,1));
// console.log(numbers.slice(1,0));
// console.log(numbers.slice(0,1));
// console.log(numbers.splice(1,0));
// numbers = [1,3, -1, 0, 4, 183, 73, 1, 17];
// console.log('numbers: ', numbers);

// // same as console.log(numbers.splice(2, numbers.length));
// console.log(numbers.splice(2));
// console.log('numbers: ', numbers);