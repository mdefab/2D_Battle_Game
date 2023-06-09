class GameView {
    //eventlistener for ready button - perhaps in constructor

    //method to update score
    
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

}