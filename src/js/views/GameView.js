class GameView {
    _scorePlayerOne = document.querySelector('.score-player--one');
    _scorePlayerTwo = document.querySelector('.score-player--two');
    _vitalsPlayerOne = document.querySelector('.vitals-player--one');
    _vitalsPlayerTwo = document.querySelector('.vitals-player--two');
    _readyButtonOne = document.querySelector('.ready-one');
    _readyButtonTwo = document.querySelector('.ready-two');
    _gameMessageOne = document.querySelector('.game-message--one');
    _gameMessageTwo = document.querySelector('.game-message--two');
    _selectionBoxOne = document.querySelector('.selection--one');
    _selectionBoxTwo = document.querySelector('.selection--two');
    _readyOne = false;
    _readyTwo = false;
    _playerOneMove;
    _playerTwoMove;

    
    //eventlistener for ready button. todo: make select-box disappear on ready.
    addHandlerReadyButton(handler){
        this._readyButtonOne.addEventListener("click", function(){
            this._readyOne = true;
            if(!this._readyTwo){
                this._selectionBoxOne.classList.add('hidden');
                this._gameMessageOne.insertAdjacentHTML('afterbegin', "Player 1 ready. <br> Waiting for player 2");
                return; //other player not ready
            }
            this._readyOne = false;
            this._readyTwo = false;
            this._clearMessages();
            this._showSelectionBox();
            const setUpData = this._getPlayerMoves();
            handler(setUpData);
        }.bind(this))

        this._readyButtonTwo.addEventListener("click", function(){
            this._readyTwo = true;
            if(!this._readyOne){
                this._selectionBoxTwo.classList.add('hidden');
                this._gameMessageTwo.insertAdjacentHTML('afterbegin', "Player 2 ready. <br> Waiting for player 1");
                return; //other player not ready
            }
            this._readyOne = false;
            this._readyTwo = false;
            this._clearMessages();
            this._showSelectionBox();
            const setUpData = this._getPlayerMoves();

            handler(setUpData);
        }.bind(this))
    }

    _getPlayerMoves(){
            const moveOne = document.getElementById('choice-player--one').value;
            this._playerOneMove = moveOne === "random"? this._randomMoveGenerator(): moveOne;
            const moveTwo = document.getElementById('choice-player--two').value;
            this._playerTwoMove = moveTwo === "random"? this._randomMoveGenerator(): moveTwo;

        return {
            'playerOneMove': this._playerOneMove,
            'playerTwoMove': this._playerTwoMove,
        }
    }
    


    //method to update score on page. Should be called at start and after each game.
    updateScore(playerOneScore, playerTwoScore){
        this._scorePlayerOne.innerHTML = '';
        this._scorePlayerTwo.innerHTML = '';
        this._scorePlayerOne.insertAdjacentHTML('afterbegin', `Score: ${playerOneScore}`);
        this._scorePlayerTwo.insertAdjacentHTML('afterbegin',`Score: ${playerTwoScore}`);
    }
    
    //method to update health/stamina between rounds
    updateHealthandStamina(playerOne, playerTwo){
        this._vitalsPlayerOne.innerHTML = '';
        this._vitalsPlayerTwo.innerHTML = '';
        this._vitalsPlayerOne.insertAdjacentHTML('afterbegin', `Health: ${playerOne.health} <br> Stamina: ${playerOne.stamina}`);
        this._vitalsPlayerTwo.insertAdjacentHTML('afterbegin', `Health: ${playerTwo.health} <br> Stamina: ${playerTwo.stamina}`);
    }

    //method to update fighter image


    //method to show attack value on attack


    //method to update inventory toggle hidden class from
    // inventory depending if empty or not


    //method to update message if waiting for a player 
    // or no choice selected


    //Generates choice if random option is selected
    _randomMoveGenerator(){
        const selectOptions = document.querySelectorAll('.choice-player--one');
        const moveOptions = [...selectOptions[0].options].map(o => o.value).slice(1,)
        const index = Math.floor(Math.random() * (moveOptions.length))
        const move = moveOptions[index]
        return move
    }


    //clear ready up messages, if any
    _clearMessages(){
        this._gameMessageOne.innerHTML = '';
        this._gameMessageTwo.innerHTML = '';
    }

    //bring selection box back after hiding on ready
    _showSelectionBox(){
        this._selectionBoxOne.classList.remove('hidden');
        this._selectionBoxTwo.classList.remove('hidden');
    }};

export default new GameView();