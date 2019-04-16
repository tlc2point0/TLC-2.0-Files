// JavaScript 3 - Project Setup, Strings, & String Methods


/* 

VISUAL STUDIO CODE SETTING CONFIGURATION (one-time only):

Go to File > Preferences > Settings.

- Files: Auto Save: afterDelay or onFocusChange recommended.
- Files: Auto Save Delay: I like 250, YMMV.
- Font Size: whatever you like (16-26 is ok).
- Font: your choice!
- Editor: Tab Size: 2

*/


/* 

HOW TO MAKE A NEW PROJECT (each lecture or exercise):

- Make a new folder somewhere, naming it after the lecture (shorter is ok)

- Open the folder in Visual Studio Code

- Make an index.html file in the folder

- Type ! and Enter to use Visual Studio Code's HTML template (like html and Enter in Sublime)

- Change the page title to be the lecture topic

- Make an app.js file

- In the HTML file, link the HTML file to the script with a <script> element with src="app.js"

- Right-click your HTML file and select "Open with Live Server"

- The files will auto-save constantly, and any changes made will automatically reload on the browser page!

*/


// **************************** //


// COMMENTS


// Single-line comment

/* Multiline
comment */

/* Properly using comments:

// Should tell how to use a program such that someone 
     would never have to look at the code

// Explain the purpose behind what is written

// Never simply explain what the code does

// Write it in high-level English whenever possible (not in code or pseudocode)

// A good idea is to write comments BEFORE you write your programs. 
     It can really help both the structure of your code and explain
     what you code does later.

*/


// **************************** //


// STRING METHODS & PROPERTIES


// 0) Let's start by making a couple of string variables and the output statement (way below)

let firstName = "Ramon";
// let lastName = "Gougis";
// let val;
console.log(firstName);

// 1) Putting strings together (concatenation & appending):

// CONCATENATION: 

// val = 'string1' + 'string2';
// val = firstName + lastName;

// APPENDING: 

// 'string1' += 'string2';
// val += 'string3';
  
// CONCATENATION 2: 

// val = "string1".concat('string2', 'string3', ...);
// val = firstName.concat(lastName);


// 2) Taking strings apart - splitting,  slicing, & substring(ing?):

// SPLIT: 

// val = "string".split('char' or 'chars');
  
// SLICE: 

// val = "string".slice(# or #,#);

// BONUS: try negative numbers in slice!

// Explanation: programming usually starts counting each index or item with 0. Thus the first character selected or counted will (again, usually) start with 0 instead of 1. Practice counting this way: 0, 1, 2, 3, ...


// 3) Allowing special characters in strings

// ESCAPE CHARACTERS: such as \', \", new lines \n, and new tabs in strings

// val = 'There\'s Jack\'s and Jill\'s joke...\n\ton the floor...\n\twhere it belongs.';

// val = "She said,\"When using double quotes outside, escape the ones inside.\"";


// 4) Finding the length of a string

// LENGTH PROPERTY:

// val = firstName.length;
// val = 'a'.length;


// 5) Changing case (capitalization and uncapitalization)

// TO UPPER CASE:

// val = firstName.toUpperCase();
// Note the parentheses () above.

// TO LOWER CASE:

// val = 'BIG CAPS'.toLowerCase();


// 6) Finding a character in a particular location (indexing)

// BRACKETS [#] INDEXING:

// val = firstName[3];

// CHARACTER AT:

// val = firstName.charAt(3);
// val = firstName.charAt(firstName.length - 1);

// Try val = firstName[firstName.length - 1];
// Try val = firstName[-1];


// 7) Finding the location of a particular character or substring

// INDEX OF:

// val = "Cincinnati".indexOf('inn');
// val = "hadoop".indexOf('d');
// val = "apple".indexOf('z');
// val = "AWESOME".indexOf('a');

// LAST INDEX OF:

// val = "Cincinnati".lastIndexOf('n');
// val = "last index of".lastIndexOf(' ');


// 8) Inserting string-valued variables easily

// TEMPLATE STRINGS:

// Note: Always use backticks ``(above the tilda key) to enclose template strings!

val = `My full name is ${firstName} ${lastName}.`;
let city = "San Francisco";
let food = "apples";

// val = `My first name is ${Ramon}, my last name is ${Gougis}, I teach in ${city}, and I like eating ${food}.`;


// **************************** //

// OUTPUT

console.log(val);