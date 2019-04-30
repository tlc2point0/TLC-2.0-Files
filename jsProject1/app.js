// JavaScript Project 1
const gameTitle = "Lunarlvst: The Bloodmoon";

//Daniel has edited this file.

// I'm editing this file - Jesse Dekel

//ANOTHA ONE

//AND ANOTHA ONE - Parker

// Ramon has edited this file
// Ramon has edited this file yet again!

//John edited this file

//Whoops I did it again -Joe

// Substitute console.log with c
// Use controlled tell function instead?
function c() {
  console.log(...arguments);
}

// Define current state
let States = {
  currentState: "start",
  possibleStates: ["start", "steelDoor", "lastBoss", "vampireRoom"]
};

let Developers = {
  rg: 'Ramon',
  ls: 'Lionel',
  eu: 'Emmy',
  as: 'Alex',
  jd: 'Jesse',
  zr: 'Zabdiel',
  pm: 'Parker',
  jm: 'John',
  aa: 'Angela',
  dm: 'Daniel',
  ct: 'Christian',
}

let printDevCommands = () => Object.entries(Developers).forEach(([initial, name]) => {
  c(`[${initial}] for ${name}'s circle of hell`)
})

// Inventory and status info
let inventory = {
  hasStartKey: false,
  hasVampirism: false,
  hasLycanthropy: false,
  hasAstronautSuit: false,
  itemCount: 0
};

let playerStatus = {
  health: 100,
  mana: 0,
  sick: false,
  hunger: 0
};

// Start the game
function start() {
  States.currentState = "start";
  c(
    `Welcome to ${gameTitle}, a Tech Learning Center 2.0 Console Adventure Game!`,
    "\n================",
    "\nFollow instructions and pay attention to the game to win.",
    "\n================"
  );

  c(
    "You wake up in a torchlit room tied to a chair that it itself chained to a wall. Some items lie on a table."
  );

  c("You can [look] around, but you can't move yet.");
}

function steelDoor() {
  // Add the steelDoor state as a possible state in the States list above
  // Change the States.currentState variable to be this state
  States.currentState = "steelDoor";
  // Do steelDoor state stuff (i.e. DIE)
  DEATH();
}

// Make a look function that tells the player what they see depending on the state they're in
function _look() {
  switch (States.currentState) {
    case "start":
      // describe stuff in the start room
      c(
        "Observing the table, you see a pair of keys just within reach of your feet. You can [take] the keys if you like, or [wait]."
      );
      break;
    case "vampireRoom":
      break;
  }
}

function _take() {
  switch (States.currentState) {
    case "start":
      // check if key is taken. if not, take it.
      if (inventory.hasStartKey) {
        c("You cannot take the key since you already have it.");
      } else {
        inventory.hasStartKey = true;
        c("You took the key. Now you can [use] the key or [wait].");
      }
      break;
    case "vampireRoom":
      break;
  }
}

function _checkStatus() {
  c(/* print out status info */);
}

function _use() {
  switch (States.currentState) {
    case "start":
      c(
        "You use the key and are now out of the cage!",
        "\nYou can now exit through a [broken] wood door or the [steel] door."
      );
      break;
    case "vampireRoom":
      break;
  }
}

// Function for the vampireRoom state
function vampireRoom() {
  // REMINDER: Add the name of the state/function to the list of possible states above
  // CHANGE STATE VARIABLE TO vampireRoom!
  States.currentState = "vampireRoom";
  // Do vampire room stuff
  c(
    "There's a vampire in this room! She's extra friendly and has geeky glasses. You think she is cute."
  );
  c(
    "However, she is deadly serious in the face when she asks: 'Tell me what circle of hell you would like to explore. Here are you choices: ' "
  );
  printDevCommands();
}

let transitionMessage = `She snaps her fingers, transporting you through the gateway between this dimension and `;


function _rg() { // Ramon
  States.currentState = "rg";
  c(transitionMessage + "Ramon's dimension.");
}
function _ls() { // Lionel
  c(transitionMessage);
}
function _eu() { // Emmy
  c(transitionMessage);
}
function _as() { // Alex
  c(transitionMessage);
}
function _jd() { // Jesse
  c(transitionMessage);
}
function _zr() { // Zabdiel
  c(transitionMessage);
}
function _pm() { // Parker
  c(transitionMessage);
}
function _jm() { // John
  c(transitionMessage);
}
function _aa() { // Angela
  c(transitionMessage);
}
function _dm() { // Daniel
  c(transitionMessage);
}
function _ct() { // Chris
  c(transitionMessage);
}

// Utility function: DOES NOT CHANGE STATE
// Runs in case we die in any given state
// Checks what state we're in, then gives different messages based on where we die
function DEATH() {
  let restartMessage = "Type [restart] to restart the game.";
  // Do death stuff depending on the state
  console.error("YOU DIED.");
  switch (States.currentState) {
    case "start":
      c(`You waited too long and died of ${
        inventory.hasVampirism ? "thirst" : "hunger"
        }!
      ${restartMessage}`);
      break;
    case "steelDoor":
      c(`You walk through the door, entering a dark, dank space. The floor is uneven with pits inside, punctuated by large metallic objects. It's slippery, so you trip on a sharp, conical object in the dark. 
      Immediately, the room groans as if something is awakening. You hear a distant roar that comes close, shaking the floor and ceiling above you.
      In a flash of darkness, the top and the bottom of the room converge together with you between them. Your body is squashed amongst numerous large spikes above and around you.
      ${restartMessage}`);
      break;
  }
}

// Look function command
// Object.defineProperty(window, 'look', {get: _look});

// More commands
// Object.defineProperty(window, 'reach', {get: _reach});

Object.defineProperties(window, {
  restart: { get: start },
  look: { get: _look },
  take: { get: _take },
  check: { get: _checkStatus },
  use: { get: _use },
  broken: { get: vampireRoom },
  steel: { get: steelDoor },
  wait: { get: DEATH },
});

// Create a new command for each developer
(function createDevCommands() {
  Object.keys(Developers).forEach(initial => {
    Object.defineProperty(window, `${initial}`, { get: window[`_${initial}`] });
  });
})()


start();
