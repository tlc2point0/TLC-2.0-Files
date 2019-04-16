const id = 100;

// Equal to

if (id == 100) {
  console.log('Correct!');
} else {
  console.log('Incorrect.');
}

// Not equal to

if(id != 101) {
  console.log("Correct again!");
} else {
  console.log('Wrong this time...');
}

// Strictly equal to (value & type are equal for the things being compared)
if (id === 100) {
  console.log('Correct one more time!');
} else {
  console.log('Incorrect.');
}

// Strictly not equal to (either the value or the type differ between the things being compared)
if (id !== 100) {
  console.log('Correct!');
} else {
  console.log('Incorrect. :(');
}

// Use === and !== from now on when checking for equality. It's best practice in many development environments.

// Checks for the presence of a variable without throwing an error (which it would do with a condition of if(id))
if (typeof id !== undefined) {
  console.log(`The id is ${id}`);
} else {
  console.log(`No id.`);
}

// Compare to if(id):
if (id) {
  console.log(`The id is ${id}.`);
} else {
  console.log(`Will this ever print?`);
} // now comment it out

// Greater than
if (id > 200) {
  console.log('id is greater than 200.')
} else {
  console.log(`id is less than or equal to 200.`);
}

// Less than
if (id < 200) {
  console.log('id is greater than 200.')
} else {
  console.log(`id is less than or equal to 200.`);
}

// Greater than or equal to
if (id >= 200) {
  console.log('id is greater than or equal to 200.')
} else {
  console.log(`id is less than 200.`);
}

// Less than or equal to
if (id >= 200) {
  console.log('id is greater than 200.')
} else {
  console.log(`id is less than or equal to 200.`);
}

// If... else if... else if... else

const charClass = "mage";

if (charClass === "warrior") {
  console.log('Your character is a warrior.');
} else if (charClass === "druid") {
  console.log('You\'re a druid.');
} else if (charClass === "mage") {
  console.log('You\'re a mage!');
} else {
  console.log('Please pick a class.');
}

// Logical operators: and (&&), or (||)

const name = "Magelolz";
const age = "3";

// And: &&
if (age > 60 && age < 180) {
  console.log(`${name} is an archmage.`);
} else if (age <= 60 && age > 20) {
  console.log(`${name} is a veteran mage.`);
} else {
  console.log(`${name} is a mage in training.`);
}

// Or: ||
if (age < 6 || age > 65) {
  console.log(`${name} is a child or elderly ${charClass}.`);
} else {
  console.log(`${name} can fight!`);
}

// Ternary operator: a quick way to do conditionals with two choices
console.log(id === 100 ? `id is correct!` : `id is incorrect.`);
console.log(charClass === "priest" ? `${name} is a priest.` : `${name} needs a priest!`);