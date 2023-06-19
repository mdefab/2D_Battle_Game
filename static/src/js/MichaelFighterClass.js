import BaseFighter from "./BaseFighterClass.js";

class MichaelFighter extends BaseFighter {
    _health = 150;
    _stamina = 150;
    _attackLevel = 12;
    _defenceLevel = 12;
    _itemsAvailable = [['spear', 1.5], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['armour', 1.4]];
    _itemsEquipped = {};
    _attackMessages = ["I'm undefeated btw!", "Capuaaa", "You dog!", "Argghh!"];
    _fighterType = "Mikeules";

}   


export default MichaelFighter;