// LOOPS

// Use loops whenever you want to repeat x

// Three main types: if, while, do... while

// FOR LOOPS

//for (
  // initialize an 'iterator' or counter which counts through;
// set the max range of the interator;
// set the direction and count of iteration (counting)
//)

// i++ means i = i+1
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(`Current number = ${i}.`);
};


for (let i = 0; i < 15; i++) {
  if (i === 13) {
    console.log(`${i} is my favorite number!`);
  } else if (i == 8) {
    console.log("Will stop the loop here soon....");
    break;
  } else {
    console.log(i);
  }
};

// Generally you use a for loop when you know how many times x will run

// But, if you don't, you use a...


// WHILE LOOP

let health = 100;

while (health > 0) {
  health -= 10; // means health = health - 10
  console.log("I've been hit! My health is now " + health + ".");
}

// Generally use this if you don't know in advance how many times x will run


// DO WHILE LOOPS

// always runs at least once

let x = 10;

do {
  console.log(x);
  x = x - 2; // same thing as x -= 2
  // x = x / 4;
} while (x > 0);

console.log(`Smallest value in JavaScript for a number: ${Number.MIN_VALUE}`);






// More complex example

let longNight = [...Array(7).keys()];

console.log(longNight); // [0,1,2,3,4,5,6]
console.log(Array(7)); // makes an empty array of 7 objects that don't exist. Reserves the 7 slots.
console.log(Array(7).keys()); // obtains, but does not return, the indices of the array specified, which is the empty array, which still has 7 slots, so the values in the computer's mind are 0-6, but they are not returned. Returns an iterator, or counter, object
console.log(...[0,1]); // uses the spread ... operator, which counts through countable objects (iterates through iterables/iterable objects). Thus the spread operator accesses the indices from earlier and prints them: 0 1 2 3 4 5 6
console.log(..."This is a string".split('').keys()); // outputs 0 1 2 .... 15
console.log("This is a string");
console.log("This is a string".length);
console.log("This is a string".split());
console.log("This is a string".split(''));
console.log("This is a string".split(' '));
console.log([...Array(13).keys()])


console.log([...['Alex', 'Ramon'].keys()])

// console.log(Number.MAX_VALUE);

//let longNight = [0, 1, 2, 3, 4, 5, 6];

console.log(longNight);

do {
  console.log("The night is long and full of terrors...");
  console.log(`${longNight.length} years left.`);
  longNight.pop();
} while (longNight.length > 0)

console.log('Winter is over!');


// LOOPING THROUGH ARRAYS

let instructors = [
  {name: "Ramon",   title: "STEM Instructor"},
  {name: "Fatima",  title: "STEM Instructor"},
  {name: "Natalie", title: "Education Liason Specialist"},
  {name: "Jayden",  title: "STEM and Healthcare Instructor"}
];


// Arrays can contain ANYTHING at all! Even other objects alongside simple values

//let instructors = [12, 823798253, Number.MAX_VALUE, {name: "Ramon",   title: "STEM Instructor"},{name: "Fatima",  title: "STEM Instructor"},{name: "Natalie", title: "Education Liason Specialist"},{name: "Jayden",  title: "STEM and Healthcare Instructor"}, 1, 12, 13, "this is a value in an array which has instructors first and random crappy things after"];

console.log(instructors[0])
console.log(instructors[0].name)
console.log(instructors[0].title)

for (let i = 0; i < instructors.length; i++) {
  console.log(instructors[i].name);
};


// A better way of looping through arrays

console.log("*******");
console.log("*******");
console.log("*******");
console.log("*******");
console.log("*******");
console.log("*******");

console.log("forEach method:");

// forEach() METHOD

instructors.forEach( function (person, id) {
  console.log(person.name);
  console.log(instructors[id].title);
}
);