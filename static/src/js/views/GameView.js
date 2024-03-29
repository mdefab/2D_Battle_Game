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
    _playerOneMoveMessage = document.querySelector('.move-player--one');
    _playerTwoMoveMessage = document.querySelector('.move-player--two');
    _playerOneTitle = document.querySelector('.name-title--one');
    _playerTwoTitle = document.querySelector('.name-title--two');
    _playerOneImage = document.querySelector('.img-player--one');
    _playerTwoImage = document.querySelector('.img-player--two');
    _playerOneInventory = document.querySelector('.inventory-player--one');
    _playerTwoInventory = document.querySelector('.inventory-player--two');
    _gameOverMenu = document.querySelector(".game-over-menu");
    _gameMenu = document.querySelector(".game-menu");
    _playerOneChoice;
    _playerTwoChoice;
    _playerOneMove;
    _playerTwoMove;
    _readyOne = false;
    _readyTwo = false;
    _gameOn = true;

    startGame(playerOne, playerTwo){
        this._gameOn = true;
        this._clearMoveMessages();
        this._clearInventoryImages();
        this._playerOneChoice = 'random' //reset to default choice
        this._playerTwoChoice = 'random' //reset to default choice
        this._selectionBoxOne.classList.remove('hidden');
        this._selectionBoxTwo.classList.remove('hidden');
        this._setUpPlayerNames(playerOne, playerTwo);
        this._setUpPlayerImages(playerOne, playerTwo);
        this.updatePlayerData(playerOne, playerTwo);
    }

    endGame(){
        this._selectionBoxOne.classList.add('hidden');
        this._selectionBoxTwo.classList.add('hidden');
        this._gameOn = false;
    }

    //eventlistener for ready button. passes player move choice argument to handler.
    addHandlerReadyButton(handler){
        this._readyButtonOne.addEventListener("click", function(){
            this._readyOne = true;
            this._playerOneChoice = document.getElementById('choice-player--one').value;
            if(!this._readyTwo){
                this._selectionBoxOne.classList.add('hidden');
                this._gameMessageOne.insertAdjacentHTML('afterbegin', "Player 1 ready. <br> Waiting for player 2");
                return; //other player not ready
            }
            
            const setUpData = this._allReadyDataSetUp();
            handler(setUpData);
        }.bind(this))

        this._readyButtonTwo.addEventListener("click", function(){
            this._readyTwo = true;
            this._playerTwoChoice = document.getElementById('choice-player--two').value;
            if(!this._readyOne){
                this._selectionBoxTwo.classList.add('hidden');
                this._gameMessageTwo.insertAdjacentHTML('afterbegin', "Player 2 ready. <br> Waiting for player 1");
                return; //other player not ready
            }
            
            const setUpData = this._allReadyDataSetUp();
            handler(setUpData);
        }.bind(this))

        //hotkey option instead of manual selection and clicking ready - hides choice from opponent
        document.addEventListener('keydown', function(e){
             //do not listen for keys if main menu or gameover menu open or game over
            if(!this._gameMenu.classList.contains('hidden'))return;
            if(!this._gameOverMenu.classList.contains('hidden')) return;
            if(!this._gameOn)return;

            if(['w', 'a', 's', 'd'].includes(e.key)){
                //can't change selection once you click a hotkey until the next round
                if(this._readyOne === false){
                    this._readyOne = true;
                    this._selectionBoxOne.classList.add('hidden');
                    this._gameMessageOne.insertAdjacentHTML('afterbegin', "Player 1 ready. <br> Waiting for player 2");
                    const choiceOne = this._hotKeyMoveGenerator(e.key);
                    this._playerOneChoice = choiceOne;
                }
            }
            if(['i', 'j', 'k', 'l'].includes(e.key)){
                //can't change selection once you click a hotkey until the next round
                if(this._readyTwo === false){
                    this._readyTwo = true;
                    this._selectionBoxTwo.classList.add('hidden');
                    this._gameMessageTwo.insertAdjacentHTML('afterbegin', "Player 2 ready. <br> Waiting for player 1");
                    const choiceTwo = this._hotKeyMoveGenerator(e.key);
                    this._playerTwoChoice = choiceTwo;
                }
            }
            
            if(!this._readyOne || !this._readyTwo) return; //one of the players is not ready

            const setUpData = this._allReadyDataSetUp();
            handler(setUpData);

        }.bind(this))

    }

    _hotKeyMoveGenerator(hotkey){
        switch(hotkey){
            case "w":
                return "random"
            case "a":
                return "attack"
            case "d":
                return "defend"
            case "s":
                return "item"
            case "i":
                return "random"
            case "j":
                return "attack"
            case "l":
                return "defend"
            case "k":
                return "item"
        }
    }

    _allReadyDataSetUp(){
        this._readyOne = false;
        this._readyTwo = false;
        this._clearMessages();
        this._showSelectionBox();
        return this._getPlayerMoves();
    }

    _getPlayerMoves(){
        const moveOne = this._playerOneChoice;
        this._playerOneMove = moveOne === "random"? this._randomMoveGenerator(): moveOne;
        const moveTwo = this._playerTwoChoice;
        this._playerTwoMove = moveTwo === "random"? this._randomMoveGenerator(): moveTwo;
        
        const moves = {
            'playerOneMove': this._playerOneMove,
            'playerTwoMove': this._playerTwoMove,
        }

        return moves
    }

    //method to update score on page. Should be called at start and after each game.
    updateScore(playerOneScore, playerTwoScore){
        this._scorePlayerOne.innerHTML = '';
        this._scorePlayerTwo.innerHTML = '';
        this._scorePlayerOne.insertAdjacentHTML('afterbegin', `Score: ${playerOneScore}`);
        this._scorePlayerTwo.insertAdjacentHTML('afterbegin',`Score: ${playerTwoScore}`);
    }
    
    //method to update health/stamina/inventory between rounds
    updatePlayerData(playerOne, playerTwo){
        this._vitalsPlayerOne.innerHTML = '';
        this._vitalsPlayerTwo.innerHTML = '';
        this._vitalsPlayerOne.insertAdjacentHTML('afterbegin', `Health: ${playerOne.health} <br> Stamina: ${playerOne.stamina}`);
        this._vitalsPlayerTwo.insertAdjacentHTML('afterbegin', `Health: ${playerTwo.health} <br> Stamina: ${playerTwo.stamina}`);

        // Use Object.keys(itemsEquipped) to get keys into an array from itemsEquipped object so you can iterate through it
        if(Object.keys(playerOne.itemsEquipped) && Object.keys(playerOne.itemsEquipped).length > 0){
            this._playerOneInventory.classList.remove('hidden');
            this._playerOneInventory.innerHTML = '';

            Object.keys(playerOne.itemsEquipped).forEach(item => {
                const markUpOne = `<div class="equipped-items equipped-items--one"><img class="img-equipped img-equipped--one" 
            src="./static/src/img/${playerOne.itemsEquipped[item]["name"]}.jpg" alt="${playerOne.itemsEquipped[item]["name"]} image"></div>`;
            this._playerOneInventory.insertAdjacentHTML('beforeend', markUpOne)
            });
        }
        if(Object.keys(playerTwo.itemsEquipped) && Object.keys(playerTwo.itemsEquipped).length > 0){
            this._playerTwoInventory.classList.remove('hidden');
            this._playerTwoInventory.innerHTML = '';

            Object.keys(playerTwo.itemsEquipped).forEach(item => {
                const markUpTwo = `<div class="equipped-items equipped-items--two"><img class="img-equipped img-equipped--two" 
            src="./static/src/img/${playerTwo.itemsEquipped[item]["name"]}.jpg" alt="${playerTwo.itemsEquipped[item]["name"]} image"></div>`;
            this._playerTwoInventory.insertAdjacentHTML('beforeend', markUpTwo)
            });
            
        }
    }

    //update player move message box
    updatePlayerMoveandImageMessages(moves){
        this._clearMoveMessages();
        const markupOne = this._moveMarkupBuilder(moves.playerOneMove);
        const markupTwo = this._moveMarkupBuilder(moves.playerTwoMove);
        this._playerOneMoveMessage.insertAdjacentHTML('afterbegin', markupOne);
        this._playerTwoMoveMessage.insertAdjacentHTML('afterbegin', markupTwo);
        this._updatePlayerMoveImages(moves);
    }

    _moveMarkupBuilder(move){
        if(move.health){
            return `Health potion: Health+ ${move.health}`;
        }
        if(move.stamina){
            return `Stamina potion: Stamina +${move.stamina}`;
        }
        if(move.armour){
            return `You picked up a ${move.armour} which increases your defence by ${Math.round((move.defenceMultiplier - 1) * 100)} percent!`;
        }
        if(move.weapon){
            return `You picked up a ${move.weapon} which increases your attack by ${Math.round((move.attackMultiplier - 1) * 100)} percent!`;
        }
        if(move.attack || move.attack === 0){
            return `Attack! ${move.attack} damage`;
        }
        if(move.defend){
            return `Defend! ${move.defenceMessage? move.defenceMessage: ''}`;
        }
        else{
            return 'Error'
        }
        }
  
    //methods to update fighter image
    _updatePlayerMoveImages(moves){
        this._playerOneImage.src = `./static/src/img/player_one_${moves.playerOneMove.move}.jpg`;
        this._playerTwoImage.src = `./static/src/img/player_two_${moves.playerTwoMove.move}.jpg`;
    }

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

    _clearMoveMessages(){
        this._playerOneMoveMessage.innerHTML = '';
        this._playerTwoMoveMessage.innerHTML = '';
    }

    _clearInventoryImages(){
        this._playerTwoInventory.innerHTML = '';
        this._playerOneInventory.innerHTML = '';
        this._playerTwoInventory.classList.add('hidden');
        this._playerOneInventory.classList.add('hidden');
    }

    //bring selection box back after hiding on ready
    _showSelectionBox(){
        this._selectionBoxOne.classList.remove('hidden');
        this._selectionBoxTwo.classList.remove('hidden');
    }

    _setUpPlayerNames(playerOne, playerTwo){
        this._playerOneTitle.innerHTML = '';
        this._playerTwoTitle.innerHTML = '';
        this._playerOneTitle.insertAdjacentHTML('afterbegin', `<h2>${playerOne.playerName} (${playerOne.fighterType}) </h2>`);
        this._playerTwoTitle.insertAdjacentHTML('afterbegin', `<h2>${playerTwo.playerName} (${playerTwo.fighterType}) </h2>`);
    }

    _setUpPlayerImages(playerOne, playerTwo){
        this._playerOneImage.src = './static/src/img/player_one.jpg';
        this._playerTwoImage.src = './static/src/img/player_two.jpg';
        const widthOne = this._imageWidthSetUp(playerOne.fighterType);
        const widthTwo = this._imageWidthSetUp(playerTwo.fighterType);
        this._playerOneImage.style.width = `${widthOne}%`
        this._playerTwoImage.style.width = `${widthTwo}%`
    }

    //stretches fighter image so athlete is slim and tank is the widest
    _imageWidthSetUp(fighterType){
        if(fighterType === 'Bruiser') return 65;
        if(fighterType === 'Tank') return 85;
        if(fighterType === 'Athlete') return 45;
        //else custom fighter
        return 95;
    }

};


export default new GameView();