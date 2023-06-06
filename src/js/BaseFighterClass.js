class BaseFighter {
    health;
    stamina;
    attackLevel;
    defenceLevel;
    itemsAvailable = [];
    itemsEquipped = {};
    attackMessage;
    fighterType;

    constructor(playerName){
        this.playerName = playerName;
    }

    ready() {
        return `${this.playerName} ready. ${this.fighterType} selected!`;
    }

    #warCry(){
        return this.attackMessage;
    }
    //returns damage
    attack(){
        this.#warCry();
        const damage = this.attackLevel * this.#randomNumberGenerator() * this.stamina/100 * Number(`${this.itemsEquipped.weapon? this.itemsEquipped.weapon.attackMultiplier: 1}`);
        this.#staminaChange(-10);
        return damage;
    }

    #defend(damage){
        this.#staminaChange(10);
        const defence = this.defenceLevel * this.#randomNumberGenerator() * this.stamina/100 * Number(`${this.itemsEquipped.armour? this.itemsEquipped.armour.defenceMultiplier: 1}`);
        const damaged = damage - defence;
        return damaged <= 0? this.health: this.health -= damaged;
    }

    //adds item to list. items will be activated after taking damage.
    chooseItem(){
        if(this.itemsAvailable.length === 0) return "No more items remaining!";
        const index = Math.floor(Math.random() * (this.itemsAvailable.length))
        const item = this.itemsAvailable.splice(index, 1)
        //this.itemsEquipped.weapon? this.itemsEquipped.weapon.attackMultiplier
        // e.g. itemsEquipped = {'weapon': {'name': 'spear', attackMultiplier': 1.5}}
        if(item.spear | item.sword | item.hammer){
            return
        }
        //this.itemsEquipped.armour? this.itemsEquipped.armour.defenceMultiplier
        if(item.armour| item.shield){
            return
        }
        if(item.health){
            return
        }
        if(item.stamina){
            return
        }
        this.itemsEquipped.push(item);
    }
    // returns health after damage taken
    damageTaken(damage, defend){
        if(defend === true){
            return this.#defend(damage)
        }else {
          return this.health -= damage;
        }
    }

    #staminaChange(number){
        this.stamina += number
        return this.stamina
    }

    #randomNumberGenerator(){
        return Math.floor(Math.random() * 11);
    }

    isAlive(){
        if(this.health <= 0) return false
        return true
    }
};


export default BaseFighter;