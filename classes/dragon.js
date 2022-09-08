// Your code here
class Dragon{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }


    breathesFire(){
      return `${this.name} breathes fire everywhere! BURN!!!!`;
    }
/*This problem's test file ran at once using mocha and made it easy for me to solve the problem on my own*/

    static getDragons(...dragons){
      const fireLizards=[];
        dragons.forEach(function(dragon){
            fireLizards.push(dragon.name);
        })

        return fireLizards;
    }
}
const puff = new Dragon("Puff", "green");
 console.log(puff);
 console.log(puff.breathesFire());

const toothless = new Dragon("Toothless", "black");
 console.log(toothless);
 console.log(toothless.breathesFire());

 console.log(Dragon.getDragons(puff, toothless));


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
module.exports=Dragon;
try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
