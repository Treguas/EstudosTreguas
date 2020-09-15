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
