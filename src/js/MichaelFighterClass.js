import BaseFighter from "./BaseFighterClass.js";

class MichaelFighter extends BaseFighter {
    _health = 100;
    _stamina = 100;
    _attackLevel = 10;
    _defenceLevel = 10;
    _itemsAvailable = [['spear', 1.5], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['armour', 1.4]];
    _itemsEquipped = {};
    _attackMessage = "I'm unbeatable";
    _fighterType = "Michael";

}   


export default MichaelFighter;