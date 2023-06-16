class GameOver {
    _endGameMessageOne = document.querySelector('.end-game-message--one');
    _endGameMessageTwo = document.querySelector('.end-game-message--two');
    _overlay = document.querySelector(".overlay");

    gameOverMessages(gameStatus){
        this._overlay.classList.remove('hidden');
        this._endGameMessageOne.innerHTML = '';
        this._endGameMessageTwo.innerHTML = '';
        this._endGameMessageOne.classList.remove('hidden');
        this._endGameMessageTwo.classList.remove('hidden');
        this._endGameMessageOne.insertAdjacentHTML('afterbegin', gameStatus.endGameMessageOne);
        this._endGameMessageTwo.insertAdjacentHTML('afterbegin', gameStatus.endGameMessageTwo);
    }

    //implement later:
    _hideMenuandOverlay(){
        this._gameOverMenu.classList.add("hidden");
        this._overlay.classList.add("hidden");
    }

};

export default new GameOver();