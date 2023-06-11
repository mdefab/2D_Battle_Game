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
// move = {'playerOneMove': move, 'playerTwoMove':move}
export const fighterMoveResult = function(move){
    //playerOneMove (move.playerOneMove)
        const playerOneValue = moveValueCalculator(1, move.playerOneMove);
        const playerTwoValue = moveValueCalculator(2, move.playerTwoMove);
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
  



//model will export playerData after moves so frontend can be updated
export const updatedGameState = function(){
    console.log(gameState);
}

// implement a class method that the model will call to reset stats between games
