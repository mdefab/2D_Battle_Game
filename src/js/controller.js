import FighterMenuView from "./views/FighterMenuView.js";


const controlViewGuideMenu = function(){
    console.log("Guide menu button clicked");
};


//todo: combine these into one control handler.
const controlPlayerOneStartButton = function(){
    console.log("Player one ready");
};

const controlPlayerTwoStartButton = function(){
    console.log("Player two ready");
}

const init = function(){
    FighterMenuView.addHandlerGuideButton(controlViewGuideMenu);
    FighterMenuView.addHandlerStartOneButton(controlPlayerOneStartButton);
    FighterMenuView.addHandlerStartTwoButton(controlPlayerTwoStartButton);
};

init();