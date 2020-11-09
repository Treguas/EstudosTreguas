/* HTML
<h1> id="t1">titulo1<h1>
<h2id="t2">titulo2<h2>
*/

let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');

t1.onclick = putUpperCase;
t2.onclick = putUpperCase;

function putUpperCase() {
    this.innerHTML = this.innerHTML.toUpperCase();
}

/**------This */


/**Example one */
let dog = {
    sound: "Au Au",
    speak: function() {
        console.log('this.sound');

    }
}

/*Example two */


function speakGeneric() {
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

let bindedFunction = speakGeneric.bind(cat);
