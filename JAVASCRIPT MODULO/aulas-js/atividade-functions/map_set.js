//Iterar sobre um map e retornar todos usuários que são admins

function verifyAdmin(map) {

    admins = [];

    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const users = new Map();

users.set('Alair', 'Admin');
users.set('Junior', 'User');
users.set('Brian', 'User');
users.set('Thiago', 'Admin');



console.log(verifyAdmin(users));



//=========================== SET

const numsArr = [22, 22, 12, 1, 35, 300, 1, 69];

function uniqueValues(arr) {
    const arrSet = new Set(numsArr);

    //Usa-se o spread pra colocar de fato os valores em array e não o SET inteiro.
    return [...arrSet];
}

console.log(uniqueValues(numsArr));