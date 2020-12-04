const pessoa = {
    nome: 'Vagner',
    sobrenome: 'Treguas',
    idade: 30,
    fala() {
        console.log(`Hello my name is ${this.nome} ${this.sobrenome} I was born in the year ${this.getDataNascimento()}`);
    },
    getDataNascimento() {
        const dataAtual =  new Date();
        return dataAtual.getFullYear() - this.idade;
    }
};

pessoa.fala();
console.log(pessoa['idade']);
console.log(pessoa.getDataNascimento());


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Valor
        writable: false, // Pode alterar ou não
        configurable: true // Permite reconfigurar as chaves
    });
}

const p1 = new Produto('Camiseta', 20, 3);
const p2 = new Produto('Computador', 999, 4);
console.log(p1, p2);
console.log(p1.nome, p1.preco, p2.nome, p2.preco);
