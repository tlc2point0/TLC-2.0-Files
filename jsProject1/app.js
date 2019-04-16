// JavaScript Project 1


// Substitute console.log with c
// Use controlled tell function instead?
function c() {
  console.log(...arguments);
};


// Define current state
let States = {currentState: 'start', possibleStates: ['start', 'deathByHunger', 'lunarBase', 'vampireRoom', 'deathByVampire', 'turnedIntoVampire', 'escortedOutByVampire']}

// Inventory and status info
let inventory = {
  hasStartKey: false, 
  hasVampirism: false,
  hasAstronautSuit: false,
  itemCount: 0,
};

let playerStatus = {
  health: 100,
  mana: 0,
  sick: false,
  hunger: 0,
}

// Start the game
function start() {
  States.currentState = 'start';
  c('Welcome to the Tech Learning Center 2.0 Console Adventure Game!',
  '\n================',
  '\nFollow instructions and pay attention to the game to win.',
  "\n================");

  c('You wake up in a torchlit room tied to a chair that it itself chained to a wall. Some items lie on a table.');

  c('You can [look] around, but you can\'t move yet.');
}

// Make a look function that tells the player what they see depending on the state they're in
function _look() {
  switch (States.currentState) {
    case 'start':
      // describe stuff in the start room
      c('Observing the table, you see a pair of keys just within reach of your feet. You can [take] the keys if you like.');
      break;
    case 'deathByHunger':
      // describe stuff in the death by hunger state
      break;
    case 'lunarBase':
      break;
    case 'vampireRoom':
      break;
    case 'deathByVampire':
      break;
    case 'turnedIntoVampire':
      break;
    case 'escortedOutByVampire':
      break;
  };
};

function _take() {
  switch (States.currentState) {
    case 'start':
      // check if key is taken. if not, take it.
      if (inventory.hasStartKey) {
        c('You cannot take the key since you already have it.');
      } else {
        inventory.hasStartKey = true;
        c('You took the key. Now you can [use] the key or wait.')
      }
      break;
    case 'deathByHunger':
      break;
    case 'lunarBase':
      break;
    case 'vampireRoom':
      break;
    case 'deathByVampire':
      break;
    case 'turnedIntoVampire':
      break;
    case 'escortedOutByVampire':
      break;
  }
};

function _checkStatus() {
  c(/* print out status info */);
};

function _use() {
  switch (States.currentState) {
    case 'start':
      c('You use the key and are now out of the cage!', '\nYou can now exit through a [broken] wood door or the [steel] door');
      break;
    case 'deathByHunger':
      break;
    case 'lunarBase':
      break;
    case 'vampireRoom':
      break;
    case 'deathByVampire':
      break;
    case 'turnedIntoVampire':
      break;
    case 'escortedOutByVampire':
      break;
  }
};

// Function for the vampireRoom state
function vampireRoom() {
  // CHANGE STATE VARIABLE TO vampireRoom!
  States.currentState = 'vampireRoom';
  // Do vampire room stuff
  c("There's a vampire in this room! She's extra friendly and has geeky glasses. You think she is cute.");
};

function lunarBase() {
  // Change state variable to lunarBase
  States.currentState = 'lunarBase';
  // Do lunar base stuff
}


// Function for escorted out state

// function for death by vampire state

// function for death by hunger state

// 


// Look function command
// Object.defineProperty(window, 'look', {get: _look});

// More commands
// Object.defineProperty(window, 'reach', {get: _reach});

Object.defineProperties(window, {
  'look': {get: _look},
  'take': {get: _take},
  'check': {get: _checkStatus},
  'use': {get: _use},
  'broken': {get: vampireRoom},
  'steel': {get: lunarBase}
});

start();