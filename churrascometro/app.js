let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.getElementById('resultado');



function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarnes = carnesPP(duracao) * adultos + (carnesPP(duracao) / 2 * criancas);
    let qdtTotalCervejas = cervejasPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);


    
    resultado.innerHTML = `<p>${qdtTotalCarnes/1000} Kg de Carnes</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCervejas/355)} Latas de Cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Garrafas de Bebidas</p>`
      
}


function carnesPP(duracao) {
    if(duracao >= 6) {
        return 650;
    }else {
        return 400;
    }
}


function cervejasPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    }else {
        return 1200;
    }
}


function bebidasPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    }else {
        return 1000;
    }
}
