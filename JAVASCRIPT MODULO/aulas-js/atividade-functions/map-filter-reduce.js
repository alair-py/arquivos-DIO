// MAP COM THIS
const item1 = {
    name: "banana",
    value: 6
}

const item2 = {
    name: "uva",
    value: 7
}

const nums = [1, 2, 3];

function mapThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

console.log("MAP COM THIS: " + mapThis(nums, item2));




//MAP SEM THIS
function mapNoThis(arr) {
    return arr.map(function (item) {
        return item * 3;
    });
}

console.log("MAP SEM THIS: " + mapNoThis(nums));




//FILTER
function filtraPares(arr) {
    return arr.filter(function(item) {
        return item % 2 === 0;
    })
}

const myArr = [1,2,3,4,5,6,7,8,9,10,11];

console.log("FILTER: " + filtraPares(myArr));





// REDUCE EXEC 1
function somaNums(arr) {
    return arr.reduce(function(prev, current) {
        console.log("PREVIOUS ATUAL: " + prev);
        console.log("CURRENT ATUAL: " + current);
        return prev + current;
    });
}


const myArr2 = [1,2,3,4];
console.log("SOMA NUMEROS (REDUCE): " + somaNums(myArr2));




//REDUCE EXEC 2

let saldoAtual = 100;

const listPrecos = [5.00, 2.59, 23.90, 11.59];


function calCustos(arr, thisArg) {
    return arr.reduce(function(prev, current) {
        return prev - current;
    }, thisArg);
}




console.log("Saldo atual pós compras: " + calCustos(listPrecos, saldoAtual));