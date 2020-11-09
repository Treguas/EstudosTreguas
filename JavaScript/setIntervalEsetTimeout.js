function showTime() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

setInterval(function() {
    console.log(showTime());
}, 3000);

setTimeout(function() {
    console.log('Olá Mundo');
}, 5000);