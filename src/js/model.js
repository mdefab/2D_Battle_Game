import AthleteFighter from './AthleteFighterClass.js';
import BruiserFighter from './BruiserFighterClass.js';
import TankFighter from './TankFighterClass.js';

export const gameState = {
    'gameStats': {
        'playerOne': {"Score": 0},
        'playerTwo': {"Score": 0},
    },
    // push this data in with model method and class instance
    // 'playerOne': {
    //     'health': 100,
    //     'stamina': 100,
    //     'itemsEquiped': [],
    // },

    // 'playerTwo': {
    //     'health': 100,
    //     'stamina': 100,
    //     'itemsEquipped': [],
    // }
}

// from controller controlStartButton:
// data = {playerOne: {'name': name, 'fighter':fighter},
//         playerTwo: {'name': name, 'fighter':fighter},}

//model will receive data, make an instance of the appropriate fighter class, and push player health/stamina status to gameState
export const initializeGame = function(data){
    console.log(`${data.playerOne.name} chooses ${data.playerOne.fighter} and ${data.playerTwo.name} chooses ${data.playerTwo.fighter}`);
    const fighterOne = initializeFighter(data.playerOne.fighter,data.playerOne.name);
    const fighterTwo = initializeFighter(data.playerTwo.fighter,data.playerTwo.name);
    gameState.playerOne = buildPlayerObject(fighterOne);
    gameState.playerTwo = buildPlayerObject(fighterTwo);
    
    console.log(gameState);
}


const initializeFighter = function(fighter, username){
    switch(fighter){
        case "Tank":
            return new TankFighter(username);
        case "Athlete":
            return new AthleteFighter(username);
        case "Bruiser":
            return new new BruiserFighter(username);
    }
}


const buildPlayerObject = function(data){
    return {'name': data.playerName,
    'fighter': data.fighterType,
    'health': data.health,
    'stamina': data.stamina,
    'itemsEquipped': data.itemsEquipped, 
    }
}


//model will export playerData after moves so frontend can be updated
export const playerData = function(){
    return;
}
