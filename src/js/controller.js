import FighterMenuView from "./views/FighterMenuView.js";


//todo: pass data into model to initialize fighter class
const controlStartButton = function(data){
    console.log(`${data.playerOne.name} chooses ${data.playerOne.fighter} and ${data.playerTwo.name} chooses ${data.playerTwo.fighter}`);
};

const init = function(){
    FighterMenuView.addHandlerStartButton(controlStartButton);
};

init();