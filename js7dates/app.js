// Dates and times

let value;

const today = new Date();
value = today;

let birthday = new Date('11-1-1984');

birthday = new Date('April 4 2001');

birthday = new Date('4/19/2019');

// birthday = new Date('19/4/2019'); // English system of dating only

value = birthday;



value = today;
value = today.toString();
console.log(typeof today);
console.log(typeof today.toString());

value = today.getMonth(); // gives numerical value of month, but minus 1 (ex: October is 10 numerically, but 9 here)

value = new Date('January 1 1999');
value = value.getMonth(); // returns 0 for January

value = today;
value = today.getDate(); // March 1st gives 1 for the date! No minus anything.

value = today.getFullYear();

value = today.getFullYear();

value = today.getFullYear;

value = today.getHours();
value = today.getMinutes();
value = today;

value = today.getSeconds();
value = today;
value = today;

value = today.getMilliseconds();

value = today.getTime(); // milliseconds since January 1st, 1970 at midnight UTC

value = Date.now();





// Set a date manually by modifying properties through methods
value = new Date();

value.setMonth(1); // Feb
value.setDate(1);
value.setFullYear(1997);
value.setHours(15); 
value.setHours(3);
value.setMinutes(35);
value.setMinutes(46);
value.setSeconds(56);

// **********

// OUTPUT

console.log(value);