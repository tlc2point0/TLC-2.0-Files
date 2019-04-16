let val; // make output section below

const today = new Date();
let birthday = new Date('11-1-1984');
birthday = new Date('11-1-1984 15:25:00');
birthday = new Date('April 4 2005');
birthday = new Date('4/4/2005');
// as you see, there are many ways to set a date

val = today;
val = today.toString();
val = birthday;
val = today.getMonth(); // returns number of the month, but minus 1!
val = today.getDate(); // returns exact number of days into the month, no minus
val = today.getDay(); // returns # of the day of the week minus 1
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
// try reloading now!
val = today.getMilliseconds(); // refresh to see updated ms's now
val = today.getTime(); // this returns the number of milliseconds since January 1st, 1970 @ midnight GMT
val = Date.now(); // also gives milliseconds since 1/1/1970


// Setting a date with properties
val = new Date();
val.setMonth(8); // returns September (9th month), so month minus 1 is the parameter
val.setMonth(0); // January
val.setDate(30); // exact date, so January 30th. no minus
val.setFullYear(1990); // exact year, so Jan. 30th, 1990 is the new date we set
val.setHours(7); // sets time to 7:00:00
val.setMinutes(15); // sets time to 7:15:00
val.setSeconds(17); // sets time to 7:15:17


// *==========*

// Output

console.log(val);
console.log(typeof val);