const frutas = ['Maça', 'Banana', 'Pera', 'Uva', 'Morango', 'Abacaxi'];

//FOR CLÁSSICO - Geralmente com iteráveis (Array ou String)
for (let i=0; i<frutas.length; i++) {
    console.log(frutas[i]);
}

//FOR IN - Retorna o indice ou chave (String, array ou objetos)
for (let i in frutas) {
    console.log(frutas[i]);
}

//FOR OF - Retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of frutas) {
    console.log(valor);
}

//ITERAÇÃO COM ARRAY FOREACH
frutas.forEach(Function(valor, indice, array) {
    console.log(valor, indice, array)
});