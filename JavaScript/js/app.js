

let allP = document.getElementsByTagName('p');


for(let i of allP) {
    console.log(i[0])
}


let title = document.getElementById('p1')

title.addEventListener('click', mudarTexto=>{
    title.innerHTML = 'mudoudenovo'
})


var elementos = document.querySelectorAll('p');

/* -- Exemple one.
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.background ="gold";
}*/

// exemplo2
for (const item of elementos) {
    item.style.background = "yellow";
    item.style.textAlign="center"
    }