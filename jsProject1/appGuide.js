/*

NOTE: Follow these directions to allow console input without the prompt dialog.

As an example, I'll make a simple choice for a room and execute a command there:

*/

// Very first thing: wrap everything in an IIFE to prevent "undefined" returns being printed out from console.log

(function() {

// Making a new print function instead of console.log
// Allows for quicker typing and does not print undefined in the Chrome console
let c = function (s) {
  console.log(s);
}

function room() {
  c("There's a long white room with a window at the end.");
  c("Do you want to go [back] or [forward]?");
}

function goBack() {
  c("You decide to go back.");
  room();
}

function goForward() {
  c("You decide to go forward.");
  room();
}

// Make sure your command names are not existing properties or methods of the window object!

Object.defineProperty(window, 'back', {get: goBack});
Object.defineProperty(window, 'b', {get: goBack});
Object.defineProperty(window, 'B', {get: goBack});
Object.defineProperty(window, 'BACK', {get: goBack});
Object.defineProperty(window, 'Back', {get: goBack});
Object.defineProperty(window, 'bACK', {get: goBack});

Object.defineProperty(window, 'forward', {get: goForward});
Object.defineProperty(window, 'f', {get: goForward});
Object.defineProperty(window, 'F', {get: goForward});
Object.defineProperty(window, 'Forward', {get: goForward});
Object.defineProperty(window, 'FORWARD', {get: goForward});
Object.defineProperty(window, 'fORWARD', {get: goForward});

room();

// end of IIFE that prevents undefined from printing after console.log statements
})(); // end of IIFE that prevents undefined from printing after console.log statements

Object.defineProperty(window, 'go', {get: go});
Object.defineProperty(window, 'GO', {get: go});
