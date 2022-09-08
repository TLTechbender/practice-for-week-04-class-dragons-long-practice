// Your code here
const FriendlyDragon= require("./classes/friendly-dragon")
const Dragon = require("./classes/dragon");
const EvilDragon = require("./classes/evil-dragon");


const falkorDoings = ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"];
const smaugDoings = ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"];

const falkor = new FriendlyDragon("Falkor", "white", falkorDoings, "Bastian");
const smaug = new EvilDragon("Smaug", "black", smaugDoings, "Dwarf King");
const allDragons = Dragon.getDragons(falkor, smaug);
console.log(falkor);
falkor.hasLifeGoals();
console.log(falkor.breathesFire());
console.log(falkor.helpsPeople());

console.log(smaug);
smaug.dontInviteThemOverForDinner();
console.log(smaug.breathesFire());
console.log(smaug.burnsNemesis());

console.log(allDragons);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = {
    falkor,
    smaug,
  };
} catch {
  module.exports = null;
}
