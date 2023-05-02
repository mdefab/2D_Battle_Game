class BaseFighter {
    #health;
    #stamina;
    #attackLevel;
    #defenceLevel;
    #items = [];

    constructor(playerName, health, stamina, attackLevel, defenceLevel, items){
        this.playerName = playerName;
        this.#health = health;
        this.#stamina = stamina;
        this.#attackLevel = attackLevel;
        this.#defenceLevel = defenceLevel;
        this.#items = items;

    }

    ready() {
        return `{playerName} ready!`;
    }

    warCry(){
        return "Wa-powww!";
    }

    attack(){
        this.warCry();
        return this.#attackLevel * this.#randomNumberGenerator();
    }

    defend(){
        return this.#attackLevel * this.#randomNumberGenerator();
    }

    chooseItem(){}

    staminaChange(){}

    #randomNumberGenerator(){
        return Math.floor(Math.random() * 11);
    }
}