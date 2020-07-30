var n1 = Number(window.prompt('Digite um numero: '))
var n2 = Number(window.prompt('Digite outro numero: '))
var soma = n1 + n2

window.alert ('A soma dos valores é: '+ soma);


//Função, Dois tipos de Função Realiza uma tarefa, não devolve valor
function dizerNome() {
  console.log('Spaceborne');
}
//Funçao, que retorna um valor;
function aluno(nota){
  if (nota <= 5){
    return 'reprovado'
  } else {
    return 'aprovado'
  }
}

const resultado = aluno(10)
console.log(resultado);


//Operador ternário

let pontos = 100;
let usuario = pontos > 100 ? 'Premium' : 'Comum';

console.log(usuario);
