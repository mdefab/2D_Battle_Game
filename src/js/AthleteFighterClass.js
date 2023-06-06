import BaseFighter from "./BaseFighterClass.js";

class AthleteFighter extends BaseFighter {
    _health = 100;
    _stamina = 150;
    _attackLevel = 2;
    _defenceLevel = 2;
    _itemsAvailable = [['spear', 1.5], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['armour', 1.4]];
    _itemsEquipped = {};
    _attackMessage = "Wa-powww";
    _fighterType = "Athlete";

}   


export default AthleteFighter;