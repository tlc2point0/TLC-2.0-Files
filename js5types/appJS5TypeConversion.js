let val;
let separator = '*==========================*';

function sep() {
  console.log(separator);
}

// Number to string
val = 555;
console.log(val);
console.log(typeof val);
console.log(val.length);

sep();

val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length);

sep();

// Bool to string
val = true;
console.log(val);
console.log(typeof val);
console.log(val.length);

sep();

val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

sep();

// Date to string
val = new Date();
console.log(val);
console.log(typeof val);
console.log(val.length);

sep();

val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

sep();

// Array to string
val = [1,2,3,4];
console.log(val);
console.log(typeof val);
console.log(val.length);

sep();

val = String(val);
console.log(val);
console.log(typeof val);
console.log(val.length);

sep();

// String to number
val = '7';
console.log(val);
console.log(typeof val);
console.log(val.length);
// console.log(val.toFixed(2));

sep();

val = Number('7');
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

sep();

// Boolean to number
val = true;
console.log(val);
console.log(Number(val));
console.log(Number(false));

sep();

// Other things to number
console.log(Number(237));
console.log(Number(null));
console.log(Number('hello'));
console.log(Number([1,2,3,4]));

sep();

// parseInt & parseFloat
val = parseInt('100');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

sep();

val = parseInt('100.30')
console.log(val);
console.log(val.toFixed(2));

sep();

val = parseFloat('100.30');
console.log(val);
console.log(val.toFixed(2));

sep();

// Type Coercion
let val1 = 5;
let val2 = 6;
let sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

sep();

val1 = String(5);
val2 = 6;
sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

sep();

val1 = String(5);
val2 = 6;
sum = Number(val1 + val2);
console.log(sum);
console.log(typeof sum);