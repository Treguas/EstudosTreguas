

let allP = document.getElementsByTagName('p');


for(let i of allP) {
    console.log(i[0])
}


let title = document.getElementById('p1')

title.addEventListener('click', mudarTexto=>{
    title.innerHTML = 'mudoudenovo'
})

