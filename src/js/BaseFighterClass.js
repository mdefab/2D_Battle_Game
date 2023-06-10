class BaseFighter {
    _health;
    _stamina;
    _attackLevel;
    _defenceLevel;
    _itemsAvailable = [];
    _itemsEquipped = {};
    _attackMessage;
    _fighterType;

    constructor(playerName){
        this.playerName = playerName;
    }

    //returns string on ready 
    ready() {
        return `${this.playerName} ready. ${this._fighterType} selected!`;
    }

    //returns string to add on attack
    warCry(){
        return this._attackMessage;
    }
    //returns damage
    attack(){
        const damage = this._attackLevel * this.#randomNumberGenerator() * this._stamina/100 * Number(`${this._itemsEquipped.weapon? this._itemsEquipped.weapon.attackMultiplier: 1}`);
        this.#staminaChange(-10);
        return damage;
    }

    // returns health after damage taken
    #defend(damage){
        this.#staminaChange(10);
        const defence = this._defenceLevel * this.#randomNumberGenerator() * this._stamina/100 * Number(`${this._itemsEquipped.armour? this._itemsEquipped.armour.defenceMultiplier: 1}`);
        const damaged = damage - defence;
        return damaged <= 0? this._health: this._health -= damaged;
    }
_
    //adds item to itemsEquipped list. items will be activated after taking damage and checking if still alive.
    // so model will call this method after damageTaken and isAlive methods.
    chooseItem(){
        if(this._itemsAvailable.length === 0) return "No more items remaining!";
        const index = Math.floor(Math.random() * (this._itemsAvailable.length))
        const item = this._itemsAvailable.splice(index, 1)
        let name, value;
        [[name, value]] = item;
        if(name === "spear" | name === "sword" | name === "hammer"){
            this._itemsEquipped.weapon = {'name': name, 'attackMultiplier': value}
        }
        if(name === "armour" | name === "shield"){
            this._itemsEquipped.amour = {'name': name, 'defenceMultiplier': value}
        }
        if(name === "health"){
            this._health += value;
        }
        if(name === "stamina"){
            this._stamina += value;
        }
        return item;
    }
    // returns health after damage taken
    damageTaken(damage, defend){
        if(defend === true){
            return this.#defend(damage)
        }else {
          return this._health -= damage;
        }
    }

    #staminaChange(number){
        this._stamina += number
        return this._stamina
    }

    #randomNumberGenerator(){
        return Math.floor(Math.random() * 11);
    }

    get alive(){
        if(this._health <= 0) return false
        return true
    }

    get health(){
        return this._health;
    }

    get stamina(){
        return this._stamina;
    }

    get itemsEquipped(){
        return this._itemsEquipped;
    }

    get fighterType(){
        return this._fighterType;
    }
};


export default BaseFighter;