const peso = document.querySelector('.peso').value;
const altura = document.querySelector('.altura').value;
const resultado = document.querySelector('.resultado');
const calcular = document.querySelector('.calcular');


calcular.addEventListener('click', ()=> {

    //event.preventDefault();
            
    if (peso === '' && altura === '') {
        alert('Preencha os campoas a cima!')
    }else {

        const imc = peso / (altura * altura)
        imc.value

        resultado.innerHTML = imc.toFixed(2);       
        resultado.classList.add('paragrafo-resultado');
    }
    
})

//para resetar a conta!
function reset() {
    document.querySelector('.peso').value='';
    document.querySelector('.altura').value='';
    location.reload();
}








