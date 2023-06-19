import BaseFighter from "./BaseFighterClass.js";

class SmithFighter extends BaseFighter {
    _health = 100;
    _stamina = 100;
    _attackLevel = 8;
    _defenceLevel = 8;
    _itemsAvailable = [['sword', 1.3], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['shield', 1.2]];
    _itemsEquipped = {};
    _attackMessages = ["Melitaaaa", "Breattheee", "Huehuehuehue", "I would have wine!"];
    _fighterType = "Smithannicus";

}   


export default SmithFighter;