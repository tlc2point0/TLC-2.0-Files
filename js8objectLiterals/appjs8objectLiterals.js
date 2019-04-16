// Object literal
const person = {
  // Consists of key:value pairs
  // Keys are just variables inside the object
  // Values are just values assigned to those keys
  firstName: "Sean", // a comma after each value except for the last one
  lastName: "Doe",
  age: 23,
  email: 'sdoe@gmail.com',
  likes: ['planes', 'cars', 'live entertainment'],
  // a value can be another object!
  address: {
    city: 'Richmond',
    state: 'CA' 
    // no comma after the value of the address object....
  }, 
  // but a comma *after* the address object, since it's not the last value of the person object.
  getBirthYear: function() {
    // first function to try: returning a value vs printing it
    return 1990;
    // now try printing it. what's the difference?
    console.log(1990);
    // now try returning the print statement. what happens?
    return console.log(1990);
    // correct it:
    return 1990;

    // second function to try: uses the this keyword
    return 2019 - age; // throws error. We need a way to specify that age belongs to this object.
    return 2019 - this.age; // works! this.age points us to the current object's age property.

    // third function to try: uses the Date() constructor
    let today = new Date(); // a Date object, covered in a later lecture (maybe the next one)
    let currentYear = today.getFullYear();
    return currentYear - this.age;
  } // no comma here since it's the last value of the person object

};

let val;

val = person;

// Get a value
val = person.firstName; // property of the person object!
val = person['lastName']; // property
val = person.age; // property
val = person.hobbies; // property
val = person.hobbies[2]; // property
val = person.getBirthYear(); // method of the person object!

// objects in a list
const teachers = [
  {name: 'Fatima', age: 20},
  {name: 'Jayden', age: 20},
  {name: 'Ramon', age: 20}
];

// Iterating across objects in a list
// Will learn more about for loops soon
for(let i = 0; i < teachers.length; i++) {
  console.log(teachers[i].name);
}

// *==========*

// Output
console.log(val);