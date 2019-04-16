// Objects

// Ways of storing information in a particular format

// Stores multiple values in a key:value format

// Note that everything in JS can be a value: lists, numbers, strings, variables, other objects, sets, maps, symbols (!), booleans, and functions

// Functions for objects are methods
// Everything else is a property


// The object below is named anythingInTheWorld
const anythingInTheWorld = {
  age: 4700000000,
  color: "dark teal"
}; //?

// age is a property of the anythingInTheWorld object
console.log(anythingInTheWorld.age);

// console.log(color);

console.log(anythingInTheWorld.color);

const me = {
  // key is age
  // value is 33 below
  age: 33,
  name: "Ramon Gougis",
  birthdate: new Date('6/19/85 3:25:00'),
  favoriteColor: 'red',
  hobbies: ['reading', 'games', 'streaming shows', 'getting ganked by rogues on Illidan :(', 'hiking'],
  // making a method (function inside an object)
  getBirthYear() {
    return 2019 - this.age;
  },
  // longer way to make a method (standard way to make a function elsewhere) below
  doNothing: function () {},
  monthList: [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'],
    me() {return this}
};
console.log(me.getBirthYear());

console.log(me.birthdate);
console.log(me.hobbies[3]);
console.log(me.favoriteColor);
console.log(`Hi! 

I'm ${me.name}. I was born on ${me.monthList[me.birthdate.getMonth()]} ${me.birthdate.getDate()}th, ${me.birthdate.getFullYear()}, which makes me ${me.age} years old. 

My favorite color is ${me.favoriteColor}, and some of my hobbies are ${me.hobbies[0]}, ${me.hobbies[1]}, and ${me.hobbies[2]}. 

Full object: ${me}`.length);

console.log(`Hi! My name is ${me.name}.`);

console.log(me.me().me().me().me().me().name);