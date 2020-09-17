let users = ["Jessica", "Felipe", "Vagner", "Hailie"];

function insertUsers(name, callback ) {

    setTimeout(() => {
        users.push(name);
        callback();
    }, 1000);    
}

function listUsers() {
    console.log(users);
}

insertUsers('Julimar', listUsers);



/**Promises */

function insertUsers(name) {

        let promises = new Promise(function(resolve, reject) {
     
        setTimeout(() => {
            users.push(name);
            let error = false;

            if (!error) {
                resolve();
            }else {
                reject({msg: "Erro Encontrado!"})
            }
        }, 1000);
    })
        return promise;
}


function listUsers() {
    console.log(users);
}


insertUsers("Maria")
.then(listUsers)
.catch((error)=> {
    console.log(error)
});



    /** Async Await**/

    function insertUsers(name) {

        let promises = new Promise(function(resolve, reject) {
     
        setTimeout(() => {
            users.push(name);
            let error = false;

            if (!error) {
                resolve();
            }else {
                reject({msg: "Erro Encontrado!"})
            }
        }, 1000);
    })
        return promise;
}


function listUsers() {
    console.log(users);
}

async function executar() {
    await insertUsers ("Maria");
    listUsers();
}

executar();


