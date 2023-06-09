class GameView {
    _scorePlayerOne = document.querySelector('.score-player--one');
    _scorePlayerTwo = document.querySelector('.score-player--two');
    //eventlistener for ready button - perhaps in constructor

    //method to update score on page. Should be called at start and after each game.
    updateScore(playerOneScore, playerTwoScore){
        this._scorePlayerOne.innerHTML = ''
        this._scorePlayerTwo.innerHTML = ''
        this._scorePlayerOne.insertAdjacentHTML('afterbegin', `Score: ${playerOneScore}`);
        this._scorePlayerTwo.insertAdjacentHTML('afterbegin',`Score: ${playerTwoScore}`);
    }
    
    //method to update health/stamina between rounds

    //method to update fighter image

    //method to show attack value on attack

    //method to update inventory

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

};

export default new GameView();