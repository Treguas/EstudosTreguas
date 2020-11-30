const numeros = [05,10,22,44,51,08,12,02,03,40,50,07];
const numerosFiltrados = numeros.filter((valor) => {
    return valor < 10;
});
console.log(numerosFiltrados);

function newStudent(name, age) {
    return {name, age}
}

let student = [
    newStudent("Mario", 23),
    newStudent("Vagner", 30),
    newStudent("Jessica", 29),
    newStudent("Halie", 18)
]

let players = [
    newStudent("Julimar", 41),
    newStudent("Maria", 35),
    newStudent("Solange", 25),
    newStudent("Lucas", 17)
]


function HasMinus30(student) {
    return student.age < 30
}

function hasPlus30(student) {
    return student.age > 30
}

console.log(players.filter(hasPlus30))