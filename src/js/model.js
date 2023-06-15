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
        //player move values:
        const playerOneValue = moveValueCalculator(1, move.playerOneMove);
        const playerTwoValue = moveValueCalculator(2, move.playerTwoMove);
        //connect player moves to eachother:

        // 1) playerOne attack and playerTwo defend
        if((playerOneValue.attack || playerOneValue.attack === 0) && playerTwoValue.defend){
            const damageTakenTwo = gameState.playerTwo.damageTaken(playerOneValue.attack, playerTwoValue.defend);
            console.log(`player Two stopped ${playerOneValue.attack - damageTakenTwo} damage and took ${damageTakenTwo} damage`);
        }

        // 2) playerTwo attack and playerOne defend
        if((playerTwoValue.attack || playerTwoValue.attack === 0) && playerOneValue.defend){
            const damageTakenOne = gameState.playerOne.damageTaken(playerTwoValue.attack, playerOneValue.defend);
            console.log(`player One stopped ${playerTwoValue.attack - damageTakenOne} damage and took ${damageTakenOne} damage`);
        }

        //3) both players attack
        if((playerOneValue.attack || playerOneValue.attack === 0) && (playerTwoValue.attack || playerTwoValue.attack === 0)){
            const damageTakenOne = gameState.playerOne.damageTaken(playerTwoValue.attack);
            const damageTakenTwo = gameState.playerTwo.damageTaken(playerOneValue.attack);
            console.log(`player One took ${damageTakenOne} damage`);
            console.log(`player Two took ${damageTakenTwo} damage`);
        }

        //4) playerOne attack and playerTwo picks up an item
        if((playerOneValue.attack || playerOneValue.attack === 0) && playerTwoValue.item){
            const damageTakenTwo = gameState.playerTwo.damageTaken(playerOneValue.attack);
            console.log(`player Two took ${damageTakenTwo} damage`);
        }

        //5) playerTwo attack and playerOne picks up item
        if((playerTwoValue.attack || playerTwoValue.attack === 0) && playerOneValue.item){
            const damageTakenOne = gameState.playerOne.damageTaken(playerTwoValue.attack);
            console.log(`player One took ${damageTakenOne} damage`);
        }

        //6) Both players defend
        if(playerOneValue.defend && playerTwoValue.defend){
            gameState.playerOne.damageTaken(0, playerOneValue.defend);
            gameState.playerTwo.damageTaken(0, playerTwoValue.defend);
        }
    
        // 7) PlayerOne defend and playerTwo item
        if(playerOneValue.defend && playerTwoValue.item){
            gameState.playerOne.damageTaken(0, playerOneValue.defend);
        }

        //8) PlayerTwo defend and playerOne item
        if(playerTwoValue.defend && playerOneValue.item){
            gameState.playerTwo.damageTaken(0, playerTwoValue.defend);
        }
        //There is no Item vs Item because players do not affect each other and items are applied automatically
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
            return {'attack': attackValue,
                    'move': 'attack'};
        }else if(move ==='defend'){
            return {'defend': true,
                    'move': 'defend'}
        } else if(move ==='item'){
            const item = gameState.playerOne.chooseItem();
             //if itemsAvailable empty, item will return undefined,
            // game will default to defending instead
            if(!item){
                return {'defend': true,
                        'move': 'defend'}
            }
            return {...item,
                    'move': 'item'};
        }
    }
    if(playerNumber === 2){
        if(move === 'attack'){
            const attackValue = gameState.playerTwo.attack();
            return {'attack': attackValue,
                    'move': 'attack'};
        }else if(move ==='defend'){
            return {'defend': true,
                    'move': 'defend'}
        } else if(move ==='item'){
            const item = gameState.playerTwo.chooseItem();
            //if itemsAvailable empty, item will return undefined,
            // game will default to defending instead
            if(!item){
                return {'defend': true,
                'move': 'defend'}
            }
            return {...item,
                'move': 'item'};
        }
    };
    };
  


// implement a class method that the model will call to reset stats between games
