const alunos = ['luiz', 'Maria', 'Julimar', 'Hailie'];

alunos.push('Jessica');// adiciona no final do array
alunos.unshift('Vagner'); //Adiciona elemento no começo do array
alunos.shift(); //Remove do começo
alunos.pop(); // Remove elemento do final
//deletar sem alterar os indices
delete alunos[2];
//copiar Array
const newArray = [...alunos];
//Fatia o array
const novo = alunos.slice(1, -2);
console.log(novo)

console.log(alunos);

//SPLICE - tem a mesma função do push,pop, shift, unshift...
const names = ['Luiz', 'Maria', 'Eduardo', 'Gabriel'];
//names.splice(indice, delete, elem1, elem2, elem3);
const removidos = names.splice(3, 2, 'Treguas');
console.log(names, removidos);

//CONCATENANDO ARRAY
const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, 'String');
console.log(a3);

//CONCATENAR COM SPREAD
const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = [...a1, ...a2];
console.log(a3);