// LOOPS

// Loops repeat instructions until a specific condition is reached

// FOR loop

for (let i = 0; i < 10; i++) {
  // i++ means i = i+1
  console.log(i);
  console.log(`Current number: ${i}`)
}

for (let i = 0; i < 10; i++) {
  if (i === 13) {
    console.log(`${i} is my favorite number!`);
    continue;
  } else if (i === 3) {
    console.log(`${i} is not my favorite number.`)
  // } else if (i === 8) {
  //   console.log("Loop stopped.");
  //   break;
  } else {
    console.log(`Current number: i`);
  }
}

// Generally you should use a for loop when you know how many times it will be run.


// WHILE loop

let health = 100;

while (health > 0) {
  health -= 10; // means health = health - 10
  console.log("I've been hit!");
}

if (health <= 0) {
  console.log("You dead.");
}

// Generally, you should use while loops if you don't know how many times it will be run, or to run a program continuously (in most cases, until explicitly stopped).


// DO WHILE loop

// always runs at least once

let longNight = [...Array(7).keys()]; // uses the spread ... operator, which places the elements of an iterable or array object wherever the spread operator is
// longNight = [0,1,2,3,4,5,6]

do {
  console.log("The night is long and full of terrors...");
  console.log(`${longNight.length} years left.`);
  longNight.pop();
  console.log(`${longNight.length} years left.`);
  longNight.pop();
} while (longNight.length > 1)

console.log("The long night is over!");


// LOOPING THROUGH ARRAYS

let instructors = [
  {name: "Jayden", title: "STEM and Healthcare Instructor"},
  {name: "Fatima", title: "STEM Instructor A"},
  {name: "Ramon", title: "STEM Instructor B"}
]

// Expected way to loop through an array:
for (let i = 0; i < instructors.length; i++) {
  console.log(`${instructors[i].title} is a title.`);
}

// Another (better?) way:
instructors.forEach(function (person, index) {
  console.log(`${instructors[index].name} is an instructor.`);
})


// MAP

let roles = instructors.map(function(person) {
  console.log(person.name)
})