import BaseFighter from "./BaseFighterClass.js";

class TankFighter extends BaseFighter {
    health = 200;
    stamina = 100;
    attackLevel = 1.5;
    defenceLevel = 4;
    itemsAvailable = [['hammer', 1.4], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['shield', 1.2]];
    itemsEquipped = {};
    attackMessage = "ROARR!"
    fighterType = "Tank"
}; 


export default TankFighter;