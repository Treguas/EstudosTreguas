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


//Estrutura de Repeticao

const alunosDaTurmaA = [
  {
    nome: 'Vagner',
    nota: 8
  },
  {
    nome: 'Felipe',
    nota: 6
  }
  ]

const alunosDaTurmaB = [
  {
    nome: 'Daniel',
    nota: 8
  },
  {
    nome: 'Lucas',
    nota: 5
  }
  ]

function calculaMedia(alunos) {
  let soma = 0;
  for(let i=0; i<alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = soma/alunos.length
  return media
}

function marcarComoReprovado(alunos) {
  for (aluno of alunos) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
      aluno.reprovado = true;
    }
  }
}


function enviarMensagemReprovado(aluno) {
  if(aluno.reprovado) {
  console.log(`O aluno ${aluno.nome} está reprovado!`)
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviaMensagemReprovado(aluno)
  }
}
 

alunoReprovado(alunosDaTurmaA);
alunoReprovado(alunosDaTurmaB);
    
  

