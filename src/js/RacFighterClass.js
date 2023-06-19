import BaseFighter from "./BaseFighterClass.js";

class RacaFighter extends BaseFighter {
    _health = 150;
    _stamina = 150;
    _attackLevel = 9;
    _defenceLevel = 7;
    _itemsAvailable = [['hammer', 1.4], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['armour', 1.4]];
    _itemsEquipped = {};
    _attackMessages = ["I'm back!", "Ouch!", "My back!"];
    _fighterType = "Racilles";
}

export default RacaFighter;