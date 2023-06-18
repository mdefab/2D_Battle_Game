class WarCryView {
    #warCryOne = document.querySelector('.warcry--one');
    #warCryTwo = document.querySelector('.warcry--two');
    #TIMEOUT_MS = 2000;

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
            this.#warCryOne.innerHTML = '';
            this.#warCryOne.classList.remove('hidden');
            this.#warCryOne.insertAdjacentHTML('afterbegin', `${warCry.warCryOne}`);
            await this.#sleep(this.#TIMEOUT_MS);
            //hide warcry
            this.#warCryOne.classList.add('hidden');
        }
        if(warCry.warCryTwo){
            //show warcry
            this.#warCryTwo.innerHTML = '';
            this.#warCryTwo.insertAdjacentHTML('afterbegin', `${warCry.warCryTwo}`);
            this.#warCryTwo.classList.remove('hidden');
            await this.#sleep(this.#TIMEOUT_MS);
            //hide warcry
            this.#warCryTwo.classList.add('hidden');
        }
    }

    //timer to remove message
    #sleep(ms){
        return new Promise(function(resolve){
            setTimeout(resolve, ms);
        })
    }

    }

export default new WarCryView();