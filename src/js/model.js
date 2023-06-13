import AthleteFighter from './AthleteFighterClass.js';
import BruiserFighter from './BruiserFighterClass.js';
import TankFighter from './TankFighterClass.js';


    // Will push instances of class into gameState on game initialization
    //'playerOne': the fighter class e.g. BruiserFighter,
    //'playerTwo': fighter class object
export const gameState = {
    'gameStats': {
        'playerOneScore': 0,
        'playerTwoScore': 0,
    },

};


//model will receive data, make an instance of the appropriate fighter class, and push player health/stamina status to gameState
export const initializeGame = function(data){
    const fighterOne = initializeFighter(data.playerOne.fighter,data.playerOne.name);
    const fighterTwo = initializeFighter(data.playerTwo.fighter,data.playerTwo.name);
    gameState.playerOne = fighterOne;
    gameState.playerTwo = fighterTwo;
    return gameState;
};


const initializeFighter = function(fighter, username){
    switch(fighter){
        case "Tank":
            return new TankFighter(username);
        case "Athlete":
            return new AthleteFighter(username);
        case "Bruiser":
            return new BruiserFighter(username);
    };
};

//todo: generate damageTaken value. determine if player is alive at end of round.


export const fighterMoveResult = function(move){
    //playerOneMove (move.playerOneMove)
        const playerOneValue = moveValueCalculator(1, move.playerOneMove);
        const playerTwoValue = moveValueCalculator(2, move.playerTwoMove);
        //connect result of moves on each other.
        // 1) playerOne attack and playerTwo defend
        if((playerOneValue.attack || playerOneValue.attack === 0) && playerTwoValue.defend){
            const damageTakenTwo = gameState.playerTwo.damageTaken(playerOneValue.attack, playerTwoValue.defend);
            console.log(`player Two defended against ${playerOneValue.attack - damageTakenTwo} damage and took ${damageTakenTwo} damage`);
        }

        //2) playerOne attack and playerTwo attack or pick up item
        if(playerOneValue.attack && (playerTwoValue.attack || playerTwoValue.item)){
            const damageTakenTwo = gameState.playerTwo.damageTaken(playerOneValue.attack);
            console.log(`player Two took ${damageTakenTwo} damage`);
        }
        // 3) playerTwo attack and playerOne defend
        if((playerTwoValue.attack || playerTwoValue.attack === 0) && playerOneValue.defend){
            const damageTakenOne = gameState.playerOne.damageTaken(playerTwoValue.attack, playerOneValue.defend);
            console.log(`player One defended against ${playerTwoValue.attack - damageTakenOne} damage and took ${damageTakenOne} damage`);
        }
        //4) playerTwo attack and playerOne attack or pick up item
        if(playerTwoValue.attack && (playerOneValue.attack || playerOneValue.item)){
            const damageTakenOne = gameState.playerOne.damageTaken(playerTwoValue.attack);
            console.log(`player One took ${damageTakenOne} damage`);
        }

        return {
            'playerOneMove':playerOneValue,
            'playerTwoMove': playerTwoValue,
        };
        }


// returns object of move and value. e.g. {'sword': 1.4} or {'attack': 30}
const moveValueCalculator = function(playerNumber, move){
    if(playerNumber === 1){
        if(move === 'attack'){
            const attackValue = gameState.playerOne.attack();
            return {'attack': attackValue};
        }else if(move ==='defend'){
            return {'defend': true}
        } else if(move ==='item'){
            const item = gameState.playerOne.chooseItem();
             //if itemsAvailable empty, item will return undefined,
            // game will default to defending instead
            if(!item){
                return {'defend': true}
            }
            return item;
        }
    }
    if(playerNumber === 2){
        if(move === 'attack'){
            const attackValue = gameState.playerTwo.attack();
            return {'attack': attackValue};
        }else if(move ==='defend'){
            return {'defend': true}
        } else if(move ==='item'){
            const item = gameState.playerTwo.chooseItem();
            //if itemsAvailable empty, item will return undefined,
            // game will default to defending instead
            if(!item){
                return {'defend': true}
            }
            return item;
        }
    };
    };
  


// implement a class method that the model will call to reset stats between games
