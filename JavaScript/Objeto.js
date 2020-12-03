const pessoa = {
    nome: 'Vagner',
    sobrenome: 'Treguas',
    idade: 30,
    fala() {
        console.log(`Hello my name is ${this.nome} ${this.sobrenome}`);
    },
    getDataNascimento() {
        const dataAtual =  new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};

pessoa.fala();
console.log(pessoa['idade']);
console.log(pessoa.getDataNascimento());