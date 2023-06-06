import BaseFighter from "./BaseFighterClass.js";

class BruiserFighter extends BaseFighter {
    health = 100;
    stamina = 100;
    attackLevel = 4;
    defenceLevel = 1.5;
    itemsAvailable = [['sword', 1.3], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['armour', 1.4]];
    itemsEquipped = {};
    attackMessage = "Hurrahh!"
    fighterType = "Bruiser"
}; 


export default BruiserFighter;