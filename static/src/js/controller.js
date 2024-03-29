import FighterMenuView from "./views/FighterMenuView.js";
import GameView from "./views/GameView.js";
import GameOverView from "./views/GameOverView.js"
import WarCryView from "./views/WarCryView.js";
import HotkeysView from "./views/HotkeysView.js";
import * as model from "./model.js";
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import { async } from 'regenerator-runtime';


const controlStart = function(data){
    const gameState = model.initializeGame(data);
    GameView.updateScore(gameState.gameStats.playerOneScore, gameState.gameStats.playerTwoScore);
    GameView.startGame(gameState.playerOne, gameState.playerTwo);
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
    model.roundReset();
    // create new instance of fighter class to achieve the reset
    controlStart(oldData);
}

const controlChangeButton = function(){
    GameView.endGame();
    model.roundReset();
    FighterMenuView.showMenu();
}

const controlWarCry = function(playerNumber){
    const res = model.warCry(playerNumber);
    if(!res) return;
    WarCryView.showWarCryMessage(res);
};

const init = function(){
    FighterMenuView.addHandlerStartButton(controlStart);
    GameView.addHandlerReadyButton(controlReadyButton);
    GameOverView.addHandlerRematchButton(controlRematchButton);
    GameOverView.addHandlerChangeButton(controlChangeButton);
    WarCryView.addHandlerWarCry(controlWarCry);
};

init();