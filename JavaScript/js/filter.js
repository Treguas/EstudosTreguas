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