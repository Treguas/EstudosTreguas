function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2;
        }

    }
}


var turma = [
   criarAluno('Vagner', 8, 7),
   criarAluno('jessica', 6, 8),
   criarAluno('Hailie', 10, 7)
]

var aluno = turma[1]

console.log(aluno);
console.log(aluno.media());


