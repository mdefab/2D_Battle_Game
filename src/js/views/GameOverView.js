class GameOver {
    _endGameMessageOne = document.querySelector('.end-game-message--one');
    _endGameMessageTwo = document.querySelector('.end-game-message--two');
    _overlay = document.querySelector(".overlay");
    _gameOverMenu = document.querySelector(".game-over-menu");
    
    
    constructor(){
        this._btnReset = document.querySelector(".reset");
        this._btnRematch = document.querySelector(".rematch");
        this._btnChange = document.querySelector(".change");

        this._btnReset.addEventListener('click', function(){
            window.location.reload();
        })

        this._btnRematch.addEventListener('click', function(){
            console.log("rematch pressed");
        })

        this._btnChange.addEventListener('click', function(){
            console.log("change pressed");
        })
    }

    gameOverMessages(gameStatus){
        this._overlay.classList.remove('hidden');
        this._gameOverMenu.classList.remove('hidden');
        this._endGameMessageOne.innerHTML = '';
        this._endGameMessageTwo.innerHTML = '';
        this._endGameMessageOne.classList.remove('hidden');
        this._endGameMessageTwo.classList.remove('hidden');
        this._endGameMessageOne.insertAdjacentHTML('afterbegin', gameStatus.endGameMessageOne);
        this._endGameMessageTwo.insertAdjacentHTML('afterbegin', gameStatus.endGameMessageTwo);
    }

    //full reset button - reset all data - fresh start

    //fight again button - starts next round immediately - keeps same username/fighter/scores

    //change username or fighter - goes back to initial game menu but keeps score data

    // perhaps listen to esc key to bring up game over menu options

    //implement later:
    _hideMenuOverlayandEndGameMessages(){
        this._endGameMessageOne.classList.add('hidden');
        this._endGameMessageTwo.classList.add('hidden');
        this._gameOverMenu.classList.add("hidden");
        this._overlay.classList.add("hidden");
    }

};

export default new GameOver();