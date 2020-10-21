const pessoa = {
    nome: 'Vagner',
    sobrenome: 'Treguas',
    idade: 30,
    fala() {
        console.log(`Hello my name is ${this.nome} ${this.sobrenome}`);
    }
};

pessoa.fala();