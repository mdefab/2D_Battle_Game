class BaseFighter {
    #health;
    #stamina;
    #attackLevel;
    #defenceLevel;
    #itemsAvailable = [];
    #itemsEquipped = {};

    constructor(playerName){
        this.playerName = playerName;
    }

    ready() {
        return `{playerName} ready!`;
    }

    #warCry(){
        return "Wa-powww!";
    }

    attack(){
        this.#warCry();
        const damage = this.#attackLevel * this.#randomNumberGenerator() * this.#stamina/100 * Number(`${this.#itemsEquipped.weapon? this.#itemsEquipped.weapon.attackMultiplier: 1}`);
        this.#staminaChange(-10);
        return damage;
    }

    defend(damage){
        this.#staminaChange(10);
        const defence = this.#defenceLevel * this.#randomNumberGenerator() * this.#stamina/100 * Number(`${this.#itemsEquipped.armour? this.#itemsEquipped.armour.defenceMultiplier: 1}`);
        const damageTaken = damage - defence;
        return damageTaken > 0? this.#health -= damageTaken: this.#health;
    }

    chooseItem(damage){
        this.#health -= damage;
        if(this.#itemsAvailable.length === 0) return "No more items remaining!"
        index = Math.floor(Math.random() * (this.#itemsAvailable.length + 1))
        this.#itemsEquipped.push(this.#itemsAvailable.splice(index, 1));
    }

    #staminaChange(number){
        this.#stamina += number
        return this.#stamina
    }

    #randomNumberGenerator(){
        return Math.floor(Math.random() * 11);
    }
}