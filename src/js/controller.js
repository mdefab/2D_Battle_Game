import FighterMenuView from "./views/FighterMenuView.js";
import GameView from "./views/GameView.js";
import * as model from "./model.js";


//todo: pass data into model to initialize fighter class
const controlStartButton = function(data){
    const gameState = model.initializeGame(data);
    GameView.updateScore(gameState.gameStats.playerOneScore, gameState.gameStats.playerTwoScore);
    GameView.updateHealthandStamina(gameState.playerOne, gameState.playerTwo);
};

const init = function(){
    FighterMenuView.addHandlerStartButton(controlStartButton);
};

init();