//Trate o erro da forma que achar mais conveniente.

function soma(x, y) {
    if(typeof x !== 'number' ||  typeof y !== 'number') {
        throw new Error('X e Y precisam ser números.')
    }

    return x + y;
}


try {
    //console.log(soma(1,3));
    console.log(soma('1', 3)); //Passando uma string para testar.

} catch(error) {
    // console.log(error);
    console.log('Passe um texto mais amigável para o usuário Ex: X e Y precisam ser números.');
}