//Trocar numeros pares e diferentes de zero, por zero.

const changeNumber = (array) => {
    if(!array) return -1;

    let newArr = [];

    for(let i = 0; i < array.length; i++) {
        
        if(array[i] % 2 !== 0) {
            newArr.push(array[i]);
        }
        else {
            newArr.push(0);
        }
    }

    return newArr;
}



var arrTest = [1, 3, 5, 8, 11, 14, 17, 20, 27, 18, 4];

console.log(changeNumber());