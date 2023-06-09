import FighterMenuView from "./views/FighterMenuView.js";
import * as model from "./model.js";


//todo: pass data into model to initialize fighter class
const controlStartButton = function(data){
    const gameState = model.initializeGame(data);
};

const init = function(){
    FighterMenuView.addHandlerStartButton(controlStartButton);
};

init();