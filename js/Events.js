//Example 1

let title = document.getElementById('p1');

title.addEventListener('click', mudarTexto=>{
    title.innerHTML = 'mudoudenovo'
})


//Exemple 2


let title = document.getElementById('p1');

title.addEventListener('mouseover', mudarText)
title.addEventListener('mouseout', mouseOut)

function mudarText() {
    this.innerHTML = 'New Text'
}

function mouseOut() {
    this.innerHTML = 'Mouse out the Text'
}
