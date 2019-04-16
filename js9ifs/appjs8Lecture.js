// IFs

// Runs code when something is true. Otherwise, it'll do other stuff

let id = "100";

// (weak) Equal to: use two == signs. Don't do it, does not check type.
// if (id == 100) {
//   console.log("id is 100");
// } else {
//   console.log("It's not 100!");
// }

// // (weak) Not equal to... but doesn't check type
// if (id != 100) {
//   console.log("id is not 100");
// } else {
//   console.log("It's 100!");
// }

// Strong equality/strictly equal to: equal value and type (does not coerce)

// YOU SHOULD BE USING THIS INSTEAD OF ==

if (id === 100) {
  console.log("id is the number 100");
} else {
  console.log("It's not the number 100!");
}


// Strong inequality/strictly not equal to: runs if the value and/or type are unequal

// You want to use this, too

if (id !== "100") {
  console.log("id is not the number 100");
} else {
  console.log("It's the number 100!");
}

// console.log(id);
// console.log(Boolean(id));
// console.log(!Boolean(id));
// console.log(!id);

if (!id === !Boolean(id)) {
  console.log("It's a bool");
}

let val = "100";

console.log(Boolean(val));
console.log(!!id);


// Ternary operator

// Shorthand way of checking if something's true or false. Does only if... else... as opposed to if... else if... else...

console.log(id === 100 ? "id is 100" : "id is not 100");

id === 100 ? 
console.log("id is 100") : console.log("id is not 100");

id = 99;

// IF... ELSE IF... 

if (id === 103) {
  console.log("id is 103");
} else if (id === 102) {
  console.log("id is 102");
} else if (id === 101) {
  console.log("id is 101");
} else if (id === 100) {
  console.log("id is 100");
} else {
  console.log("id is not 100, 101, 102, or 103");
};

id === 103 ? 
  console.log("id is 103") :
    id === 102 ?
      console.log("id is 102") :
        id === 101 ?
          console.log("id is 101") : 
            id === 100 ?
              console.log("id is 100") :
                console.log("id is not 100, 101, 102, orrrrrr 103");

// id is 99 here...

// Greater than or equal to
if (id >= 95) {console.log("id is greater than or equal to 95");} 
else {console.log("id is less than 95.")};

// Less than or equal to
if (id <= 98) {
  console.log("id is less than 99");
} else {
  console.log("id is not less than 99");
}

if (id) {
  console.log("id exists?");
}

let name = "Ramon";

if ("alex".length <= name.length) {
  console.log("something");
} else {
  console.log("something else");
}

// And && and or ||

if (id === 99 && name === "Ramon") {
  console.log("truth");
} else {
  console.log("false");
}

if (id === 99 || name === "Ramon") {
  console.log("truth");
} else {
  console.log("false");
}

let nand = function() {
    
    for (let i = 1; i < arguments.length - 1; i++) {
      arguments[i] && arguments[i + 1]
    }
}

console.log(nand(1,0));