let armorClasses = ["low", "medium", "heavy"];

let weapons = ["staff", "spear", "sword"];

let charClass = {
  weapons,
  name: "Mage",
  startingHealth: 100,
  startingMana: this.startingHealth * 100,
  armorClass: armorClasses[0],
  sampleNames: ["Tendrilius", "Rhonin", "Obi Wan", "Tippy"],
  location: {name: "Dalaran", continent: "Eastern Kingdoms", dateFounded: 181},
  hitCalculation/*: function */(hitAmount) {
    console.log("Hi");
    // let specialCalc = function () {
    //   console.log(this.startingHealth);
    //   console.log(this);
    //   return 3;
    // }     
    // uncomment the above function while uncommenting the comment below
    return this.startingHealth - hitAmount*10 /*+ specialCalc()*/;
  }
};

console.log(charClass.name);
console.log(charClass.location.continent);
console.log(charClass.sampleNames[3]);
console.log(charClass.hitCalculation(7));
console.log(charClass.weapons);
console.log(weapons);