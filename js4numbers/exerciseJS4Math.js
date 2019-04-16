// /* JavaScript 4 Exercise - Numbers and Math */

// 1) Find the answers to the following with JavaScript:

//   a) 23.174 + 76.723
console.log(23.174 + 76.723); //99.8969999...
//   b) 0.1 + 0.2 == 0.3; // true or false? why?
console.log(0.1 + 0.2);
// 0.300000000000004; false since it's not exactly equal to 0.3 in JS
//   c) 179837519 mod 783971
console.log(179837519 % 783971) // 308160
//   d) [] + {}
console.log([] + {}); // [object Object]? type string?
//   e) {} + []
console.log({} + []);
// console.log(typeof({} + []));
// same as (d)
//   f) 77..toString();
//"77"
// why are 2 dots needed? Try one and see what happens.
// Two dots are needed because the first dot is interpreted as a decimal dot, always. The second dot then can be interpreted as a dot operator to access properties and methods.
//   g) 1 < 2 < 3
// true
//   h) 3 > 2 > 1
// false!
//   i) Math.max() > Math.min; // wtf? why? try to find out yourself before referencing the Hacker Noon article I ripped many of these questions from!!!
//   j) '8' + 7
//   k) '8' - 7

// 2) Find and store the following as variables: 

//   a) the orbital radius of the Earth
//   b) the mass of the Earth
//   c) the mass of the Moon
//   d) the mass of Jupiter
//   e) the mass of the Sun
//   f) the distance from the Earth and the Moon
//   g) the orbital radius of Jupiter

// 3) Find the following using JS math:

//   a) The total mass of the Earth and Moon
//   b) How much heavier Jupiter is than Earth
//   c) How many times heavier the Sun is than the Earth
//   d) The orbital distance of the Earth around the Sun (e.g. the circumference of its orbit, approximating it to be a perfect circle)
//   e) Calculate the gravitational force between each object in #1 using the formula F = G * m1 * m2 / r^2, where m1 and m2 represent the masses of the planetary bodies and r^2 denotes the square of the distance between any two pairs of bodies whose gravitational forces must be pairwise and mutually found ****JUST KIDDING!**** :)

// 4) Make a program that prompts a user for two numbers and then returns the sum, difference, product, quotient, and remainder of those numbers to them.

// 5) Game Logic:

//   Poochy the Poodle is an unfortunate character in Tokyo Jungle. He's getting chased and soon eaten up by Rocky the Rottweiler, who has rabies.

//   - Poochy's health at the start is 100.
//   - A bite takes off 10% of his body (current health) each time he is bitten.
//   - The rabies takes an additional 2 health per second off after the first bite, with damage occurring immediately after each bite.
//   - The Rottweiler is hungry and bites Poochy once per second because it takes that full second for it to lick its filthy chops.

//   Use JavaScript to find out how many seconds it takes for Poochy to get eaten or die due to sickness. :_(

// */