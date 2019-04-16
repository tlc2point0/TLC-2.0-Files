// Beginning JavaScript Exercise

// Complete this with your predetermined partner and discuss how to solve each problem with them.

// 1. Write a function that replaces console.log with c. Print out three statements using this new function. NOTE: be sure to use this for all the other problems! It will make them easier to write.

// function c(s) {
//   console.log(s);
// }

// function c() {
//   string = '';
//   for (let i = 0; i < arguments.length; i++){
//     string += ' ' + arguments[i];
//   }
//   console.log(string);
// };

// The best solution:

function c() {
  console.log(...arguments);
};

c("Stuff here", "stuff there");
c("hi world");
c("ASMR");

// 2. Write a function that takes a first name, last name, and age, and makes a new object with that information if at least one of those values is defined (use a conditional).

function makePerson(firstName, lastName, age) {
  if (firstName !== undefined || lastName !== undefined || age !== undefined) {
    let person = {firstName: firstName, lastName: lastName, age: age};
    // c(`The following person was entered into our system: `, person);
    return person;
  };
};

console.log(makePerson("Tippi", "Dink", 41));
console.log(makePerson("Hi"));
// let sample = {a:"b", second: 2};
// let list = {0: "first item", 1: "second item"};
// let list2 = ["first item", "second item"];
// c(sample);
// c(list == list2);

// 3. Make two objects for two different people using the function in #2.

c(makePerson('Patti', 'LaBelle', 77));
c(makePerson('George', 'Washington', 'dead'));
let person4 = makePerson("Daniel", "M.D.", 23);
c(person4);
c(person4.age);

// 4. Modify the function in #2 to have default arguments that result in an unknown or anonymous person.

// function makePerson2(firstName, lastName, age) {

//   if (firstName === undefined) {firstName = "unknown"};
//   if (lastName === undefined)  {lastName = "unknown"};
//   if (age === undefined)       {age = "unknown"};

//   let person = {firstName: firstName, lastName: lastName, age: age};
//   return person;
// };

function makePerson2(firstName = 'unknown', lastName = 'unknown', age = 'unknown') {
  return {firstName, lastName, age};
};

c(makePerson2('terry'));
console.log(makePerson2("Bauer"));

// 5. Make an object with at least two methods and two properties. Each method should have two or more steps in it.

let sampleObject = {
  age: 37,
  something: "or another",
  add: function(x,y) {
    c("x + y = ", x + y);
    return x + y;
  },
  subtract(x,y) {
    c("x - y = ", x - y);
    return x - y;
  }
};

sampleObject.add(3,7);
c("x + y", "hi");
console.log("x + y = ", 3 + 7);
sampleObject.subtract(13,7);
c({a:"b"});
console.log('hi', {a:'b'}, 'this object is still here');

// 6. Make two identical IIFEs that do something and only differ in the placement of the calling parentheses.

// Immediately-invoked function expression


(function(){
  c('hiya, I\'m an IIFE');
})();

(function(){
  c('hiya, I\'m an IIFE');
}());

(function(){
  list = [2,1,35,6,27,9,178,37,2];
  resultsList = [];
  for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < list.length; j++) {
      resultsList.push(list[i] - list[j]);
    };
  };
  c(`Length of original list: ${list.length}\nLength of new list: ${resultsList.length}`);
})();

// 7. Make a function with a return value that does some arithmetic. Assign this function to a variable. What is the value of the variable?

let myVar = (function(){return 3+7;})();

c(myVar)

// 8. Make an object that adds people to a directory (Hint: use the function created in question #2). The object should start with an empty list of people as the directory itself and add objects for each person with (at least) their first name, last name, and age. It should also have the following methods which do the obvious things they indicate: add, remove, and modify. Add 6 people to the directory, remove one, and modify another.

let people = {
  directory: [],
  add(firstName, lastName, age) {
    // need this in front
    this.directory.push(makePerson2(firstName, lastName, age))},
  remove(i) {
    this.directory.splice(i,1);
  },
  modify(i, propertyName, newValue) {
    switch(propertyName) {
      case "firstName":
        this.directory[i].firstName = newValue;
        break;
      case "lastName":
        this.directory[i].lastName = newValue;
        break;
      case "age":
        this.directory[i].age = newValue;
    };
  }
};

c(people.directory);
people.add("Terry", "Hatchet", 52);
people.add("Waldo", "Wilson", 88);
people.add("Ben", "Stiller", 38);
people.add("Jonathan", "Dinkleberg", 27);
c(people.directory);
people.remove(2);
c(people.directory);
people.modify(1, "firstName", "Where's");
c(people.directory);

// 9. Make a for loop that is supposed to type something 10 times.

let step = 0;
do {
  c("something");
  step++;
} while (step < 10);

// 10. Make a while loop that subtracts a number from a larger number and terminates eventually. Throw in a print statement for each iteration of the loop.

let mana = 3000;

while (mana >= 284) {
  mana -= 284;
  c("Arcane Missiles casted");
};

c("I've not enough mana");
c(mana);

// 11. Make a do...while loop that does something at least 3 times but no more than 13 times.

do {
  mana -= 50;
  c("Arcane Explosion casted.");
} while (mana >= 50);

c("Out of mana again.");
c(mana);


// 12. Use the Array keys method to create an array of the first 1000 whole numbers.

let first1000 = [...Array(1000).keys()];

c("Length of first1000 array:", first1000.length);

first1000.message = "The length is 1000!";

c(first1000.message);

Array.prototype.messageMain = (function () {
  if (this.waldo) {
    return "Waldo was here"
  } else {
    return null;
  }
})();

c(first1000.messageMain);

// 13. Use a for loop to print all the first names in the directory object you created. If any first name is undefined, warn the user (use console.warn and make a conditional).

people.add(undefined, 'Potato', 2);

for(let i = 0; i < people.directory.length; i++) {
  c(people.directory[i].firstName);
  if (people.directory[i].firstName === 'unknown') {
    console.warn("WARNING: The first name for this user is undefined.");
  };
};

c(people.directory);

// 14. Use a forEach loop on the directory list inside of the directory object itself to print out all the last names in a template literal that puts each one in a full sentence.

// 15. Make a function that asks how old each person is, one by one, in the directory, and responds (to itself) with their age. Incorporate your favorite variety of loop to get the job done.