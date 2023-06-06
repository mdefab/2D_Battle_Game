import BaseFighter from "./BaseFighterClass.js";

class TankFighter extends BaseFighter {
    _health = 200;
    _stamina = 100;
    _attackLevel = 1.5;
    _defenceLevel = 4;
    _itemsAvailable = [['hammer', 1.4], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['shield', 1.2]];
    _itemsEquipped = {};
    _attackMessage = "ROARR!"
    _fighterType = "Tank";
}; 


export default TankFighter;