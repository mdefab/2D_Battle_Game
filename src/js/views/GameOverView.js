class GameOverView {
    _endGameMessageOne = document.querySelector('.end-game-message--one');
    _endGameMessageTwo = document.querySelector('.end-game-message--two');
    _btnRematch = document.querySelector(".rematch");
    _btnChange = document.querySelector(".change");
    
    
    
    constructor(){
        this._btnReset = document.querySelector(".reset");
        this._gameOverMenu = document.querySelector(".game-over-menu");
        this._overlay = document.querySelector(".overlay");
        this._gameMenu = document.querySelector(".game-menu");
        this._controlsMenu = document.querySelector(".player-controls");
        let self = this;
    
        //full reset button - reset all data - fresh start
        this._btnReset.addEventListener('click', function(){
            window.location.reload();
        })

        //toggle game over menu with esc key
      document.addEventListener('keydown', function(e){
            if(e.key === 'Escape'){
                //do not allow esc key if main menu or hotkeys menu open
                if(!self._gameMenu.classList.contains('hidden'))return;
                if(!self._controlsMenu.classList.contains('hidden'))return;
                self._gameOverMenu.classList.toggle('hidden');
                self._overlay.classList.toggle('hidden');
            }
            return;
        });
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

    //fight again button - starts next round immediately - keeps same username/fighter/scores
    addHandlerRematchButton(handler){
        this._btnRematch.addEventListener('click', function(){
            this._hideMenuandOverlayandEndGameMessages();
            handler();
        }.bind(this))
    }

    //change username or fighter - goes back to initial game menu but keeps score data
    addHandlerChangeButton(handler){
        this._btnChange.addEventListener('click', function(){
            this._hideMenuandOverlayandEndGameMessages();
            handler();
        }.bind(this))
    }

    _hideMenuandOverlayandEndGameMessages(){
        this._endGameMessageOne.classList.add('hidden');
        this._endGameMessageTwo.classList.add('hidden');
        this._gameOverMenu.classList.add("hidden");
        this._overlay.classList.add("hidden");
    }

};

export default new GameOverView();