function createCalculator() {
    this.display = document.querySelector('.display');
        this.start = () => {
            this.getClick();//Captura os Cliques
            this.getEnter();//Captura o Enter
        };

    this.getEnter = () => {
        document.addEventListener('keypress', (e)=> {
            if (e.keyCode ===13) {
                this.doAccount();
            }
        });

    };

    this.getClick = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);//Criou um Método no display
            if (el.classList.contains('btn-clear')) this.clear(el);
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.doAccount(el);//Realiza a Conta

        });
    };

    //Metodos
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';
    
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    
    this.doAccount = (el) => {
        try {
            // CONTA
            const calculation = eval(this.display.value);

            if(!calculation) {
                alert('Conta Inválida');
                return;
            }
            this.display.value = calculation;
        } catch(e) {
            alert('Conta Inválida');
            return;
        }
    }  
}

const calculator = new createCalculator();
calculator.start();
