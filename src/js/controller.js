import FighterMenuView from "./views/FighterMenuView.js";


// const controlViewGuideMenu = function(){
//     console.log("Guide menu button clicked");
// };


//todo: pass data into model to initialize fighter class
const controlStartButton = function(data){
    console.log(`${data.playerOne.name} chooses ${data.playerOne.fighter} and ${data.playerTwo.name} chooses ${data.playerTwo.fighter}`);
};

const init = function(){
    // FighterMenuView.addHandlerGuideButton(controlViewGuideMenu);
    FighterMenuView.addHandlerStartButton(controlStartButton);
};

init();