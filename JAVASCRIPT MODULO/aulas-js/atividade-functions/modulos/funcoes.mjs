const showAge = (name, born) => {
    let age = 2022 - born;

    return `A idade de ${name} é ${age}`;

}

const numPares = (arr) => {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


export {
    showAge,
    numPares
}