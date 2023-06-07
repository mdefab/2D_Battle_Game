// later refactor to avoid duplication of player one and two code.

class FighterMenuView {
    _guideMenuButton = document.querySelector(".btn-guide");
    _playerOneName;
    _playerTwoName;
    _playerOneFighterChoice;
    _playerTwoFighterChoice;
    _errorMessageOne = document.querySelector(".error-one");
    _errorMessageTwo = document.querySelector(".error-two");
    _startButtonOne = document.querySelector(".start-one");
    _startButtonTwo = document.querySelector(".start-two");
    _startOne = false;
    _startTwo = false;


//listen for click on player guide
    addHandlerGuideButton(handler){
        this._guideMenuButton.addEventListener('click', function(){
            handler();
        })
    }

//listen for click on player one and two fight(start) buttons

    addHandlerStartOneButton(handler){
        this._startButtonOne.addEventListener("click", function(){
            this._startOne = true;
            handler();
        })
    }

    
    addHandlerStartTwoButton(handler){
        this._startButtonTwo.addEventListener("click", function(){
            this._startTwo = true;
            handler();
        })
    }

//listen for click on player two fight(ready) button

//display error message if data not correctly completed

};



export default new FighterMenuView();