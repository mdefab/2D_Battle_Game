import FighterMenuView from "./views/FighterMenuView.js";
import GameView from "./views/GameView.js";
import GameOverView from "./views/GameOverView.js"
import * as model from "./model.js";


const controlStart = function(data){
    const gameState = model.initializeGame(data);
    GameView.updateScore(gameState.gameStats.playerOneScore, gameState.gameStats.playerTwoScore);
    GameView.startGame(gameState.playerOne, gameState.playerTwo);
    console.log(gameState);
};

//receives move choice. todo: pass choice into model to get result of move
const controlReadyButton = function(moveChoices){
    const moves = model.fighterMoveResult(moveChoices);
    GameView.updatePlayerMoveandImageMessages(moves);
    GameView.updatePlayerData(model.gameState.playerOne, model.gameState.playerTwo);
    const gameStats = model.gameStatus();
    if(gameStats.gameOver){
        GameView.updateScore(gameStats.playerOneScore, gameStats.playerTwoScore);
        GameView.endGame();
        GameOverView.gameOverMessages(gameStats);
    };
};

const controlRematchButton = function(){
    //username and fighter choice staying the same, just resetting vitals and equipment lists.
    const oldData = {
        "playerOne": {"name": model.gameState.playerOne.playerName, "fighter": model.gameState.playerOne.fighterType},
        "playerTwo":{"name": model.gameState.playerTwo.playerName, "fighter": model.gameState.playerTwo.fighterType},
    };
    //change model.gameState.gameStats.gameOver back to false.
    model.roundReset();
    // create new instance of fighter class to achieve the reset
    controlStart(oldData);
}

const controlChangeButton = function(){
    FighterMenuView.showMenu();
    model.roundReset();
}

const init = function(){
    FighterMenuView.addHandlerStartButton(controlStart);
    GameView.addHandlerReadyButton(controlReadyButton);
    GameOverView.addHandlerRematchButton(controlRematchButton);
    GameOverView.addHandlerChangeButton(controlChangeButton);
};

init();