const paragrafos = document.querySelector('.paragrafos');
ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;

for (p of ps) {
    p.style.backgroundColor = estilosBody.backGroundColorBody;
    p.style.textTransform = 'uppercase';
    p.style.color = 'white';
}
        