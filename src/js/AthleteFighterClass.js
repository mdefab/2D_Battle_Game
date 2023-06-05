import BaseFighter from "./BaseFighterClass.js";

class AthleteFighter extends BaseFighter {
    health = 100;
    stamina = 150;
    attackLevel = 2;
    defenceLevel = 2;
    itemsAvailable = [{'spear': 1.5}, {'health': 10}, {'health': 20},
    {'health': 30}, {'health': 40}, {'health': 50}, {'stamina': 20},
    {'stamina': 30}, {'stamina': 50}, {'armour': 1.4}];
    itemsEquipped = {};
    attackMessage = "Wa-powww"

}   


export default AthleteFighter;