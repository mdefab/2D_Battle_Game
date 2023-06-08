// later refactor to avoid duplication of player one and two code.

class FighterMenuView {
    _guideMenuButton = document.querySelector(".btn-guide");
    _gameMenu = document.querySelector(".game-menu");
    _overlay = document.querySelector(".overlay");
    _playerOneName;
    _playerTwoName;
    _playerOneFighterChoice;
    _playerTwoFighterChoice;
    _startButtonOne = document.querySelector(".start--one");
    _startButtonTwo = document.querySelector(".start--two");
    _messageOne = document.querySelector(".message--one");
    _messageTwo = document.querySelector(".message--two");
    _startOne = false;
    _startTwo = false;


//listen for click on player guide
    addHandlerGuideButton(handler){
        this._guideMenuButton.addEventListener('click', function(){
            handler();
        })
    }

//Generates fighter type if Random option is selected
    _randomFighterGenerator(){
        const selectOptions = document.querySelectorAll('.fighter-choice--one');
        const fighterOptions = [...selectOptions[0].options].map(o => o.value).slice(1,)
        const index = Math.floor(Math.random() * (fighterOptions.length))
        const fighter = fighterOptions[index]
        return fighter
    }


//Get user choices for name and fighters and returns object. Offers default naming if no username entered.
    _getPlayerChoices(){
        const playerOne = document.getElementById('player-name--one').value
        this._playerOneName = playerOne? playerOne: "Player 1";
        const playerTwo = document.getElementById('player-name--two').value;
        this._playerTwoName = playerTwo? playerTwo: "Player 2";
        const fighterOne = document.querySelector('.fighter-choice--one').value;
        this._playerOneFighterChoice = fighterOne === "Random"? this._randomFighterGenerator():fighterOne;
        const fighterTwo = document.querySelector('.fighter-choice--two').value;
        this._playerTwoFighterChoice = fighterTwo === "Random"? this._randomFighterGenerator():fighterTwo;
        return {
            "playerOne": {"name": this._playerOneName, "fighter": this._playerOneFighterChoice},
            "playerTwo":{"name": this._playerTwoName, "fighter": this._playerTwoFighterChoice},
        };
    }

//listen for click on player one and two fight(start) buttons
    addHandlerStartButton(handler){
        this._startButtonOne.addEventListener("click", function(){
            this._startOne = true;
            if(!this._startTwo){
                this._messageOne.insertAdjacentHTML('afterbegin', "Player 1 ready. <br> Waiting for player 2");
                return; //other player not ready
            }
            this._clearMessages();
            this._hideMenuandOverlay();
            const setUpData = this._getPlayerChoices();
           
            handler(setUpData);
        }.bind(this))

        this._startButtonTwo.addEventListener("click", function(){
            this._startTwo = true;
            if(!this._startOne){
                this._messageTwo.insertAdjacentHTML('afterbegin', "Player 2 ready. <br> Waiting for player 1");
                return; //other player not ready
            }

            this._clearMessages();
            this._hideMenuandOverlay();
            const setUpData = this._getPlayerChoices();

            handler(setUpData);
        }.bind(this))
    }

// clear start up messages, if any
    _clearMessages(){
        this._messageTwo.innerHTML = '';
        this._messageOne.innerHTML = '';
    }


    _hideMenuandOverlay(){
        this._gameMenu.classList.add("hidden");
        this._overlay.classList.add("hidden");
    }

};



export default new FighterMenuView();