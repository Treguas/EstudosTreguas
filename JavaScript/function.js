/* Declaração de Função (Function hoisting, Engine do javascript 
eleva ao topo as funcões na hora da execução pode estar em qualquer lugar)*/

function speak() {
    console.log('Hello Brother')
}

speak();

//First-class objects
// Function Expression

const speak1 = function() {
    console.log('Hello Brother1')
}

speak1();

function executeFunction(funcao) {
    funcao();
}

executeFunction(speak1);

//Arrow function EcmaScript 2015
const functionArrow = ()=> {
    console.log('Sou uma arrow function')
}

functionArrow();

// Function dentro de um objeto
const obj = {
    speak() {
        console.log('Estou falando')
    }
}

obj.speak();

//Parâmetros da função
//somar argumentos recebido de uma função, Arguments sustenta todos os argumentos enviados
function SumArgs() {
    let total = 0;

    for(let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

SumArgs(10,20,30,40,50);

function args(a,b,c,d,e,f) {

}

args();

// Rest Operator ... 
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 2, 1,20,50,30);