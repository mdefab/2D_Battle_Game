class HotkeysView {
    constructor(){
        this._gameMenuHotKeysButton = document.querySelector('.btn-controls');
        this._gameOverMenuHotKeysButton = document.querySelector('.controls');
        this._hotkeysMenu = document.querySelector('.player-controls');
        this._closeHotkeysMenuButton = document.querySelector('.close-hotkeys');
        this._overlay = document.querySelector('.overlay');
        let self = this;

        //open hotkeys menu on press of button in main menu or game over/pause menu
        this._gameMenuHotKeysButton.addEventListener('click', function(){
            self._overlay.style.zIndex = 1100;
            self._hotkeysMenu.classList.remove('hidden');
            
        })

        this._gameOverMenuHotKeysButton.addEventListener('click', function(){
            self._overlay.style.zIndex = 1100;
            self._hotkeysMenu.classList.remove('hidden');
        })

        // close hotkeys menu with button
        this._closeHotkeysMenuButton.addEventListener('click', function(){
            self._overlay.style.zIndex = 100;
            self._hotkeysMenu.classList.add('hidden');
        })
        //close hotkeys with esc key
        document.addEventListener('keydown', function(e){
            //hotkeys not open, esc has no affect on hotkeys menu
            if(self._hotkeysMenu.classList.contains('hidden'))return;
            if(e.key === 'Escape'){
                self._overlay.style.zIndex = 100;
                self._hotkeysMenu.classList.add('hidden');
            }
        })
    }
}

export default new HotkeysView();

