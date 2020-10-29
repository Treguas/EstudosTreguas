// const treHoras = 60 * 60 * 3 * 1000;
// const data = new Date('1990-03-12');
// const data = new Date(2020, 3, 20, 15 , 14); // ANO, MES, DIA, HORA, MINUTOS E SEGUNDOS, MILISSEGUNDO
// console.log(data.toDateString());



function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}


function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
    
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);




/*console.log('Dia', data.getDate());
console.log('Mês', data.getMonth);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());*/

// console.log(Date.now()); exibe hora atual