import FighterMenuView from "./views/FighterMenuView.js";
import GameView from "./views/GameView.js";
import * as model from "./model.js";


const controlStartButton = function(data){
    const gameState = model.initializeGame(data);
    GameView.updateScore(gameState.gameStats.playerOneScore, gameState.gameStats.playerTwoScore);
    GameView.updateHealthandStamina(gameState.playerOne, gameState.playerTwo);
    GameView.addPlayerNames(gameState.playerOne, gameState.playerTwo);
};

//receives move choice. todo: pass choice into model to get result of move
const controlReadyButton = function(move){
    console.log(move);
    const moves = model.fighterMoveResult(move);
    model.updatedGameState();
    GameView.updatePlayerMoveMessages(moves);
    GameView.updateHealthandStamina(model.gameState.playerOne, model.gameState.playerTwo);
}

const init = function(){
    FighterMenuView.addHandlerStartButton(controlStartButton);
    GameView.addHandlerReadyButton(controlReadyButton);
    
};

init();