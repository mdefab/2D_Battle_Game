class WarCryView {
    _warCryOne = document.querySelector('.warcry--one');
    _warCryTwo = document.querySelector('.warcry--two');
    _TIMEOUT_MS = 2500;

    addHandlerWarCry(handler){
        document.addEventListener('keydown', function(e){
            //player 1
            if(e.key==='c'){
                handler(1);
                return;
            }
            //player 2
            if(e.key==='m'){
                handler(2);
                return;
            }
            return;
        })
    }

    async showWarCryMessage(warCry){
        if(warCry.warCryOne){
            //show warcry
            this._warCryOne.innerHTML = '';
            this._warCryOne.classList.remove('hidden');
            this._warCryOne.insertAdjacentHTML('afterbegin', `${warCry.warCryOne}`);
            await this._sleep(this._TIMEOUT_MS);
            //hide warcry
            this._warCryOne.classList.add('hidden');
        }
        if(warCry.warCryTwo){
            //show warcry
            this._warCryTwo.innerHTML = '';
            this._warCryTwo.insertAdjacentHTML('afterbegin', `${warCry.warCryTwo}`);
            this._warCryTwo.classList.remove('hidden');
            await this._sleep(this._TIMEOUT_MS);
            //hide warcry
            this._warCryTwo.classList.add('hidden');
        }
    }

    //timer to remove message
    _sleep(ms){
        return new Promise(function(resolve){
            setTimeout(resolve, ms);
        })
    }

    }

export default new WarCryView();