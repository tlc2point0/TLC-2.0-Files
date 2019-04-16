// JavaScript Project 1: A Console Adventure Game!

// First step: write comments for each big thing you decide to do.



/* Think about what kind of text game you want! Things to consider first:

1) Setting/location/mood: it has to fit within the "Choose your own Adventure" structure

2) How many different rooms or stages will there be? To make life easy, aim for 10-20.

3) Will your character need to be initialized in any way? For instance, starting with an empty inventory, a certain amount of health, some spells, etc.

*/

// Make a new, more concise (easier to type) print function

// Label all the states: make an object named States which has the names of all states as keys which call identically-named functions as their values. Example:

// let States = {start: start(), roomEastOfStart: roomEastOfStart(), roomWestOfStart: roomWestOfStart(), ...}

// We'll make most of the functions later as we use them.

// One of the states should be start, which calls the start() function.

// Make a start function that greets the player and gives first directions in the game world.

// Make an init() function to initialize the character (inventory, health, so on), if necessary, and then call the init() function in the start() function to begin the new character


// CONTROLS:

// Make controls between states with the following command which will allow players to type something without parentheses to navigate. Here's what it can look like:

/*

Object.defineProperty(window, 'commandNameToType', {get: functionToRun});

Example: if I have options of going east or west from the start function, and I want players to type east or e to go east (and same for west), here are two commands I can make:

Object.defineProperty(window, 'east', {get: States.roomEastOfStart});
Object.defineProperty(window, 'e', {get: roomEastOfStart});
Object.defineProperty(window, 'west', {get: roomWestOfStart});
Object.defineProperty(window, 'w', {get: roomWestOfStart});

function roomEastOfStart() {
  (do stuff in this room)
}

function roomWestOfStart() {
  (do stuff in this other room)
}

*/

// Define and flesh out each function that you call