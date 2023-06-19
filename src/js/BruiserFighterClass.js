import BaseFighter from "./BaseFighterClass.js";

class BruiserFighter extends BaseFighter {
    _health = 100;
    _stamina = 100;
    _attackLevel = 8;
    _defenceLevel = 1.5;
    _itemsAvailable = [['sword', 1.3], ['health', 10], ['health', 20],
    ['health', 30], ['health', 40], ['health', 50], ['stamina', 20],
    ['stamina', 30], ['stamina', 50], ['armour', 1.4]];
    _itemsEquipped = {};
    _attackMessages = ["Hurrahh!", "Hu-yeahh!", "Bam bam"];
    _fighterType = "Bruiser";
}; 


export default BruiserFighter;