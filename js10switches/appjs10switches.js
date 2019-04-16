let gameLevel = "start";

// SWITCHES

// Better than if... else if... else if... else... when you have a lot of different cases.

// Level transition switch
switch (gameLevel) {
  // Start screen
  case "start":
    console.log("Do start screen stuff.");
    break; // proceed to the next block after the entire switch
  case "dungeon2":
    console.log("Begin dungeon 1.");
    // if 'break;' is not here, the JavaScript engine will continue with testing the next case
  case "dungeon2":
    console.log("Begin dungeon 2.");
    break;
  case "underwaterCave":
    console.log("Drown the character.");
    break;
  default:
    console.warn("The game must always have a level/state!");
}

// Useful for something called a Finite State Machine, which itself can be used to transition between states in a game, decision-making process, AI, and any program in general

let today = new Date().getDay();
let day;

switch (today) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(`Today is ${day}.`);